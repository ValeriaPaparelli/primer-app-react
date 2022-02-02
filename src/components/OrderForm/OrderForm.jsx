import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './OrderForm.css';

const OrderForm = ({setShowOrderForm}) => {

    const { cartList, getTotal, deleteCart } = useContext(CartContext);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [orderId, setOrderId] = useState(null);

    const [userInfo, setForm] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const handleOnChange = (e) => {
        const { target } = e
        setForm({...userInfo, [target.name]: target.value});
    };

    const handleSubmit = async (e) => { 
        e.preventDefault();

        setLoading(true);
        
        const items = cartList.map(item => {
            return { 
                id: item.product.id, 
                title: item.product.title, 
                price: item.product.price,
                quantity: item.quantity
            };
        });

        const newOrder = {
            buyer: userInfo,
            items,
            date: new Date(),
            total: getTotal()
        }

        // Creaciòn de la orden
        const db = getFirestore();  
        const ordersCollection = collection(db, 'orders');

        await addDoc(ordersCollection, newOrder)
            .then(({id}) => {
                setOrderId(id);
                deleteCart();
            }).catch(err => {
                setError(err);
                console.log(error);
            }).finally(() => {
                setLoading(false);
            });

        // Actualizaciòn de ìtems
        const itemsCollection = collection(db, 'items');

        const updateStockQuery = query(
            itemsCollection, where(documentId(), 'in', items.map(item => item.id))
        );

        const batch = writeBatch(db);

        await getDocs(updateStockQuery)
            .then(resp => resp.docs.forEach(doc => batch.update(doc.ref, {
                stock: doc.data().stock - items.find(item => item.id === doc.id).quantity
            })))
            .catch(err => {
                setError(err);
            }).finally(() => {
                setLoading(false);
                console.log('stock actualizado');
            });
        
        batch.commit();
    }   
  
  return ( !orderId ? 
    <div className='form-container'>
      <h4 className='title-form'>Por favor completá estos datos</h4>
      <form className="order-form" onSubmit={handleSubmit}>
          <div className="order-form-input">
            <input className='form-input'
                type="text" 
                name="name" 
                placeholder="Nombre"
                value={userInfo.name}
                onChange={handleOnChange} 
                required
            />
          </div>
          <div className="order-form-input">
            <input className='form-input'
                type="text" 
                name="phone" 
                placeholder="Teléfono"
                value={userInfo.phone}
                onChange={handleOnChange}  
                required
            />
          </div>
          <div className="order-form-input">
            <input className='form-input'
                type="email" 
                name="email" 
                placeholder="Email"
                value={userInfo.email}
                onChange={handleOnChange}  
                required
            />
          </div>
          
          <div className="order-actions">
            <button className='confirm-button' disabled={loading}>
                {!loading ? 'Confirmar' : 'Enviando ...'}
            </button>
            { !loading && <button 
                className='cancel-button'
                onClick={() => setShowOrderForm(prevState => !prevState)}
            >
                    Cancelar
            </button> }
          </div>
          
      </form>
  </div>
  : <div className='congrats-container'>
      <h2>Gracias por tu compra!</h2>
      <p className='congrats-id'>El ID de tu orden es: <b>{orderId}</b></p>
      <Link to="/" className='congrats-button'>
        Volver a la tienda
      </Link>
  </div>
  );
};

export default OrderForm;

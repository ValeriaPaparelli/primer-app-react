import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './Cart.css';

function Cart() {

    const { cartList, deleteItem, deleteCart, getTotal } = useContext(CartContext);

    return (
        <>
            <h3 className='cart-title'>Carrito de compra</h3>

           { cartList.length ?  
           
            <div>
                {cartList.map(item => (
                    <div key={item.product.id} className='item-containter'>
                        <div className='item-product'>{item.product.title}</div >
                        <div>${item.product.price}</div>
                        <div>x{item.quantity}</div>
                        <div>$ {item.quantity * item.product.price}</div> 
                        <button className='item-button' onClick={() => deleteItem(item.product.id)}>X</button>
                    </div>
                ))}
                <div className='total-item-containter'>
                    <p className='total-item'><strong>Total:</strong> ${getTotal()}</p>
                    <button className='total-item-button' onClick={deleteCart}>Vaciar</button> 
                </div>
            </div>

            : <div className='empty-cart-container'>
                <p className='empty-cart'>El carrito está vacío</p>
                <Link to='/' className='empty-cart-button'>Ver Productos</Link>
              </div>
            }
        </>
    )
}

export default Cart


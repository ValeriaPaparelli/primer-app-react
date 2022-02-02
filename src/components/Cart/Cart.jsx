import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import CartDetail from '../CartDetail/CartDetail';
import OrderForm from '../OrderForm/OrderForm';

function Cart() {

    const { cartList } = useContext(CartContext);

    const [showOrderForm, setShowOrderForm] = useState(false);

    return (
        <>
            <div className="cart-header">
                <h3 className='cart-title'>Carrito de compra</h3>
                { cartList.length > 0 && !showOrderForm && 
                    <button 
                        className='confirm-button'
                        onClick={() => setShowOrderForm(!showOrderForm)}
                    >
                        Confirmar orden
                    </button> 
                }
            </div>
            { !showOrderForm ? <CartDetail /> : <OrderForm setShowOrderForm={setShowOrderForm} /> }
           
        </>
    )
}

export default Cart


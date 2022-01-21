import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext);

    return (
        <div className='cartwidget-container'>
            <Link to='/carrito'> 
                <img width="60px" src="/images/carrito.png" alt="" />
            </Link>
            { getQuantity() > 0 && 
                <span className='items-quantity'>{getQuantity()}</span> 
            }
        </div>
    )
}

export default CartWidget;
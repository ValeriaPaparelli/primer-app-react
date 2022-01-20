import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext);

    return (
        <div>
            <Link to='/carrito'>
                <img width="60px" src="/images/carrito.png" alt="" />
                { getQuantity()}
            </Link>
        </div>
    )
}

export default CartWidget;
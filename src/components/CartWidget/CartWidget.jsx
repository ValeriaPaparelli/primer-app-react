import React from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
        <div>
            <Link to='/carrito'>
                <img width="60px" src="/images/carrito.png" alt="" />
            </Link>
        </div>
    )
}

export default CartWidget;
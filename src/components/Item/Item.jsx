import React from 'react';
import { Link } from 'react-router-dom';

import './Item.css'


const Item = ({ item }) => {

    const {id, title, price, pictureUrl } = item;

    return (
        <div className='item'>
            <img className='item-img' src={pictureUrl} alt="Product" />
            <div className='item-title'>{title}</div>
            <div className='item-price'>${price}</div>
            <Link to={`/detalle/${id}`} className='item-detail'>Detalle del Producto</Link>
        </div>
    )
}

export default Item;

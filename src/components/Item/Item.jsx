import React from 'react';
import './Item.css'

const images = require.context('../../images', true);

const Item = ({ item }) => {
    console.log('ITEM - Recibiendo cada producto por props:', { item });
    return (
        <div className='items'>
            <div className='item-id'>{item.id}</div>
            <div className='item-title'>{item.title}</div>
            <div className='item-price'>${item.price}</div>
            <img className='item-img' src={ images(`./contorno.JPG`)} alt="Product" />
        </div>
    )
}

export default Item;

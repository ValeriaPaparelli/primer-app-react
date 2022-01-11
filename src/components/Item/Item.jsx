import React from 'react';
import { getProduct } from '../../mocks/asyncMock';
import './Item.css'


const Item = ({ item, setSelectedItem }) => {

    const {id, title, price, pictureUrl} = item;

    const handleItemClick = () => {
        getProduct(id)
            .then(product => setSelectedItem(product));
    };

    return (
        <div className='item' onClick={handleItemClick}>
            <img className='item-img' src={pictureUrl} alt="Product" />
            <div className='item-title'>{title}</div>
            <div className='item-price'>${price}</div>
        </div>
    )
}

export default Item;

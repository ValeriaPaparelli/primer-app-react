import React from 'react';
import Item from '../Item/Item';
import './itemList.css';

function ItemList({ items, category }) {

    return (
        <>
            <h2 className='title-category'>
                {category ? `Categoría ${category}` : 'Productos'}
            </h2>
            <div className='items'>
                { items.map(item => <Item key={item.id} item={item} /> )}
            </div>
        </>
    )
}

export default ItemList;

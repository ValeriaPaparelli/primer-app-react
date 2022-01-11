import React from 'react';
import Item from '../Item/Item';

import './itemList.css';

function ItemList({ items, setSelectedItem }) {
    return (
        <div className='items'>
            { items.length 
                ? items.map(item => 
                    <Item  
                        key={item.id} 
                        item={item} 
                        setSelectedItem={setSelectedItem} 
                    />
                )
                : <div>Cargando ...</div>
            }
        </div>
    )
}

export default ItemList;

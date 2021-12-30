import React from 'react';
import Item from '../Item/Item';

function ItemList({ items }) {
    console.log('ITEM LIST - Recibiendo los productos por props:', { items });
    return (
        <div>
            { items.length 
                ? items.map(item => <Item key={item.id} item={item} />)
                : <div>Cargando ...</div>
            }
        </div>
    )
}

export default ItemList;

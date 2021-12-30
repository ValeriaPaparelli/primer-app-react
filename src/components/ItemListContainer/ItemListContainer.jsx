import React, { useEffect, useState } from 'react';
import { asyncMock } from '../../mocks/asyncMock';
// import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([]);
    console.log('ITEMS LIST CONTAINER - Estado interno:', {items});

    useEffect(() => {
        console.log('USE EFFECT - Yendo a buscar los productos ...');
        asyncMock()
            .then(products => setItems(products))
            .catch(err => console.warn(err));
    }, [setItems]);

    return (
        <div>
            {/* <p>{greeting}</p> */}
            { /* <ItemCount stock={5} initial={1} /> */}
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;

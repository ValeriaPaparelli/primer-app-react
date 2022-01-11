import React, { useEffect, useState } from 'react';
import { getProducts } from '../../mocks/asyncMock';
import ItemDetailContainer from '../ItemDetalContainer/ItemDetailContainer';
// import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {}, []);

    useEffect(() => {
        getProducts()
            .then(products => setItems(products))
            .catch(err => console.warn(err));
    }, [setItems]);

    return (
        <div>
            {/* <p>{greeting}</p> */}
            { /* <ItemCount stock={5} initial={1} /> */}

            { selectedItem ? 
                <ItemDetailContainer 
                    setSelectedItem={setSelectedItem} 
                    selectedItem={selectedItem} 
                /> : 
                <ItemList 
                    items={items} 
                    setSelectedItem={setSelectedItem} 
                /> 
            }
            
        </div>
    )
}

export default ItemListContainer;

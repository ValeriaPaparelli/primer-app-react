import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../mocks/asyncMock';
import ItemList from '../ItemList/ItemList';
import PuffLoader from "react-spinners/PuffLoader";

import './ItemListContainer.css';

const ItemListContainer = () => {

    const [items, setItems] = useState(null);

    const {category} = useParams();

    useEffect(() => {
        setItems(null);
        getProducts(category)
            .then(products => setItems(products))
            .catch(err => console.warn(err));
    }, [setItems, category]);

    return items ? 
                <ItemList items={items} category={category} /> : 
                <div className="spinner-container">
                    <PuffLoader color="#b39864" />;
                </div>
}

export default ItemListContainer;

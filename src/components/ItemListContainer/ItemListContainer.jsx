import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import PuffLoader from "react-spinners/PuffLoader";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

import './ItemListContainer.css';

const ItemListContainer = () => {

    const [items, setItems] = useState(null);

    const {category} = useParams();

    useEffect(() => {

        const db = getFirestore();

        if(!category) {
            const queryCollection = query(collection(db, 'items'));
            getDocs(queryCollection)
                .then(res => setItems(res.docs.map(prod => ({ id: prod.id, ...prod.data() }))));
        } else {
            const queryFilterCollection = query(collection(db, 'items'), where('category', '==', category));
            getDocs(queryFilterCollection)
                .then(res => setItems(res.docs.map(prod => ({ id: prod.id, ...prod.data() }))));
        }

    }, [setItems, category]);

    return items ? 
        <ItemList items={items} category={category} /> : 
        <div className="spinner-container">
            <PuffLoader color="#b39864" />
        </div>
}

export default ItemListContainer;

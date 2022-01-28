import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import PuffLoader from "react-spinners/PuffLoader";
import { doc, getDoc, getFirestore } from 'firebase/firestore';

import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    
    const {productId} = useParams();

    useEffect(() => {

        const db = getFirestore();
        
        const queryDocument = doc(db, 'items', productId);

        getDoc(queryDocument)
            .then(prod => setItem({ id: prod.id, ...prod.data() }));

    }, [setItem, productId]);

    return item ? 
        <ItemDetail item={item} /> : 
        <div className="spinner-container">
            <PuffLoader color="#b39864" />
        </div>
}

export default ItemDetailContainer

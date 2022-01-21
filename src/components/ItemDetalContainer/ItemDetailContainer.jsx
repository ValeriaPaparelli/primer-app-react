import './ItemDetailContainer.css';
import { useEffect, useState } from 'react';
import { getProduct } from '../../mocks/asyncMock';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import PuffLoader from "react-spinners/PuffLoader";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    
    const {productId} = useParams();

    useEffect(() => {
        getProduct(productId)
            .then(product => setItem(product))
            .catch(err => console.warn(err));
    }, [setItem, productId]);

    return item ? 
                <ItemDetail item={item} /> : 
                <div className="spinner-container">
                    <PuffLoader color="#b39864" />;
                </div>
}

export default ItemDetailContainer

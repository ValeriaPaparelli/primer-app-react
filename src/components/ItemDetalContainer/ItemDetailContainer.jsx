import './ItemDetailContainer.css';
import { useEffect, useState } from 'react';
import { getProduct } from '../../mocks/asyncMock';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

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
                <p className='loading'>Cargando...</p>
}

export default ItemDetailContainer

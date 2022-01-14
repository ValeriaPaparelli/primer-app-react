import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';
import { useState } from "react";

const ItemDetail = ({item}) => {

    const [quantity, setQuantity] = useState(0);

    console.log('Me estoy mostrando:', quantity);

    const { title, pictureUrl, price, description, stock } = item;

    const onAdd = (quantityToAdd) => {
       setQuantity(quantityToAdd);
    }

    return (
        <div className="detail-container">
            <h1 className="detail-title">{ title }</h1>
            <img className="detail-img" src={pictureUrl} alt="Product" />
            <div className="detail-description-wrapper">
                <p className="detail-description">{ description }</p>
                <div className='detail-price'>${price}</div>
                <p className='detail-stock'><b>Stock:</b> {stock} unidades.</p>
                { quantity === 0 
                    ? <ItemCount onAdd={onAdd} stock={stock} initial={1} />
                    : <Link to="/carrito" className="back-button">Finalizar Compra</Link>
                }
            </div>
            <Link to="/" className="back-button">Volver</Link>
        </div>
    )
}

export default ItemDetail

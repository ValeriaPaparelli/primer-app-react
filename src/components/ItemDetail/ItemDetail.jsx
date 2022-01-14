import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';

const ItemDetail = ({item}) => {

    const { title, pictureUrl, price, description, stock } = item;

    return (
        <div className="detail-container">
            <h1 className="detail-title">{ title }</h1>
            <img className="detail-img" src={pictureUrl} alt="Product" />
            <div className="detail-description-wrapper">
                <p className="detail-description">{ description }</p>
                <div className='detail-price'>${price}</div>
                <p className='detail-stock'><b>Stock:</b> {stock} unidades.</p>
                <ItemCount stock={stock} initial={1} /> 
            </div>
            <Link to="/" className="back-button">Volver</Link>
        </div>
    )
}

export default ItemDetail

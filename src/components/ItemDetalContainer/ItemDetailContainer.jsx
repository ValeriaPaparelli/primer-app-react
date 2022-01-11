import './ItemDetailContainer.css';

const ItemDetailContainer = ({setSelectedItem, selectedItem }) => {

    const { title, pictureUrl, price, description } = selectedItem;

    const handleClick = () => {
        setSelectedItem(null);
    }

    return (
        <div className="detail-container">
            <h1 className="detail-title">{ title }</h1>
            <img className="detail-img" src={pictureUrl} alt="Product" />
            <p className="detail-description">{ description }</p>
            <div className='detail-price'>${price}</div>
            <button className="detail-button" onClick={handleClick}>Volver</button>
        </div>
    )
}

export default ItemDetailContainer

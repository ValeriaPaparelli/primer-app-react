import React from 'react';
import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, initial }) => {
    const [count, setCount] = useState(initial);

    const handleAddClick = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const handleLessClick = (type) => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const handleResetClick = () => {
        setCount(initial);
    }

    const handleAddProductClick = () => {
        if (stock > 0) {
            console.log('Producto agregado. Cantidad', count);
            setCount(initial);
        }
    }
    
    return (
        <div className='item-detail-container'>
            <div className='image-container'>
                
            </div>
            <div className='count-container'>
                <div className='count-cant'>
                    <button className='button-count' disabled={stock < 1} onClick={handleLessClick}>-</button>
                    {count}
                    <button className='button-count' disabled={stock < 1} onClick={handleAddClick}>+</button>
                </div>
                <div className='count-function'>
                    <button className='button-function' disabled={stock < 1} onClick={handleResetClick}>Reset</button>
                    <button className='button-function' disabled={stock < 1} onClick={handleAddProductClick}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount

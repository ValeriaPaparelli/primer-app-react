//Creación del contexto

import { createContext, useState } from "react";

export const CartContext = createContext();

//Creación del componente que maneja el contexto

export const CartContextProvider = ({children}) => { 
    //Recibo con la prop children todo lo que está adentro (toda la aplicación)
    //Estados y Funciones globales las declaramos acá para poder usarlos

    //Crear un estado para el listado del carrito
    const [cartList, setCartList] = useState([]);

    const addToCart = (newItem) => {

        const itemExists = cartList.find(item => item.product.id === newItem.product.id);

        if (!itemExists) {
            setCartList([...cartList, newItem]);
        } else {

            const newCartList = cartList.map(item => {

                if (newItem.product.id === item.product.id) {
                    item.quantity = item.quantity + newItem.quantity;
                }

                return item;
            });

            setCartList(newCartList);
        }
        
    }

    const deleteItem = (id) => {
        const newCartList = cartList.filter(item => item.product.id !== id);
        setCartList(newCartList);
    }

    const deleteCart = () => {
        setCartList([]);
    }

    const getTotal = () => {
        let total = 0;
        cartList.forEach(item => {
            total += item.product.price * item.quantity;
        });
        return total;
    };

    const getQuantity = () => {
        let quantity = 0;
        cartList.forEach(item => {
            quantity += item.quantity;
        });
        return quantity;
    };

    return (
        //El contextProvider va a proveer estos valores a toda la aplicación
        <CartContext.Provider value= {{
            cartList,
            addToCart,
            deleteItem,
            deleteCart,
            getTotal,
            getQuantity
        }}> 
            {children} 
        </CartContext.Provider>
    )
}
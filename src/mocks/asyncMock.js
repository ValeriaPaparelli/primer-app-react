import {products} from './products';

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (products) {
                resolve(products);
            } else {
                reject('No se encontraron los productos');
            }
        }, 2000);
    });
}; 

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find(p => p.id === id);
            if(product) {
                resolve(product);
            }else {
                reject('No existe un producto con ese id.');
            }
        }, 2000);
    });
};

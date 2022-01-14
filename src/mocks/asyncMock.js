import {products} from './products';

export const getProducts = (category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let filterProducts;
            if(category){
                filterProducts = products.filter(p => p.category === category);
            } else {
                filterProducts = products;
            }
            
            if (filterProducts) {
                resolve(filterProducts);
            } else {
                reject('No se encontraron los productos');
            }
        }, 2000);
    });
}; 

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find(p => p.id === Number(id));
            if(product) {
                resolve(product);
            }else {
                reject('No existe un producto con ese id.');
            }
        }, 2000);
    });
};

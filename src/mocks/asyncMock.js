import {products} from './products';

export const asyncMock = () => {
    console.log('ASYNC MOCK - Buscando productos ...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (products) {
                console.log('ASYNC MOCK - Devolviendo productos ...');
                resolve(products);
            } else {
                console.log('ASYNC MOCK - No se encontraron los productos ...');
                reject('No se encontraron los productos');
            }
        }, 2000);
    });
};

import {Product, IProduct} from '../model/product.model';

export class ProductController {
    static listProducts(filter = {}): Promise<any[]> {
        return new Promise((resolve, reject) => {
            Product.find(filter, (error, result) => {
                if (error) {
                    reject(error);
                    return;
                }

                resolve(result);
            });
        })
    }

    static addProduct(product: IProduct): Promise<any> {
        return new Promise((resolve, reject) => {
            const newProduct = new Product(product);

            Product.find(product, (error, result) => {
                if (error) {
                    reject(error);
                    return;
                }

                if (result.length === 0) {
                    newProduct.save().then((savedProduct) => resolve(savedProduct));
                } else {
                    resolve(result[0]);
                }
            });
        });
    }

    static getProduct(id: string): Promise<any> {
        return new Promise((resolve, reject) => {
            Product.findById(id, (error, result) => {
                if (error) {
                    reject(error);
                    return;
                }

                resolve(result);
            })
        });
    }

    static patchProduct(id: string, product: IProduct): Promise<any> {
        return new Promise((resolve, reject) => {
            this.getProduct(id).then((existingProduct) => {
                existingProduct.name = product.name ? product.name : existingProduct.name;
                existingProduct.quantity = product.quantity ? product.quantity : existingProduct.quantity;
                existingProduct.unit = product.unit ? product.unit : existingProduct.unit;
                existingProduct.price = product.price ? product.price : existingProduct.price;
                existingProduct.date = product.date ? product.date : existingProduct.date;
                existingProduct.place = product.place ? product.place : existingProduct.place;

                existingProduct.save().then((savedProduct: any) => resolve(savedProduct));
            }, (error) => {
                reject(error);
            });
        });
    }

    static deleteProduct(id: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.getProduct(id).then((existingProduct) => {
                existingProduct.remove().then((result: any) => {
                    resolve(result);
                }, (error: any) => {
                    reject(error);
                });
            }, (error) => {
                reject(error);
            });
        });
    }
}

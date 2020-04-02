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

    static async addProduct(task: IProduct): Promise<any> {
        return new Promise((resolve, reject) => {
            const newProduct = new Product(task);

            Product.find(task, (error, result) => {
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
}

import * as express from 'express';
import {ProductController} from "../controller/product.controller";

export function register(app: express.Application, baseUrl: string): void {
    app.get(baseUrl + '/product', (request, response) => {
        ProductController.listProducts(request.query).then((products) => {
            response.json(products);
        });
    });

    app.get(baseUrl + '/product/:productId', (request, response) => {
        ProductController.getProduct(request.params.productId).then((product) => {
            response.json(product);
        });
    });

    app.post(baseUrl + '/product', (request, response) => {
        ProductController.addProduct(request.body).then((product) => {
            response.json(product);
        })
    });
}

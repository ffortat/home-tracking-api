import * as express from "express";
import * as action from './action';
import * as category from './category';
import * as place from './place';
import * as product from './product';
import * as task from './task';

const baseAPIRoute = '/api';

export function register(app: express.Application): void {
    action.register(app, baseAPIRoute);
    category.register(app, baseAPIRoute);
    place.register(app, baseAPIRoute);
    product.register(app, baseAPIRoute);
    task.register(app, baseAPIRoute);
}

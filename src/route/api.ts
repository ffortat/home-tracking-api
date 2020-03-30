import * as express from "express";
import * as task from './task';
import * as action from './action';
import * as product from './product';

const baseAPIRoute = '/api';

export function register(app: express.Application): void {
    action.register(app, baseAPIRoute);
    product.register(app, baseAPIRoute);
    task.register(app, baseAPIRoute);
}

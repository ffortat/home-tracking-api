import * as express from 'express';
import {ActionController} from "../controller/action.controller";

export function register(app: express.Application, baseUrl: string): void {
    app.get(baseUrl + '/action', (request, result) => {
        result.json(ActionController.listActions());
    });

    app.get(baseUrl + '/action/:actionId', (request, result) => {
        result.json(ActionController.getAction(+request.params.actionId));
    });

    app.post(baseUrl + '/action', (request, result) => {
        result.json(ActionController.addAction(new Date().getTime()));
    });
}

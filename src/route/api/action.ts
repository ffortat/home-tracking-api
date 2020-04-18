import * as express from 'express';
import {ActionController} from "../../controller/action.controller";

export function register(app: express.Application, baseUrl: string): void {
    app.get(baseUrl + '/action', (request, result) => {
        ActionController.listActions(request.query).then((actions) => {
            result.json(actions);
        });
    });

    app.get(baseUrl + '/action/:actionId', (request, result) => {
        ActionController.getAction(request.params.actionId).then((action) => {
            result.json(action);
        });
    });

    app.post(baseUrl + '/action', (request, result) => {
        ActionController.addAction(request.body).then((action) => {
            result.json(action);
        });
    });
}

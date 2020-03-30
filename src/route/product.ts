import * as express from 'express';

export function register(app: express.Application, baseUrl: string): void {
    app.get(baseUrl + '/product', (req, res) => {
        res.json({hello: 'world'});
    });
}

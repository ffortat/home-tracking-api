import * as express from 'express';

export function register(app: express.Application, baseUrl: string): void {
    app.get(baseUrl + '/action', (req, res) => {
        res.json({hello: 'world'});
    });
}

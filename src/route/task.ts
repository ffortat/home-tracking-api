import * as express from 'express';

export function register(app: express.Application, baseUrl: string): void {
    app.get(baseUrl + '/task', (req, res) => {
        res.json({hello: 'world'});
    });
}

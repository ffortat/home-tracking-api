import express from 'express';
import * as routes from './route';
import mongoose from 'mongoose';

const app = express();
const port = 8081; // default port to listen

mongoose.connect('mongodb://localhost/tracking', {useNewUrlParser: true, useUnifiedTopology: true});

app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    next();
});
app.use(express.urlencoded({extended: true}));
app.use(express.json());
routes.register(app);

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );

process.on('exit', () => {
    mongoose.connection.close();
})

import express from "express";
import * as routes from "./route";

const app = express();
const port = 8081; // default port to listen

routes.register(app);

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );

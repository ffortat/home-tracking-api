import * as express from "express";
import * as api from "./api";

export function register(app: express.Application): void {
    api.register(app);
}

import * as express from 'express';
import {TaskController} from "../../controller/task.controller";

export function register(app: express.Application, baseUrl: string): void {
    app.get(baseUrl + '/task', (request, response) => {
        TaskController.listTasks(request.query).then((tasks) => {
            response.json(tasks);
        });
    });

    app.get(baseUrl + '/task/:taskId', (request, response) => {
        TaskController.getTask(request.params.taskId).then((task) => {
            response.json(task);
        });
    });

    app.post(baseUrl + '/task', (request, response) => {
        TaskController.addTask(request.body).then((task) => {
            response.json(task);
        })
    });

    app.delete(baseUrl + '/task/:taskId', (request, response) => {
        TaskController.deleteTask(request.params.taskId).then((task) => {
            response.json(task);
        })
    });
}

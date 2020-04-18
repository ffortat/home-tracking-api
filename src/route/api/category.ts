import * as express from 'express';
import {CategoryController} from "../../controller/category.controller";

export function register(app: express.Application, baseUrl: string): void {
  app.get(baseUrl + '/category', (request, response) => {
    CategoryController.listCategories(request.query).then((categorys) => {
      response.json(categorys);
    });
  });

  app.get(baseUrl + '/category/:categoryId', (request, response) => {
    CategoryController.getCategory(request.params.categoryId).then((category) => {
      response.json(category);
    });
  });

  app.post(baseUrl + '/category', (request, response) => {
    CategoryController.addCategory(request.body).then((category) => {
      response.json(category);
    })
  });

  app.patch(baseUrl + '/category/:categoryId', (request, response) => {
    CategoryController.patchCategory(request.params.categoryId, request.body).then((category) => {
      response.json(category);
    });
  });

  app.delete(baseUrl + '/category/:categoryId', (request, response) => {
    CategoryController.deleteCategory(request.params.categoryId).then((category) => {
      response.json(category);
    });
  });
}

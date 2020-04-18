import * as express from 'express';
import {PlaceController} from "../../controller/place.controller";

export function register(app: express.Application, baseUrl: string): void {
  app.get(baseUrl + '/place', (request, response) => {
    PlaceController.listPlaces(request.query).then((places) => {
      response.json(places);
    });
  });

  app.get(baseUrl + '/place/:placeId', (request, response) => {
    PlaceController.getPlace(request.params.placeId).then((place) => {
      response.json(place);
    });
  });

  app.post(baseUrl + '/place', (request, response) => {
    PlaceController.addPlace(request.body).then((place) => {
      response.json(place);
    })
  });

  app.patch(baseUrl + '/place/:placeId', (request, response) => {
    PlaceController.patchPlace(request.params.placeId, request.body).then((place) => {
      response.json(place);
    });
  });

  app.delete(baseUrl + '/place/:placeId', (request, response) => {
    PlaceController.deletePlace(request.params.placeId).then((place) => {
      response.json(place);
    });
  });
}

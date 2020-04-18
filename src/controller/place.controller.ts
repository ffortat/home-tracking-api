import { IPlace, Place } from '../model/place.model';

export class PlaceController {
  static listPlaces(filter = {}): Promise<any[]> {
    return new Promise((resolve, reject) => {
      Place.find(filter, (error, result) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(result);
      });
    });
  }

  static addPlace(place: IPlace): Promise<any> {
    return new Promise((resolve, reject) => {
      const newPlace = new Place(place);

      Place.find(place, (error, result) => {
        if (error) {
          reject(error);
          return;
        }

        if (result.length === 0) {
          newPlace.save().then((savedPlace) => resolve(savedPlace));
        } else {
          resolve(result[0]);
        }
      });
    });
  }

  static getPlace(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      Place.findById(id, (error, result) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(result);
      });
    });
  }

  static patchPlace(id: string, place: IPlace): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getPlace(id).then((existingPlace) => {
        existingPlace.name = place.name ? place.name : existingPlace.name;
        existingPlace.address = place.address ? place.address : existingPlace.address;
        existingPlace.zipcode = place.zipcode ? place.zipcode : existingPlace.zipcode;
        existingPlace.city = place.city ? place.city : existingPlace.city;
        existingPlace.country = place.country ? place.country : existingPlace.country;
        existingPlace.latitude = place.latitude ? place.latitude : existingPlace.latitude;
        existingPlace.longitude = place.longitude ? place.longitude : existingPlace.longitude;

        existingPlace.save().then((savedPlace: any) => resolve(savedPlace));
      }, (error) => {
        reject(error);
      });
    });
  }

  static deletePlace(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getPlace(id).then((existingPlace) => {
        existingPlace.remove().then((result: any) => {
          resolve(result);
        }, (error: any) => {
          reject(error);
        });
      }, (error) => {
        reject(error);
      });
    });
  }
}
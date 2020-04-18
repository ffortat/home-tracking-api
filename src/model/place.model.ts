import mongoose, {Schema} from "mongoose";

export interface IPlace {
  _id?: string;
  name: string;
  address: string;
  zipcode: string;
  city: string;
  country: string;
  latitude: number;
  longitude: number;
}

const PlaceSchema = new Schema({
  name: String,
  address: String,
  zipcode: String,
  city: String,
  country: String,
  latitude: Number,
  longitude: Number,
});

export const Place = mongoose.model('Place', PlaceSchema);

import mongoose, {Schema} from "mongoose";

export interface ICategory {
  _id?: string;
  name: string;
  parent: string;
}

const CategorySchema = new Schema({
  name: String,
  parent: Schema.Types.ObjectId,
});

export const Category = mongoose.model('Category', CategorySchema);

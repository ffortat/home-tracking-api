import mongoose, {Schema} from "mongoose";

export interface IProduct {
    _id?: string;
    name: string;
    quantity: number;
    unit: string;
    price: number;
    date: Date;
}

const ProductSchema = new Schema({
    name: String,
    quantity: Number,
    unit: {
        type: String,
        enum: ['kilogram', 'gram', 'liter', 'unit'],
        default: 'kilogram'
    },
    price: Number,
    date: {
        type: Date,
        default: Date.now
    }
});

export const Product = mongoose.model('Product', ProductSchema);

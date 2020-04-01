import mongoose, {Schema, Types} from 'mongoose';

export interface IAction {
    id: number;
    timestamp: number;
}

const ActionSchema = new Schema({
    date: {type: Date, default: Date.now},
    task: Types.ObjectId
});

export const Action = mongoose.model('Action', ActionSchema);

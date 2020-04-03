import mongoose, {Schema} from 'mongoose';

export interface IAction {
    _id?: string;
    date: Date;
    task: string;
}

const ActionSchema = new Schema({
    date: {type: Date, default: Date.now},
    task: Schema.Types.ObjectId
});

export const Action = mongoose.model('Action', ActionSchema);

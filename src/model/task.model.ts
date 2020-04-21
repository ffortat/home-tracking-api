import mongoose, {Schema} from "mongoose";

export interface ITask {
    _id?: string;
    name: string;
    start: Date;
    times: number;
    frequency: string;
    interval: number;
    byDay: number[];
}

const TaskSchema = new Schema({
    name: String,
    start: {
        type: Date,
        default: Date.now
    },
    times: {
        type: Number,
        default: 1
    },
    frequency: {
        type: String,
        enum: ['hourly', 'daily', 'weekly', 'monthly', 'yearly'],
        default: 'weekly'
    },
    interval: {
        type: Number,
        default: 1
    },
    byDay: {
        type: [Number],
        default: undefined
    }
});

export const Task = mongoose.model('Task', TaskSchema);

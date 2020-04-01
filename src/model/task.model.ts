import mongoose, {Schema} from "mongoose";

export interface ITask {
    _id?: string;
    name: string;
    times: number;
    recurrence: string;
}

const TaskSchema = new Schema({
    name: String,
    times: Number,
    recurrence: {
        type: String,
        enum: ['hourly', 'daily', 'weekly', 'monthly', 'yearly'],
        default: 'weekly'
    }
});

export const Task = mongoose.model('Task', TaskSchema);

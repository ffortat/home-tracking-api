import {Task, ITask} from '../model/task.model';

export class TaskController {
    static listTasks(filter = {}): Promise<any[]> {
        return new Promise((resolve, reject) => {
            Task.find(filter)
                .populate('lastAction')
                .then((result) => resolve(result))
                .catch((error) => reject(error));
        })
    }

    static async addTask(task: ITask): Promise<any> {
        return new Promise((resolve, reject) => {
            const newTask = new Task(task);

            Task.find(task)
                .populate('lastAction')
                .then((result) => {
                    if (result.length === 0) {
                        newTask.save().then((savedTask) => resolve(savedTask));
                    } else {
                        resolve(result[0]);
                    }
                })
                .catch((error) => reject(error));
        });
    }

    static getTask(id: string): Promise<any> {
        return new Promise((resolve, reject) => {
            Task.findById(id)
                .populate('lastAction')
                .then((result) => resolve(result))
                .catch((error) => reject(error));
        });
    }

    static deleteTask(id: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.getTask(id).then((existingTask) => {
                existingTask.remove()
                    .then((result: any) => resolve(result));
            }).catch((error) => reject(error));
        });
    }
}

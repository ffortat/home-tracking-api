import {Task, ITask} from '../model/task.model';

export class TaskController {
    static listTasks(filter = {}): Promise<any[]> {
        return new Promise((resolve, reject) => {
            Task.find(filter, (error, result) => {
                if (error) {
                    reject(error);
                    return;
                }

                resolve(result);
            });
        })
    }

    static async addTask(task: ITask): Promise<any> {
        return new Promise((resolve, reject) => {
            const newTask = new Task(task);

            Task.find(task, (error, result) => {
                if (error) {
                    reject(error);
                    return;
                }

                if (result.length === 0) {
                    newTask.save().then((savedTask) => resolve(savedTask));
                } else {
                    resolve(result[0]);
                }
            });
        });
    }

    static getTask(id: string): Promise<any> {
        return new Promise((resolve, reject) => {
            Task.findById(id, (error, result) => {
                if (error) {
                    reject(error);
                    return;
                }

                resolve(result);
            })
        });
    }
}

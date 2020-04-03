import {Action, IAction} from '../model/action.model';

export class ActionController {
    static listActions(filter = {}): Promise<any[]> {
        return new Promise((resolve, reject) => {
            Action.find(filter, (error, result) => {
                if (error) {
                    reject(error);
                    return;
                }

                resolve(result);
            });
        })
    }

    static addAction(action: IAction): Promise<any> {
        return new Promise((resolve, reject) => {
            const newTask = new Action(action);

            Action.find(action, (error, result) => {
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

    static getAction(id: string): Promise<any> {
        return new Promise((resolve, reject) => {
            Action.findById(id, (error, result) => {
                if (error) {
                    reject(error);
                    return;
                }

                resolve(result);
            })
        });
    }
}

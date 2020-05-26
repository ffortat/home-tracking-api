import {Action, IAction} from '../model/action.model';
import {Task} from "../model/task.model";

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
            const newAction = new Action(action);

            Action.find(action, (error, result) => {
                if (error) {
                    reject(error);
                    return;
                }

                if (result.length === 0) {
                    newAction.save().then((savedAction) => {
                        Task.findById(action.task)
                            .populate('lastAction')
                            .then((task) => {
                                if (!task.get('lastAction') || task.get('lastAction').date < new Date(action.date)) {
                                    task.set('lastAction', savedAction._id);
                                    task.save().then((savedTask) => {
                                        resolve(savedAction);
                                    });
                                } else {
                                    resolve(savedAction);
                                }
                            })
                            .catch((taskError) => {
                                reject(taskError);
                            });
                    });
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

    static deleteAction(id: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.getAction(id).then((existingAction) => {
                const taskId = existingAction.task;
                existingAction.remove().then((deletedAction: any) => {
                    Task.findById(taskId).then((task) => {
                        Action.findOne({task: taskId}, null, {sort: '-date'})
                            .then((lastAction) => {
                                if (lastAction) {
                                    task.set('lastAction', lastAction._id);
                                } else {
                                    task.set('lastAction', undefined);
                                }
                                task.save().then((savedTask) => resolve(deletedAction));
                            }, (error) => {
                                task.set('lastAction', undefined);
                                task.save().then((savedTask) => resolve(deletedAction));
                            });
                    }, (error) => {
                        resolve(deletedAction);
                    });
                }, (error: any) => {
                    reject(error);
                });
            }, (error) => {
                reject(error);
            });
        });
    }
}

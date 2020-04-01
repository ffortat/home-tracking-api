import {Action, IAction} from '../model/action.model';

export class ActionController {
    static listActions(): IAction[] {
        // TODO list from DB
        return [
            {id: 0, timestamp: new Date().getTime()}
        ];
    }

    static addAction(timestamp: number): IAction {
        // TODO save in DB
        return {id: 0, timestamp};
    }

    static getAction(id: number): IAction {
        // TODO get from DB
        return {id, timestamp: new Date().getTime()};
    }
}

export interface Action {
    id: number;
    timestamp: number;
}

export class ActionController {
    static listActions(): Action[] {
        // TODO list from DB
        return [
            {id: 0, timestamp: new Date().getTime()}
        ];
    }

    static addAction(timestamp: number): Action {
        // TODO save in DB
        return {id: 0, timestamp};
    }

    static getAction(id: number): Action {
        // TODO get from DB
        return {id, timestamp: new Date().getTime()};
    }
}

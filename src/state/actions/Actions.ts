export enum ActionType {
    setToken = 'setToken',
    setIsAuthenticated = 'setIsAuthenticated',
    setWatchListId = 'setWatchListId',
    setWatchListItems = 'setWatchListItems',
    setWatchListUpdateQueued = 'setWatchListUpdateQueued',
}

export type Action = {
    type: ActionType;
    payload: any;
}

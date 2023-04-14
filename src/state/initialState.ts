export type InitialStateType = {
    token: string,
    isAuthenticated: boolean,
    watchListId: number,
    watchListItems: any[],
    watchListUpdateQueued: boolean,
}

export const initialState: InitialStateType = {
    token: '',
    isAuthenticated: false,
    watchListId: 0,
    watchListItems: [],
    watchListUpdateQueued: true,
}
import { InitialStateType } from '../initialState'
import { ActionType, Action } from '../actions/Actions'

function appStateReducer(
    state: InitialStateType,
    action: Action
) {

    switch (action.type) {
        case ActionType.setToken:
            return {
                ...state,
                token: action.payload,
            };

        case ActionType.setIsAuthenticated:
            return {
                ...state,
                isAuthenticated: action.payload,
            };
        
        case ActionType.setWatchListId:
            return {
                ...state,
                watchListId: action.payload,
            };

        case ActionType.setWatchListItems:
            return {
                ...state,
                watchListItems: action.payload,
            };

        case ActionType.setWatchListUpdateQueued:
            return {
                ...state,
                watchListUpdateQueued: action.payload,
            };

        default:
            return state;
    }

}

export default appStateReducer;
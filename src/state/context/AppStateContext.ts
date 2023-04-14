import { createContext } from "react";
import { InitialStateType } from "../initialState";
import { Action } from "../actions/Actions";

type StateContextType = {
    state: InitialStateType;
    dispatch: React.Dispatch<Action>;
};


export const AppStateContext = createContext({} as StateContextType);
import {combineReducers} from "redux";
import {generalReducer, GeneralState} from "./general/general";
import {createBrowserHistory} from "history";
import {connectRouter, RouterState} from "connected-react-router";

export const history = createBrowserHistory();

export const UPDATE_CLEAR = "UPDATE_CLEAR";

export interface State {
    general: GeneralState;
    router: RouterState;
}

export const rootReducer = combineReducers<State>({
    general: generalReducer,
    router: connectRouter(history)
});

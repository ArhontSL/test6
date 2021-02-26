import React from "react";
import {Provider} from "react-redux";
import {Route} from "react-router-dom";
import {ConnectedRouter} from "connected-react-router";
import {history} from "../ducks/rootReducer";
import {initStoreUtils} from "../store/utils";
import {store} from "../store";
import {Routes} from "./Routes"
import {HomePageConnected} from "../pages/home/HomePageConnected";
import {EmployeesPageConnected} from "../pages/employees/EmployeesPageConnected";

initStoreUtils(store.dispatch, store.getState);

export function App() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Route path={Routes.Home} exact component={HomePageConnected}/>
                <Route path={Routes.Employees} exact component={EmployeesPageConnected}/>
            </ConnectedRouter>
        </Provider>
    );
}

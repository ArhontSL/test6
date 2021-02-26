import { applyMiddleware, createStore } from "redux";
import { rootReducer, history } from "../ducks/rootReducer";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import logger from "redux-logger";

let middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

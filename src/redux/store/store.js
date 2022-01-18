import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import cartReducers from "../reducers/cartReducers";

export const store = createStore(
    cartReducers,
    applyMiddleware(thunk)
);
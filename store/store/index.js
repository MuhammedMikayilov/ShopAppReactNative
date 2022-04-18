import { createStore } from "redux";
// import reducer from "../reducers/index";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers";

export const store = createStore(reducer, applyMiddleware(thunk));

import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

const rooReducer = combineReducers({ todos: todoReducer });
export default rooReducer;

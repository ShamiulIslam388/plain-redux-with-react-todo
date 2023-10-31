import { createStore } from "redux";
import rooReducer from "./rootReducer";

const store = createStore(rooReducer);
export default store;

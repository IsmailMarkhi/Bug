import {TodoReducer} from "./TodoReducer";
import {createStore} from "redux";
export const store=createStore(TodoReducer);
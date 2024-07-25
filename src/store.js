import {createStore} from "redux";
import {numReducer} from "./services/reduxCounter";
import {todoReducer} from "./services/reduxTodo";
const store = createStore(numReducer);
export default store;
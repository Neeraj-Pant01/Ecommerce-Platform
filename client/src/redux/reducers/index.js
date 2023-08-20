import {combineReducers} from "redux"
import { LoginReducer } from "./userReducers"
import { cartReducer } from "./userReducers";

const reducers = combineReducers({
    LoginReducer,
    cartReducer
})

export default reducers;
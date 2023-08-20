import { createStore } from "redux";
import reducers from "./reducers";
import {persistReducer, persistStore} from "redux-persist"
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key:"user",
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(persistedReducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export let peristedStore = persistStore(store)
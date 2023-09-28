import persistedReducer from './reducer'
import {combineReducers, configureStore} from "@reduxjs/toolkit";

// ==============================|| REDUX - MAIN STORE ||============================== //
const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
});
// const store = createStore(reducer);
const persister = 'Free';

export { store, persister };

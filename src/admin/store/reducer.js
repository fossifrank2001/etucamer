import { combineReducers } from 'redux';
import customizationReducer from './customizationReducer';
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';

// ==============================|| COMBINE REDUCER ||============================== //

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, combineReducers({
  customization: customizationReducer
}));
export default persistedReducer;

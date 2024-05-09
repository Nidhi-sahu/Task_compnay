import {combineReducers} from "redux";
import { cartreducer } from './Reducer';
import authReducer from "./authReducer";


const rootred = combineReducers({
    cartreducer,
    authReducer
});

export default rootred;
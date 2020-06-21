import {combineReducers} from 'redux';
//import productoReducer from './authReducers';
import authReducers from './authReducers';

export default combineReducers({
    auth: authReducers
})
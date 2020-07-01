import {combineReducers} from 'redux';
//import productoReducer from './authReducers';
import authReducers from './authReducers';

const rootReducer = combineReducers({
    auth: authReducers
})


// const rootReducer = combineReducers({
//   authentication,
//   users
// });

export default rootReducer;
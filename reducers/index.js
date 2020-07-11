import {combineReducers} from 'redux';
//import productoReducer from './authReducers';
import authReducers from './authReducers';
import recetasReducers from './recetasReducers'

const rootReducer = combineReducers({
    auth: authReducers,
    recetas: recetasReducers
})


// const rootReducer = combineReducers({
//   authentication,
//   users
// });

export default rootReducer;
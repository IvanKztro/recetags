// import {createStore, applyMiddleware, compose} from 'redux';
// import thunk from 'redux-thunk';
// import {composeWithDevTools} from 'redux-devtools-extension';
// import rootReducer from './reducers/index';
// const initialState= {};
// const middleware = [thunk];
// const store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(...middleware))
// );
// export default store;


//Persistencia de datos REDUX
import { createStore, applyMiddleware } from 'redux'
import { persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
// defaults to localStorage for web and AsyncStorage for react-native
import storage from 'redux-persist/lib/storage' 
import rootReducer from './reducers/index';
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const exampleInitialState = { recetaSelect: {},}
// A create store function for `withReduxStore` context wrapper
export function initializeStore (initialState = exampleInitialState) {
  return createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}

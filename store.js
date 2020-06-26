import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from './reducers/index';

const initialState= {};
const middleware = [thunk];



const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

// const store = createStore(
//     reducer,
//     initialState,
//     compose(applyMiddleware(thunk)),
//     typeof window === 'object'  &&
//         typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
//         window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
// );

// export default store;

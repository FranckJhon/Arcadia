
import { applyMiddleware, createStore, combineReducers,compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import user from './reducers/UserReducer';
import cards from './reducers/HomeReducer';
import tornament from './reducers/TorneosReducer.js';
const reducer= combineReducers({
user,
cards,
tornament
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
export const store= createStore(
    reducer,composeEnhancers(applyMiddleware(thunkMiddleware,logger)) 
);
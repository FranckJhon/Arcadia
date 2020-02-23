
import { applyMiddleware, createStore, combineReducers,compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import user from './reducers/UserReducer';
import cards from './reducers/HomeReducer'
const reducer= combineReducers({
user,
cards
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
export const store= createStore(
    reducer,composeEnhancers(applyMiddleware(thunkMiddleware,logger)) 
);
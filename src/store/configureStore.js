import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {Reducer} from "./reducers";

let rootReducer = combineReducers({
     data : Reducer
});

     const middlewares = [thunkMiddleware];
     const middlewareEnhancer = applyMiddleware(...middlewares);

     const enhancers = [middlewareEnhancer];
     const composedEnhancers = compose(...enhancers);

     const store = createStore(rootReducer, composedEnhancers);

     export {store}


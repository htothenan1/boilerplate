import { createStore, applyMiddleware } from 'redux';
import dummyReducer from './reducers/index';
import thunkMiddleware from 'redux-thunk';

const store = createStore(
    dummyReducer,
    applyMiddleware(
        thunkMiddleware,
    )
);

export default store;
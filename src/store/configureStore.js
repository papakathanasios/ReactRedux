import {createStore, applyMiddleware} from 'redux';
//import rootReducer from '../reducers';
import rootReducer from '../reducers/courseReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export  default  function configure(initialState) {
    return createStore(
        rootReducer,
        initialState
    );
}
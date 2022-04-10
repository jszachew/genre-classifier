import {combineReducers, createStore, applyMiddleware} from 'redux';
import inputRedux from './inputRedux'
import resultRedux from './resultRedux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
    input: {
        value:''
    },
    result : {
        value: ''
    }
};

const reducers = {
    input: inputRedux,
    result: resultRedux,
};

Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

const store = createStore(
    combinedReducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;
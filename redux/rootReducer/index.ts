/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';

import CounterReducer from './CounterReducer';

const rootReducer = combineReducers({
    //Define your reducerName here
    CounterReducer,
});

export default rootReducer;




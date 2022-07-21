import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

//Root Reducer
import rootReducer from './rootReducer';

//Root Saga
import { rootSaga } from './saga';

//Saga MiddleWare
const sagaMiddleWare = createSagaMiddleware()

//Reducer and middleWare
const store = createStore(
    rootReducer,
    applyMiddleware(
        sagaMiddleWare,
        createLogger()
    )
)

sagaMiddleWare.run(rootSaga)

export {store}
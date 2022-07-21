import { all, fork} from 'redux-saga/effects';
import { watchDecreaseCounter, watchIncreaseCounter } from './CounterSaga';

export function* rootSaga(){
    yield all(
        [
            fork(watchIncreaseCounter),
            fork(watchDecreaseCounter),
        ]
    )
}
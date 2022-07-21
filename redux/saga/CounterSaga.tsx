import { delay, takeEvery, takeLatest, put } from 'redux-saga/effects';
import { DECREASE_COUNTER, DECREASE_COUNTER_ASYNC, INCREASE_COUNTER, INCREASE_COUNTER_ASYNC } from '../rootReducer/ActionType';

//Increase Counter
//Worker
//Set Data
function* increaseCounterAsync() {
    try{

        // yield delay(1000)

        //Dispatch Action To Redux Store
        yield put(
            {
                type: INCREASE_COUNTER_ASYNC,
                // type: INCREASE_COUNTER_ASYNC,
                value: 1
            }
        )

        console.log("increaseCounterAsync:: Success" );

    }
    catch(error: any){
        console.log("increaseCounterAsync::: Error", error);
        
    }
}

//Increase Counter
//Watcher
//Get Data
export function* watchIncreaseCounter(){
    yield takeLatest(INCREASE_COUNTER, increaseCounterAsync)

    console.log("increaseCounterAsync::: GET::", increaseCounterAsync);
}

//Worker Decrease Counter
//Set Data
function* decreaseCounter(){
    try{
        yield put({
            type: DECREASE_COUNTER_ASYNC,
            value: 1,
          });
    }
    catch(error: any){
        console.log("decreaseCounter:::", error);
    }
}

//Watcher Decrease Counter
//Get data
export function* watchDecreaseCounter(){
    yield takeLatest(DECREASE_COUNTER, decreaseCounter);
    console.log("decreaseCounter:::", decreaseCounter);
}
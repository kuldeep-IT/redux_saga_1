import React from "react";
import { DECREASE_COUNTER, INCREASE_COUNTER, INCREASE_COUNTER_ASYNC } from "./ActionType";

//Initial State
const initialState = {
    counter:0
}

//State and Action
const CounterReducer = (state = initialState, action: any) => {
    switch(action.type){
       case INCREASE_COUNTER:{
    //    case INCREASE_COUNTER:{

        console.log("REDUCER_INCREASE ",state.counter)
        return{
            ...state,
            counter: state.counter + action.value
        }
       }

       case DECREASE_COUNTER:{
        console.log("REDUCER_DECREASE ",state.counter)

        return{
            ...state,
            counter: state.counter - action.value
        }
       }

       default:{
        console.log("REDUCER_DEFAULT ",state.counter)

        return state
       }

    }
}

export default CounterReducer


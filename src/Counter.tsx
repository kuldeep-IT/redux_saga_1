import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  DECREASE_COUNTER,
  DECREASE_COUNTER_ASYNC,
  INCREASE_COUNTER,
  INCREASE_COUNTER_ASYNC,
} from '../redux/rootReducer/ActionType';
import {connect, useSelector} from 'react-redux';

const Counter = props => {
  const counter = useSelector((state: any) => state.CounterReducer.counter);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        // top:345
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* <Text>Counter</Text> */}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          // flex:1,
          marginTop: 6,
          width: 80,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            height: 30,
            width: 30,
            borderRadius: 15,
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            console.log('Increase Counter:::', props.reduxIncreaseCounter);
            props.reduxIncreaseCounter;
          }}>
          <Text>+</Text>
        </TouchableOpacity>

        <Text>{counter}</Text>

        <TouchableOpacity
          style={{
            height: 30,
            width: 30,
            borderRadius: 15,
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={props.reduxDecreaseCounter}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state: any) => {
  console.log('State Here:::', state);

  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch: any) => {
 
  //ACTION
  return {
    reduxIncreaseCounter: () =>
      dispatch({
        type: INCREASE_COUNTER,
        value: 1,
      }),

    reduxDecreaseCounter: () =>
      dispatch({
        type: DECREASE_COUNTER,
        value: 1,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

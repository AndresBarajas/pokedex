import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
import { useAppSelector } from '../app/hooks';

const Counter = () => {

const Counter = useAppSelector(state => state.counter.value);
    return(
        <View style={{alignItems: 'center'}}>
            <Text style = {{fontSize: 62, fontWeight: 'bold'}}>Counter</Text>
            <Text style = {{fontSize: 100,color: 'blue', fontWeight: 'bold'}}> {Counter}</Text>
        </View>
    )
}

export default Counter;
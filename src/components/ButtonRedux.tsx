import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { useAppDispatch } from "../app/hooks";
import { increment, decrement, incrementByAmount } from "../features/counter/counterSlice";


const ButtonRedux = () => {

    const dispatch = useAppDispatch();

    return (
        <>
            <TouchableOpacity
                onPress={() => dispatch(increment())}
                style={{
                    backgroundColor: "green",
                    padding: 10,
                    margin: 10,
                    borderRadius: 5,
                    alignItems: "center",
                }}
            >
                <Text style={{ color: "white", textAlign: "center", fontWeight: 'bold' }}>increment</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => dispatch(decrement())}
                style={{
                    backgroundColor: "red",
                    padding: 10,
                    margin: 10,
                    borderRadius: 5,
                    alignItems: "center",
                }}
            >
                <Text style={{ color: "white", textAlign: "center", fontWeight: 'bold' }}>decrement</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => dispatch(incrementByAmount(10))}
                style={{
                    backgroundColor: "purple",
                    padding: 10,
                    margin: 10,
                    borderRadius: 5,
                    alignItems: "center",
                }}
            >
                <Text style={{ color: "white", textAlign: "center", fontWeight: 'bold' }}>add 10</Text>
            </TouchableOpacity>

        </>
    );
};

export default ButtonRedux;
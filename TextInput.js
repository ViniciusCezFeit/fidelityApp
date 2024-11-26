import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const TextInput = () =>{
    return (
        <SafeAreaView>
            <TextInput
            style={StyleSheet.meutextinput}
            value={texto}
            />
            <TextInput
            style={StyleSheet.meutextinput}
            onChangeText={setNumero}
            value={numero}
            keyboardType="numeric"
            />
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    meutextinput:{
        marginTop: 100,
        height: 40,
        margin:12,
        borderWidth: 1,
    },
});

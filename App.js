import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Mainpage from "./components/Mainpage";
import Todo from "./components/Todo";
import CountdownComponent from "./components/CountdownComponent.js";


export default class App extends React.Component{
	//TODO: Add logic to change between views Mainpage and Todo
    render() {
        return (
            <Todo/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    countdown:{
        marginTop: 30,
    }
});

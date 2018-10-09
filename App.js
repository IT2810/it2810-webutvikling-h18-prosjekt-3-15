import React from 'react';
import { View, StyleSheet} from 'react-native';
import CustomButton from './Components/customButton.js';
import Todo from "./Components/Todo";

export default class App extends React.Component {
    render() {
        return (
            <Todo/>
        );
    }
}

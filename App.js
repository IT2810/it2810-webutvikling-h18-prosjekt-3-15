import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Mainpage from "./components/Mainpage";
import Todo from "./components/Todo";

import {createStackNavigator} from 'react-navigation';
import HomeScreen from './Screen/HomeScreen';
import SubjectScreen from './Screen/SubjectScreen';


const RootStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                title: "Subjects",
                headerStyle: {
                    backgroundColor: '#4286f4'
                },
                headerTitleStyle:{
                    color: '#fff',
                    textAlign: 'center'
                }
            }
        },
        Subjects: {
            screen: SubjectScreen,
            navigationOptions: {
                title: "Todo-list",
                headerStyle: {
                    backgroundColor: '#4286f4'
                },
                headerTitleStyle: {
                    textAlign: 'center',
                    color: '#fff',
                }
            }
        },
    },
    {
        initialRouteName: 'Home',
    }
);

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            navigation: this.props.navigation
        }
    }

    render() {
        return <RootStack navigation={this.state.navigation}/>;
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

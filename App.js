import React from 'react';
import { StyleSheet } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import HomeScreen from './Screen/HomeScreen';
import TaskScreen from './Screen/TaskScreen';
//The different screens in the application. NavigationOptions is the header that is automagically generated.
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
            screen: TaskScreen,
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
        //Sets the first page to Home.
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
    //Calls the screens and sends down the navigation state.
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

import React from 'react';
import { View, StyleSheet, Text, AppRegistry, View, TouchableOpacity, Switch} from 'react-native';
import CustomButton from './Components/customButton.js';
import RoundButton from './Components/roundButton.js';
import { Icon } from 'react-native-elements';


const timerOptions = [45,15];

var TimerWrapper = React.createClass({
    getInitialState(){
        return{time:null, int: null, isMinutes: false}
    },
    toggleTime(){
        let time = this.state.time;
        if (time.equals(0)){
            time = null;
        }
        this.setState({isMinutes: !this.state.isMinutes, time:time})
    },
    startTimer(timer){
        clearInterval(this.state.int);
        var _this = this;
        var int = setInterval(function () {
            console.log('2: Inside of setInterval');
            var tl = _this.state.time -1;
            if (tl.equals(0)){
                clearInterval(int);
            }
            _this.setState({time: time, int: int})
        }, 1000)
        console.log('1: After setInterval')
        return this.setState({time:time, int: int})
    }
});

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <RoundButton
                    icon={
                        <Icon
                            name='play'
                        /> }
                    text="Play"
                    onPress={() => {
                        alert("Hi there!!!");
                    }}
                />
                <CustomButton class='playButton'
                              text="Click Me"
                              onPress={() => {
                                  alert("Hi there!!!");
                              }}
                />
                <CustomButton class='playButton'
                              text="Click Me"
                              onPress={() => {
                                  alert("Hi there!!!");
                              }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});

import React from "react";
import {Switch, Text, View, StyleSheet} from "react-native";
import Button from './Button.js';
import Timer from './Timer.js';

const timerOptions = [45,15];

class TimerWrapper extends React.Component{
    constructor(props){
        super(props);
        this.state={
            time:null, init:null, isMinutes:false
        }
    }

    toggleTime(){
        let time = this.state.time;
        if (time.equals(0)){
            time = null;
        }
        this.setState({isMinutes: !this.state.isMinutes, time:time})
    }

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
        }, 1000);
        console.log('1: After setInterval');
        return this.setState({time:time, int: int})
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.heading}>Timer</Text>
                <View style={styles.buttons}>
                    {timerOptions.map((item, index, list)=>{
                        return <Button key={index} time={item} startTimer={this.startTimer} isMinutes={this.state.isMinutes}/>
                    })}
                </View>
                <Text>Minutes</Text>
                <Switch onValueChange={this.toggleTime} value={this.state.isMinutes}></Switch>
                <Timer time={this.state.time}/>
            </View>
        )}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    heading:{
        flex: 1,
            fontSize: 36,
            paddingTop: 40,
            margin: 10,
    },
    button: {
        color: '#111',
            marginBottom: 15,
            borderWidth: 1,
            borderColor: 'blue',
            padding: 10,
            borderRadius: 20,
            fontWeight: '600'
    },
    buttons: {
        flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
    }
});

export default TimerWrapper;
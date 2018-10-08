import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomButton from './Components/customButton.js';
import RoundButton from './Components/roundButton.js';
import TimerWrapper from './Components/TimerWrapper.js';
import CountDown from 'react-native-countdown-component';


export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <CountDown
                    until={10}
                    onFinish={() => {
                        console.log("Timer finished");}}
                    onPress={() => {
                        alert("Hi there!!!");
                    }}
                    size={40}
                    timeToShow={['M', 'S']}/>
                <RoundButton
                    text="Play"
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
        flexDirection: 'column',
    },
});

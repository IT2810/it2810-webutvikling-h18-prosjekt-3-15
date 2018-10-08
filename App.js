import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomButton from './Components/customButton.js';
import RoundButton from './Components/roundButton.js';
import TimerWrapper from './Components/TimerWrapper.js';



export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <CountDown
                    until={10}
                    onFinish={() => {
                        console.log("Timer finished");}}
                    size={20}
                    timeToShow={['M', 'S']}/>
                <RoundButton
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
        flexDirection: 'column',
    },
});

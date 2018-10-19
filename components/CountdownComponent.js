import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import Countdown from "./CountDown";
import {Button} from "react-native-elements";

export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state={
			timerPaused : true,
            timerFinished: false
		}
	}

	render() {
	    let timeLeft = this.state.timerFinished ? 0 : this.props.until;
	    console.log("Time left: " + timeLeft);
	    let buttonFunction = this.state.timerFinished ? (() => this.resetTimer()) : (() => this.pauseTimer());
	    let buttonTitle = this.state.timerFinished ? "Reset Timer" : "Play/Pause";
		return (
			<View>
				{/*Countdown screen- Move to list-view when ready*/}
				<Countdown
					style={styles.countdown}
					until={timeLeft}
					timeToShow={['M', 'S']}
					paused={this.state.timerPaused}
                    onFinish={() => {
                        alert('Good job! You have been working for 45 min ! You deserve a break, maybe you should go for a walk?');
                        this.setState({timerFinished: true})
                }
                }/>
				<Button title={buttonTitle} onPress={buttonFunction}/>
			</View>
		);
	}

	pauseTimer(){
		this.setState({
			...this.state,
			timerPaused: ! this.state.timerPaused
		})
	}

	resetTimer(){
	    this.setState({
            ...this.state,
            timerFinished: false,
            timerPaused: true
        })
    }
}

const styles = StyleSheet.create({
    countdown:{
        marginTop: 7,
    }
});

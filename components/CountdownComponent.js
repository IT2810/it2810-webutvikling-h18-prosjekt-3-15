import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import Countdown from "./CountDown";
import {Button} from "react-native-elements";

export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state={
			timerPaused : true
		}
	}

	render() {
		return (
			<View>
				{/*Countdown screen- Move to list-view when ready*/}
				<Countdown
					style={styles.countdown}
					until={this.props.until}
					timeToShow={['M', 'S']}
					paused={this.state.timerPaused} onFinish={() => alert('Good job! You have been working for 45 min ! You deserve a break, maybe you should go for a walk?')}/>
				<Button title={"Play/Pause"} onPress={() => this.pauseTimer()}/>
			</View>
		);
	}

	pauseTimer(){
		this.setState({
			...this.state,
			timerPaused: ! this.state.timerPaused
		})
	}
}

const styles = StyleSheet.create({
    countdown:{
        marginTop: 7,
    }
});

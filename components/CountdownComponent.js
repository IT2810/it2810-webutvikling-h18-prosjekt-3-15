import React from 'react';
import { View, StyleSheet} from 'react-native';
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
					paused={this.state.timerPaused}/>
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

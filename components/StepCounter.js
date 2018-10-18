import { Component } from 'react';
import { Pedometer } from "expo";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class StepCounter extends Component{

	constructor(props){
		super(props);

		this.state = {
			startDate: new Date(),
			endDate: new Date,
			stepCount: 0
		}
	}



	resetSteps(){
		this.setState({
			startDate: new Date()
		});
	}

	componentDidMount() {
		this.resetSteps();
		this._subscribe();
	}

	componentWillUnmount() {
		this._unsubscribe();
	}

	_subscribe = () => {
		this._subscription = Pedometer.watchStepCount(result => {
			// If resetStepCount is true, we'll set the current stepCount to what is current.
			Pedometer.getStepCountAsync(this.state.startDate, new Date()).then(
				result => {
					this.setState({
						stepCount: result.steps
					});
				}
			);


		});
	};
	_unsubscribe = () => {
		this._subscription && this._subscription.remove();
		this._subscription = null;
	};



	render() {
		return(
			<View>
				<Text>Steps: {this.state.stepCount}</Text>
			</View>
		)
	}

};
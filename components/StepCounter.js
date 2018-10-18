import { Component } from 'react';
import { Pedometer } from "expo";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class StepCounter extends Component{

	constructor(props){
		super(props);

		this.state = {
			stepCount: 0
		}
	}


	/*resetSteps(){
		this.setState({
			startDate: new Date()
		});
	}*/



	componentDidMount() {
		//this.resetSteps();
		let today = new Date();
		today.setHours(0, 0, 0, 1);
		let rightNow = new Date();
		Pedometer.getStepCountAsync(today, rightNow ).then(
			result => {
				this.setState({
					...this.state,
					stepCount: result.steps
				})
			}
		);
		this._subscribe();
	}

	componentWillUnmount() {
		this._unsubscribe();
	}

	_subscribe = () => {
		this._subscription = Pedometer.watchStepCount(result => {
			let newStepCount = this.state.stepCount + result.steps;
		    this.setState({
                stepCount: newStepCount
            });
		});
	};
	_unsubscribe = () => {
		this._subscription && this._subscription.remove();
		this._subscription = null;
	};



	render() {
		return(
			<View style={styles.stepContainer}>
				<Text style={styles.stepStyling}>Steps taken today: {this.state.stepCount}</Text>
			</View>
		)
	}

};

const styles = StyleSheet.create({
    stepContainer: {
        backgroundColor: '#b0b4ba',
        alignItems: 'center',
        justifyContent:'center',
    },
    stepStyling:{
        color: 'white',
        fontSize: 18,
        padding: 26
	}

});
import { Component } from 'react';
import { Pedometer } from "expo";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/*
* The StepCounter-component simple renders <Text> Steps taken today: {steps_taken_today}</Text> without any styling.
* This is because then the style can be set the the parenting component, to better fit in any UI.
*
* When mounting is sets a date for todays date, but 00:00 o'clock. Then it polls how many steps have been taken between then
* and right now whenever the Pedometer updates.
* */

export default class StepCounter extends Component{

	constructor(props){
		super(props);

		this.state = {
			stepCount: 0
		}
	}

	componentDidMount() {
		this.refreshStepCount();
		this._subscribe();
	}

	refreshStepCount(){
        //this.resetSteps();
        let today = new Date();
        today.setHours(0, 0, 0, 0);
        let rightNow = new Date();
        Pedometer.getStepCountAsync(today, rightNow ).then(
            result => {
                this.setState({
                    ...this.state,
                    stepCount: result.steps
                })
            }
        );
	}

	componentWillUnmount() {
		this._unsubscribe();
	}

	_subscribe = () => {
		this._subscription = Pedometer.watchStepCount( () => {
			this.refreshStepCount();
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
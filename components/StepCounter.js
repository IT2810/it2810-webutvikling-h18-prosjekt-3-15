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
		this._subscribe();
	}

	componentWillUnmount() {
		this._unsubscribe();
	}

	_subscribe = () => {
		this._subscription = Pedometer.watchStepCount(result => {
		    this.setState({
                stepCount: result.steps
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
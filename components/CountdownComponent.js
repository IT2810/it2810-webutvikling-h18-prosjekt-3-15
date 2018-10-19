import React from 'react';
import {View, StyleSheet} from 'react-native';
import Countdown from "./CountDown";
import {Button} from "react-native-elements";

/*
* A simple container-class for Countdown which adds a button to play/pause, and simple logic to reset the timer if needed.
* */
export default class CountdownComponent extends React.Component {

    //set the props and state in constructor
	constructor(props){
		super(props);
		this.state={
		    //keep track of if timer is paused or not
			timerPaused : true,
            //keep track of if timer is finished or not
            timerFinished: false
		}
	}

	//function to render the component
	render() {
	    let timeLeft = this.state.timerFinished ? 0 : this.props.until;
        {/*let defining the function of the button, either reset the timer if it is finished, or pausing the timer if it is not*/}
	    let buttonFunction = this.state.timerFinished ? (() => this.resetTimer()) : (() => this.pauseTimer());
        {/*let to change the title of the button to Reset timer when the timer is finished and play/pause when it is not.*/}
	    let buttonTitle = this.state.timerFinished ? "Reset Timer" : "Play/Pause";
		return (
			<View>
                {/*CountDown component to be displayed*/}
				<Countdown
					style={styles.countdown}
                    //setting the time until finish
					until={timeLeft}
                    //setting what to show, here : minutes and seconds
					timeToShow={['M', 'S']}
                    //defining if the timer is paused or not
					paused={this.state.timerPaused}
                    onFinish={() => {
                        //alert shown when timer is finished, motivating you to take a break
                        alert('Good job! You have been working for 45 min ! You deserve a break, maybe you should go for a walk for about 15 min?');
                        //setting the timerFinished to true
                        this.setState({timerFinished: true})
                }
                }/>
                {/*Button for playing/pausing or resetting*/}
				<Button title={buttonTitle} onPress={buttonFunction}/>
			</View>
		);
	}

	//logic for pausing the timer by setting the state timerPaused
	pauseTimer(){
		this.setState({
			...this.state,
			timerPaused: ! this.state.timerPaused
		})
	}

    //logic for resetting the timer by setting the state timerFinished to be false and timerPaused to be true
	resetTimer(){
	    this.setState({
            ...this.state,
            timerFinished: false,
            timerPaused: true
        })
    }
}

//style for having a margin on top of the component so that it has some space between it and other components.
const styles = StyleSheet.create({
    countdown:{
        marginTop: 7,
    }
});

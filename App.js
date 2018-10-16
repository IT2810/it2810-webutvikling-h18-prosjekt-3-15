import React from 'react';
import { View, StyleSheet} from 'react-native';
import RoundButton from './Components/roundButton.js';
import Todo from "./Components/Todo";
import CountDown from './Components/CountDown.js';

export default class App extends React.Component {
	constructor(props){
		super(props);
		//Just a demo! Move timerPaused to wherever the playbutton and list-screen is
		this.state = {
			timerPaused: true
		}
	}

    render() {
        return (
            <View style={styles.container}>
				{/*Countdown screen- Move to list-view when ready*/}
                <CountDown
                    until={2700}
                    timeToShow={['M', 'S']}
					paused={this.state.timerPaused}/>
                <RoundButton
                    text= "play"
                    onPress={() => {
                        this.setState({
							timerPaused: !this.state.timerPaused
						});
                        debugger;
                    }}
                />
                <Todo/>
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

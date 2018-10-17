import React from 'react';
import { View, StyleSheet} from 'react-native';
import Todo from "./Todo";
import CountdownComponent from "./CountdownComponent";

export default class App extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				{/*Countdown screen- Move to list-view when ready*/}
				<CountdownComponent
					style={styles.countdown}
					until={2700}
					timeToShow={['M', 'S']}/>
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
	countdown:{
		marginTop: 30,
	}
});

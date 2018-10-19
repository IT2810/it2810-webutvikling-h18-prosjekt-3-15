/*
* Largely based on the open-source code by npm-user talalmajali,
* from the npm-repo https://www.npmjs.com/package/react-native-countdown-component
*
* The component is licence-free, and can be modified without the owners permission.
*
* Here we cpoy-pasted the code rather than using the library since it lacked some features which we needed it to have,
* and it was the most complete version we could find.
*
* Original source code can be found at: https://github.com/talalmajali/react-native-countdown-component
*
*
* The Component works by calling setInterval(this.updateTimer(), 1000) when mounted, and updateTimer has logic to
* see if the timer is paused or finished.
*
* Upon unmounting it will use clearInterval. Before that, logic in onTimer() is used to avoid problems where setInterval will
* both restart the objects subscription and add one more.
* */
import React from 'react';
import PropTypes from 'prop-types';

import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	AppState
} from 'react-native';
import _ from 'lodash';
import {sprintf} from 'sprintf-js';

//setting some constants for later use
const DEFAULT_BG_COLOR = '#4286f4';
const DEFAULT_TIME_TXT_COLOR = '#000';
const DEFAULT_DIGIT_TXT_COLOR = '#000';
const DEFAULT_TIME_TO_SHOW = ['D', 'H', 'M', 'S'];

//creating the Countdown component
class CountDown extends React.Component {
	//defining the props and their prop types
	static propTypes = {
		//color of Countdown
		digitBgColor: PropTypes.string,
		//color of digit text
		digitTxtColor: PropTypes.string,
		//color of text
		timeTxtColor: PropTypes.string,
		timeToShow: PropTypes.array,
		//size of the component (countdown)
		size: PropTypes.number,
		//time left
		until: PropTypes.number,
		onFinish: PropTypes.func,
		onPress: PropTypes.func,
	};

	//setting the state
	state = {
		//time left
		until: Math.max(this.props.until, 0),
		wentBackgroundAt: null,
		//defining if the timer is finished or not
		finished: false
	};

	//on mount set timer interval, add eventListener and check if there is an onFinish
	componentDidMount() {
		if (this.props.onFinish) {
			this.onFinish = (this.props.onFinish);
		}
		this.timer = setInterval(this.updateTimer, 1000);
		AppState.addEventListener('change', this._handleAppStateChange);
	}

	//on unmount, clear the interval and remove the eventListener
	componentWillUnmount() {
		clearInterval(this.timer);
		AppState.removeEventListener('change', this._handleAppStateChange);
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.until !== nextProps.until && nextProps.until > 0) {
			this.setState({
				until: Math.max(nextProps.until, 0),
				finished: false
			});
		}
		else if(this.props.until !== nextProps.until){
            this.setState({
                until: Math.max(nextProps.until, 0),
            });
		}
	}

	_handleAppStateChange = currentAppState => {
		const {until, wentBackgroundAt} = this.state;
		if (currentAppState === 'active' && wentBackgroundAt  && ! this.props.paused) {
			const diff = (Date.now() - wentBackgroundAt) / 1000.0;
			this.setState({until: Math.max(0, until - diff)});
		}
		if (currentAppState === 'background') {
			this.setState({wentBackgroundAt: Date.now()});
		}
	};

	//function for getting and returning the remaining time
	getTimeLeft = () => {
		const {until} = this.state;
		return {
			seconds: until % 60,
			minutes: parseInt(until / 60, 10) % 60,
			hours: parseInt(until / (60 * 60), 10) % 24,
			days: parseInt(until / (60 * 60 * 24), 10),
		};
	};

	//function for updating the timer
	updateTimer = () => {
		let timeLeft = this.state.until;

		if (timeLeft <= 1 && ! this.state.finished) {
			this.setState({
				until: 0,
				finished: true
			},() =>
				{if(this.onFinish) {
                	this.onFinish();
            	}}
			);

		} else if (! this.state.finished){
			if( ! this.props.paused){
				timeLeft = timeLeft - 1;
				this.setState({until: timeLeft});
			}
		}
	};


	//defining how to render a digit
	renderDigit = (d) => {
		const {digitBgColor, digitTxtColor, size} = this.props;
		return (
			<View style={[
				styles.digitCont,
				{backgroundColor: digitBgColor},
				{width: size * 2.3, height: size * 2.6},
			]}>
				<Text style={[
					styles.digitTxt,
					{fontSize: size},
					{color: digitTxtColor}
				]}>
					{d}
				</Text>
			</View>
		);
	};

	//defining how to render when there are double digits
	renderDoubleDigits = (label, digits) => {
		const {timeTxtColor, size} = this.props;

		return (
			<View style={styles.doubleDigitCont}>
				<View style={styles.timeInnerCont}>
					{this.renderDigit(digits)}
				</View>
				<Text style={[
					styles.timeTxt,
					{fontSize: size / 1.8},
					{color: timeTxtColor},
				]}>
					{label}
				</Text>

			</View>
		);
	};

	//defining the render of the entire countdown component and returning it
	renderCountDown = () => {
		const {timeToShow} = this.props;
		const {until} = this.state;
		const {days, hours, minutes, seconds} = this.getTimeLeft();
		const newTime = sprintf('%02d:%02d:%02d:%02d', days, hours, minutes, seconds).split(':');
		const Component = this.props.onPress ? TouchableOpacity : View;

		return (
			<Component
				style={styles.timeCont}
				onPress={this.props.onPress}
			>
				{_.includes(timeToShow, 'D') ? this.renderDoubleDigits(this.props['labelD'], newTime[0]) : null}
				{_.includes(timeToShow, 'H') ? this.renderDoubleDigits(this.props['labelH'], newTime[1]) : null}
				{_.includes(timeToShow, 'M') ? this.renderDoubleDigits(this.props['labelM'], newTime[2]) : null}
				{_.includes(timeToShow, 'S') ? this.renderDoubleDigits(this.props['labelS'], newTime[3]) : null}
			</Component>
		);
	};

	//rendering the component
	render() {
		return (
			<View style={this.props.style}>
				{this.renderCountDown()}
			</View>
		);
	}
}

//setting some default props
CountDown.defaultProps = {
	digitBgColor: DEFAULT_BG_COLOR,
	digitTxtColor: DEFAULT_DIGIT_TXT_COLOR,
	timeTxtColor: DEFAULT_TIME_TXT_COLOR,
	timeToShow: DEFAULT_TIME_TO_SHOW,
	labelD: "Days",
	labelH: "Hours",
	labelM: "Minutes",
	labelS: "Seconds",
	until: 0,
	size: 30,
	paused: false,
};

//styling for all elements
const styles = StyleSheet.create({
	timeCont: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	timeTxt: {
		color: 'white',
		marginVertical: 2,
		backgroundColor: 'transparent',
	},
	timeInnerCont: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	digitCont: {
		borderRadius: 5,
		marginHorizontal: 2,
		alignItems: 'center',
		justifyContent: 'center',
	},
	doubleDigitCont: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	digitTxt: {
		color: 'white',
		fontWeight: 'bold',
		fontVariant: ['tabular-nums']
	},
});

//exporting the component
module.exports = CountDown;
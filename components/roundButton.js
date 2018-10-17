import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-elements'

class RoundButton extends Component {

    constructor(props){
        super(props);
        this.state = {text:"",
            /*some kind of state for keeping track of if its 'on' or not*/
        }
    }
    render() {
        const { text, onPress} = this.props;
        return (
            <TouchableOpacity style={styles.buttonStyle}
                              onPress={() => onPress()}
            >
                <Text style={styles.textStyle}>{text}</Text>
            </TouchableOpacity>
        );
    }
}

/*Declare what types of props RoundButton will have.
* Have set these as required because every RoundButton should have these.
* Can be changed later if needed.*/
RoundButton.propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
};


/*Some basic styling for the buttons through css modules, could be done in its own css later.*/
const styles = StyleSheet.create({
    textStyle: {
        fontSize:20,
        color: '#ffffff',
        textAlign: 'center',
    },

    buttonStyle: {
        padding: 15,
        backgroundColor: '#2fc47c',
        borderRadius:100,
        borderColor: '#000',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 145,
        marginRight: 145
    }
});

/*exporting the component so it can be fetched in App.js and so on*/
export default RoundButton;
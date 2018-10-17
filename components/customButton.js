import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

class CustomButton extends Component {
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

/*Declare what types of props CustomButton will have.
* Have set these as required because every CustomButton should have these.
* Can be changed later if needed.*/
CustomButton.propTypes = {
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
        padding:15,
        backgroundColor: '#202646',
        borderRadius:5,
        marginTop: 10,


    }
});

/*exporting the component so it can be fetched in App.js and so on*/
export default CustomButton;
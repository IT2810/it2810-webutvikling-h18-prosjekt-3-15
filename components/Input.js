import React, { Component, PropTypes } from 'react'
import { TextInput, View, StyleSheet, Dimensions, AsyncStorage } from 'react-native'

const styles = StyleSheet.create({
    inputField: {
        width: Dimensions.get('window').width,
        height: 50,
        borderColor: 'gray',
        padding: 10,
        borderWidth: 1,
        color: 'lightgray',
    }
})
class Input extends Component{
    state = {
        text: '',
    }

    saveData(){
        let data = this.state.text;
        AsyncStorage.setItem('input', data);
    }
    addTodoItem = () => {
        const {onSubmitEditing } = this.props
        const { text } = this.state

        if (!text) return

        onSubmitEditing(text)
        this.setState({text: ''})
    }

    render(){
        const {placeholder} = this.props
        const { text } = this.state

        return(
            <TextInput
                style={styles.inputField}
                placeholder={placeholder}
                value={text}
                onChangeText={(text) => this.setState({text})}
                onSubmitEditing={this.addTodoItem}/>
        )
    }
}
export default Input;
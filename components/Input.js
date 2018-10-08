import React, { Component, PropTypes } from 'react'
import { TextInput, View, StyleSheet, Dimensions, AsyncStorage, Text} from 'react-native'

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
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.item,
        }

    }


    saveData(){
        let data = this.state.text;
        AsyncStorage.setItem('input', data);
    }
    /*
    addTodoItem = () => {
        const {onSubmitEditing } = this.props
        const { text } = this.state

        if (!text) return
        this.setState({text: ''})
    }
    */
    addTodoItem = () => {
        this.setState({items : e.target.value})
    }
    printText = (text) => {
        this.state.text.map((index, data) => {
            return(
            <View><Text>{data}</Text></View>
            )})
    }

    render(){
        const {placeholder} = this.props
        const { text } = this.state

        return(
            <View>
            <TextInput
                style={styles.inputField}
                placeholder={placeholder}
                value={text}
                inlineImageLeft='add_icon'
                onChangeText={(text) => this.setState({text})}
                onSubmitEditing={this.addTodoItem}/>
            </View>
        )
    }
}
export default Input;
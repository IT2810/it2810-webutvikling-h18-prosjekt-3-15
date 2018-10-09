import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {CheckBox} from 'react-native-elements';

const styles = StyleSheet.create({
    checkbox: {
        flex: 1,
        padding: 10,
    },
    checkboxImage: {
        height: 30,
        width: 30,
    }
})
export default class Checkbox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked,
            upForDelete: false
        }
    }


    render(){
        return(
            <View>
            <CheckBox
                title='Click here'
                onPress={() => this.setState({checked: !this.state.checked})}
                checked={this.state.checked}
            />
            <CheckBox
            title='Click to remove this item'
            iconLeft
            iconType='material'
            checkIcon='clear'
            uncheckedIcon='add'
            checkedIcon='remove'
            checkColor='red'
            onPress={() => this.setState({upForDelete: !this.state.upForDelete})}
            checked={this.state.upForDelete}
            />
            </View>
        )

}
}
/*
export default class Checkbox extends Component {
    displayCheckbox() {
        if(this.props.checked) {
            return (
                <Icon
                    name=''
                >
        } else {
            return (
                <Image
                    style={styles.checkboxImage}
                    source={require('../img/unchecked.png')}/>
            )
        }
    }

    render() {
        const { onCheckItem } = this.props

        return (
            <TouchableOpacity style={styles.checkbox} onPress={onCheckItem} activeOpacity={1}>
                {this.displayCheckbox()}
            </TouchableOpacity>
        )
    }
}
*/
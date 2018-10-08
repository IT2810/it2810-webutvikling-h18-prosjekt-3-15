import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

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
    displayCheckbox() {
        if(this.props.checked) {
            return (
                <Image
                    style={styles.checkboxImage}
                    source={require('../img/checked.png')}/>
            )
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
import React, { Component, PropTypes } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import Item from './Item'

const styles = StyleSheet.create({
    listView: {
        flex: 1,
    },
})

export default class List extends Component {
    displayItems() {
        const { items, onCheckItem, onDeleteItem } = this.props

        return (
            items.map((item, index) => {
                return (
                    <Item key={item.label} item={item.label} checked={item.completed} onDeleteItem={onDeleteItem.bind(this, index)} onCheckItem={onCheckItem.bind(this, index)}/>
                )
            })
        )
    }

    render() {
        const { items } = this.props

        return(
            <ScrollView style={styles.listView}>
                {this.displayItems()}
            </ScrollView>
        )
    }
}
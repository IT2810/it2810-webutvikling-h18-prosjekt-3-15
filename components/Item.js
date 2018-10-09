import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';


import Checkbox from './Checkbox'

const styles = StyleSheet.create({
    itemView: {
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        height: 50,
        borderWidth: 1,
        borderColor: 'lightgray',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        flex: 10,
        padding: 10,
    },
    checkbox:{
        flex: 1,
    },
    delete: {
        flex: 1,
    },
    deleteImage: {
        height: 15,
        width: 15,
    }
})

export default class Item extends Component{
    render(){
        return(
            <View style={styles.itemView}>
                <Text style={styles.item}>{this.props.item}</Text>
                <Checkbox style={styles.checkbox} checked={this.props.checked} onCheckItem={this.props.onCheckItem}/>
                <TouchableOpacity style={styles.delete} onPress={this.props.onDeleteItem}>
                    <Icon name='trash'>
                    </Icon>
                </TouchableOpacity>
            </View>
        )
    }
}


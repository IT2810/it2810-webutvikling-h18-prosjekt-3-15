import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class Task extends Component {
    constructor(props){
        super(props);
        this.state ={
            checked: false,
        }
    }

    checkboxClicked(){
        this.setState({checked: !this.state.checked})
    }

    render() {
        return (
            <View key={this.props.keyval} style={styles.task}>
                <Text style={styles.taskText}>{this.props.date}</Text>
                <Text style={styles.taskText}>{this.props.task}</Text>
                <View style={styles.checkbox}>
                <CheckBox style={styles.checkbox} checked={this.state.checked}
                          onPress={() => this.checkboxClicked()}/>
                </View>
                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.taskDelete}>
                    <Text style={styles.taskDeleteText}>Delete</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    task: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth:2,
        borderBottomColor: '#ededed'
    },
    taskText: {
        paddingLeft: 20,
        borderLeftWidth: 15,
        paddingRight: 5,
        borderLeftColor: '#4286f4',
        opacity: 0.7,
    },
    taskDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f44141',
        padding: 10,
        top: 15,
        bottom: 15,
        right: 10
    },
    taskDeleteText: {
        color: 'white'
    },
    checkbox: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 10,
        bottom: 10,
        right: 65
    }
});

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { CheckBox } from 'react-native-elements';


//creating and exporting the Task component
export default class Task extends Component {
    //setting the props
    constructor(props){
        super(props);
    }

    //function that callbacks when the checkbox is clicked (logic in to-do)
    checkboxClicked(){
        this.props.callback(this.props.taskKey);
    }

    //rendering the component
    render() {
        return (
            <View key={this.props.keyval} style={styles.task}>
                {/*Displaying the date on the task*/}
                <Text style={styles.taskText}>{this.props.date}</Text>
                {/*Displaying the task text on the task*/}
                <Text style={styles.taskText}>{this.props.task}</Text>
                <View style={styles.checkbox}>
                    {/*Checkbox to mark if task is done or not*/}
                    <CheckBox style={styles.checkbox} checked={this.props.checked}
                          onPress={() => this.checkboxClicked()} />
                </View>
                {/*Button to delete task, logic in to-do*/}
                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.taskDelete}>
                    <Text style={styles.taskDeleteText}>Delete</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

//styling for all elemts in the component
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

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Task from './Task.js';

export default class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            taskDict: {},
            keyCount: 0,
            taskText: '',
        };
        this.deleteTask = this.deleteTask.bind(this);
    }

    render() {
        let taskDict = this.state.taskDict;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>- TASK -</Text>
                </View>
                <ScrollView style={styles.scrollContainer}>
                    {(Object.keys(taskDict)).map((key) => {
                        return <Task key={key} task={taskDict[key]["taskText"]} date={taskDict[key]["date"]}
                        deleteMethod = {() => this.deleteTask(key)}/>} )
                    }
                </ScrollView>
                <View style={styles.footer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='> Type your task here and press the +'
                        onChangeText={(taskText)=> this.setState({taskText})}
                        value={this.state.taskText}
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                </View>
                <Text style={styles.backgroundInput}>
                </Text>
                <TouchableOpacity onPress={ this.addTask.bind(this) } style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }

    addTask(){
        if(this.state.taskText){
            let keyInt = this.state.keyCount +1;
            var d = new Date();
            let newDict = this.state.taskDict;
            newDict[keyInt] = {
                'taskText': this.state.taskText,
                    'date': d.getFullYear() + "/" + (d.getMonth()+1) + "/"+ d.getDate(),
            };
            this.setState({
                ...this.state,
                keyCount: keyInt,
                taskDict: newDict,
                taskText:''
            });
        }
    }

    deleteTask(key){
        let newDict = this.state.taskDict;
        delete newDict[key];
        this.setState({
            ...this.state,
            taskDict: newDict});
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#4286f4',
        alignItems: 'center',
        justifyContent:'center',
        opacity: 0.85
    },
    headerText: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        padding: 10
    },
    scrollContainer: {
        flex: 1,
        marginTop:63,
    },
    footer: {
        position: 'absolute',
        top: 47,
        left: 0,
        right: 0,
        zIndex: 10
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        marginRight: 70,
        backgroundColor: '#252525',
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 5,
        top: 50,
        backgroundColor: '#2fc47c',
        width: 60,
        height: 60,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    backgroundInput: {
        position: 'absolute',
        zIndex: 10,
        right: 0,
        top: 47,
        backgroundColor: '#252525',
        width: 80,
        height: 68,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24
    }
});

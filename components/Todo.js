import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    Button,
    TouchableOpacity, 
    AsyncStorage
} from 'react-native';
import Task from './Task.js';
import CountdownComponent from "./CountdownComponent.js";

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskDict: {},
            keyCount: 0,
            taskText: '',
        };
        this.deleteTask = this.deleteTask.bind(this);

    }

    async getTaskDict(){
        try{
            let value = await AsyncStorage.getItem('taskdict');
            if(value !== null){
                console.log('value : ' + value);
                this.setState(JSON.parse(value))
            }

        } catch (error){
            console.log("Error retrieving data " + error);
        }
    }

    async saveTaskDict(value){
        try{
            await AsyncStorage.setItem('taskdict', JSON.stringify(this.state));
            console.log("save value : " + JSON.stringify(value));
        }catch(error){
            console.log("Error saving data " + error);
        }
    }

    componentDidMount(){
        this.getTaskDict()
    }

    render() {
        let taskDict = this.state.taskDict;
        const nav = this.props.navigation;
        return (
            <View>
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
                <View style={styles.scrollViewContainer}>
                    <ScrollView>
                        {(Object.keys(taskDict)).map((key) => {
                            return <Task key={key} taskKey={key} task={taskDict[key]["taskText"]} date={taskDict[key]["date"]} navigation={nav}
                                         checked={taskDict[key]['checked']}
                                         deleteMethod = {() => this.deleteTask(key)}
                                         callback={() => this.checkedBox(key)}/>} )
                        }
                    </ScrollView>
                </View>
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
                'checked': false
            };
            this.setState({
                ...this.state,
                keyCount: keyInt,
                taskDict: newDict,
                taskText:''
            });
            this.saveTaskDict(newDict);
        }
    }

    deleteTask(key){
        let newDict = this.state.taskDict;
        delete newDict[key];
        this.setState({
            ...this.state,
            taskDict: newDict});
    }

    checkedBox(key){
        let taskDictA = this.state.taskDict;
        taskDictA[key]['checked'] = ! taskDictA[key]['checked'];
        this.setState({
            ...this.state,
            taskDict: taskDictA
        })
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewContainer:{
        height: 550,
        marginTop:70,
    },
    footer: {
        position: 'absolute',
        top: 0,
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
        top: 3,
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
        top: 0,
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

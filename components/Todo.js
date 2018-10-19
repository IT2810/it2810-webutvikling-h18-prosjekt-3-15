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

//Create and export the to-do component
export default class Todo extends Component {
    // set the props and state in constructor
    constructor(props) {
        super(props);

        this.state = {
            //TaskDict with all the tasks to be listed, showed and saved
            taskDict: {},
            //unique keycount to seperate one task from another
            keyCount: 0,
            taskText: '',
            //url used for navigation
            urlKey: this.props.navigation.state.params.url,
        };
        //definition of the deleteTask here
        this.deleteTask = this.deleteTask.bind(this);

    }

    //async storage logic for getting the saved tasks from the taskdict
    async getTaskDict(){
        try{
            //gets item based on the urlKey
            let value = await AsyncStorage.getItem(this.state.urlKey);
            if(value !== null){
                //since the taskDict is saved as a string, we must parse it when setting the state
                this.setState(JSON.parse(value));
                //setting the task text to be '' to keep a blank input field
                this.setState({taskText:''})
            }

        } catch (error){
            //console.log("Error retrieving data " + error);
        }
    }

    //async storage logic for saving the state. Saved with the urlKey
    async saveTaskDict(){
        try{
            //Since the state is not a string, we must stringyfy it json when saving it
            await AsyncStorage.setItem(this.state.urlKey, JSON.stringify(this.state));
        }catch(error){
            //console.log("Error saving data " + error);
        }
    }

    //fetching the taskDict when the component is mounted
    componentDidMount(){
        this.getTaskDict()
    }

    //saving the taskDict when the component is unmounted
    componentWillUnmount(){
        this.saveTaskDict(this.state.taskDict)
    }

    //function to render the component
    render() {
        //setting a variable to be the taskDict for later use
        let taskDict = this.state.taskDict;
        //setting a variable to be navigation for later use
        const nav = this.props.navigation;
        return (
            <View>
                {/*Countdown clock to keep track of time spent working. Until is set in seconds, 2700 is 45 min*/}
                {/*For testing, change the until value to 5 or a low number to check the alert and reset of the timer*/}
                <CountdownComponent until={2700}/>
                <View style={styles.textInputView}>
                    {/*TextInput to receiving and setting the task text*/}
                    <TextInput
                        style={styles.textInput}
                        placeholder='> Type your task here and press the +'
                        onChangeText={(taskText)=> this.setState({taskText})}
                        value={this.state.taskText}
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                </View>
                <Text style={styles.backgroundInput}/>
                {/*Button set to add the typed task ^ onPress*/}
                <TouchableOpacity onPress={ this.addTask.bind(this) } style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
                {/*ScrollView to display the tasks*/}
                <View style={styles.scrollViewContainer}>
                    <ScrollView>
                        {/*mapping all the tasks from taskDict and returning these as tasks*/}
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

    // Logic to add a new task
    addTask(){
        //checks for an existing taskText
        if(this.state.taskText){
            //increases the keyInt to keep the key unique
            let keyInt = this.state.keyCount +1;
            //fetches the current date
            var d = new Date();
            //sets a variable to be taskDict for later use
            let newDict = this.state.taskDict;
            //adds the new and updated information to the dict
            newDict[keyInt] = {
                'taskText': this.state.taskText,
                    'date': d.getFullYear() + "/" + (d.getMonth()+1) + "/"+ d.getDate(),
                'checked': false
            };
            //updates the dict with the new keyInt, taskDict and sets the taskText to be '' again
            this.setState({
                ...this.state,
                keyCount: keyInt,
                taskDict: newDict,
                taskText:''
            });
            //async save this new dict
            this.saveTaskDict(newDict);
        }
    }

    //logic for deleting a task from the taskDict
    deleteTask(key){
        let newDict = this.state.taskDict;
        //delete the part of the dict containing the key
        delete newDict[key];
        //updating the state with the new dict, now without the deleted task
        this.setState({
            ...this.state,
            taskDict: newDict});
    }

    //logic for checkBox
    checkedBox(key){
        let taskDictA = this.state.taskDict;
        //when there is a change, this is called, hence there is a change. This change is set by hanging the checked to !checked
        taskDictA[key]['checked'] = ! taskDictA[key]['checked'];
        //updating the state with the new taskDict (with info about if task with this key is checked or not)
        this.setState({
            ...this.state,
            taskDict: taskDictA
        })
    }

}

//styling for all the components and elements
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewContainer:{
        height: 400,
        marginTop:70,
    },
    textInputView: {
        position: 'absolute',
        top: 162,
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
        top: 165,
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
        top: 162,
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

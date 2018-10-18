import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    AsyncStorage,
} from 'react-native';
import { CheckBox } from 'react-native-elements';

// alle disse kommentarene er hvordan jeg tror det kan løses ish, men vet ikke hvor jeg skal starte
// eller hvordan jeg skal implementere det (:

//const checkedSave = { 'checked' : 'false'};

//const checkToBeSaved = { 'checked' : this.state.checked};

//const existingCheck = await AsyncStorage.getItem('checkedbox');

//let newChecked = JSON.parse(existingCheck);
//if( !newChecked ){
//    newChecked = []
//}

//newChecked.push( checkToBeSaved )

//await AsyncStorage.setItem('checkedbox', JSON.stringify(newChecked) )
//    .then( () => { console.log ('Successfully saved')} )
//    .catch( () => { console.log('There was an error saving the CheckedState.')})

export default class Task extends Component {
    constructor(props){
        super(props);
    }

    // disse saver bare strings ?? hvordan booleans da ? lagre hvem som er checked.
    // parse til JSON også tilbake ? how.
    /*
    async getChecked(){
        try{
            let value = await AsyncStorage.getItem('checkedbox', value);
            console.log('value : ' + value);
            let parseValue = JSON.parse(value);
            console.log('parsedValue : ' + parseValue);
            this.setState({checked: parseValue})

        } catch (error){
            console.log("Error retrieving data " + error);
        }
    }

    async saveChecked(value){
        try{
            await AsyncStorage.setItem('checkedbox', JSON.stringify(this.state.checked));
            console.log("save value : " + value);
        }catch(error){
            console.log("Error saving data " + error);
        }
    } */

    checkboxClicked(){
        /*this.setState({checked: !this.state.checked});
        this.saveChecked(this.state.checked);
        console.log(this.state.checked); */
        this.props.callback(this.props.taskKey);
    }
/*
    componentDidMount() {
        this.getChecked()
    } */

    render() {
        return (
            <View key={this.props.keyval} style={styles.task}>
                <Text style={styles.taskText}>{this.props.date}</Text>
                <Text style={styles.taskText}>{this.props.task}</Text>
                <View style={styles.checkbox}>
                <CheckBox style={styles.checkbox} checked={this.props.checked}
                          onPress={() => this.checkboxClicked()} />
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

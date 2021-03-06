import React from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, AsyncStorage } from 'react-native';
import Subject from './Subject';
import StepCounter from "./StepCounter";

class Mainpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subjectText: '',
            subjects: {},
            keyCount: 0,
        };
        this.deleteSubject = this.deleteSubject.bind(this);
        this.addSubject = this.addSubject.bind(this);
    }
    //Sets the state from AsyncStorage when entering the application after closing it.
    async getSubjectDict(){
        try{
            let value = await AsyncStorage.getItem('subjects');
            let maxKey = this.getMaxKey(JSON.parse(value));
            if(value !== null){
                this.setState({
					...this.state,
                	subjects: JSON.parse(value),
					keyCount: maxKey
			});
            }
        }
            catch(error){
                console.log("Error retrieving data: " +  error)
            }
        }
        //Saves the state.
    async saveSubjects(value){
        try{
            await AsyncStorage.setItem('subjects', JSON.stringify(this.state.subjects));
        }catch(error){
            console.log("Error saving data " + error);
        }
    }
    //When the Application starts, run this function.
    componentDidMount(){
        this.getSubjectDict()
    }

    render() {
        let subDict = this.state.subjects;
        const nav = this.props.navigation;
        return (
            <View>
                <StepCounter style={styles.StepStyling}/>
                <TextInput
                    style={styles.textInput}
                    placeholder={"Add subjects here"}
                    onChangeText={(subjectText) => {
                        this.setState({subjectText});
                    }}
                    value={this.state.subjectText}
                    placeholderTextColor='white'
                    underlineColorAndroid='transparent'>
                </TextInput>
                <Text style={styles.backgroundInput}/>
                <TouchableOpacity onPress={()=> this.addSubject()} style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
                <View style={styles.scrollViewContainer}>
                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                        {/*Maps all objects in the state, and sends down states.*/}
                            {(Object.keys(subDict)).map((key)=> {
                                return (<Subject
                                    key={key}
                                    subject={subDict[key]["subjectText"]}
                                    url={subDict[key]["url"] }
                                    navigation={nav}
                                    deleteMethod={() => this.deleteSubject(key)}/>)
                            })}
                    </ScrollView>
                </View>
            </View>

        );
    }
    //Creates a unique url key that gets sent to To-do and is used as the key in order to access a unique list for every subject
    addSubject() {
        if (this.state.subjectText) {
            let keyInt = this.state.keyCount + 1;
            let newDict = this.state.subjects;
            newDict[keyInt] = {
                'subjectText': this.state.subjectText,
                'url': "/" + keyInt + "/" + this.state.subjectText,
                'keyCount': keyInt,
            };
            this.setState({
                ...this.state,
                keyCount: keyInt,
                subjects: newDict,
                subjectText: ''
            });
            this.saveSubjects(newDict)
        }
    }

    deleteSubject(key) {
        let newDict = this.state.subjects;
        delete newDict[key];
        this.setState({
            ...this.state,
            subjects: newDict
        });
		this.saveSubjects(newDict)


    }
    //returns the largest key in subjects, and is used to set KeyCount so that the keycount continues even after AsyncStorage.
    getMaxKey(obj){
		return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
	}
}

    const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    StepStyling: {

    },
    header: {
        backgroundColor: '#4286f4',
        alignItems: 'center',
        justifyContent:'center',
        borderBottomWidth: 2,
        borderBottomColor: '#ddd',
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26
    },
    scrollViewContainer:{
        height: 460
    },
    footer: {
        position: 'absolute',
        top: 85,
        left: 0,
        right: 0,
        zIndex: 10
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        marginRight: 80,
        backgroundColor: '#252525',
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 5,
        top: 80,
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
        top: 76,
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

export default Mainpage;
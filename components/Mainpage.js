import React from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Subject from './Subject';
class Mainpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subjectText: '',
            subjects: {},
            keyCount: 0
        }
        this.deleteSubject = this.deleteSubject.bind(this);
        this.addSubject = this.addSubject.bind(this);
    }

    render() {
        let subDict = this.state.subjects;
        return (
            <View>
                <View>
                    <Text>- Subjects -</Text>
                </View>
                <ScrollView>
                    {(Object.keys(subDict)).map((key)=> {
                        return (<Subject key={key} subject={subDict[key]["subjectText"]} url={[key]["url"]}
                                        deleteMethod={() => this.deleteSubject(key)}/>)


                    })}

                </ScrollView>
                <View>
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
                </View>
                <Text style={styles.backgroundInput}/>
                <TouchableOpacity onPress={()=> this.addSubject()} style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }

    addSubject() {
        if (this.state.subjectText) {
            let keyInt = this.state.keyCount + 1;
            let newDict = this.state.subjects;
            newDict[keyInt] = {
                'subjectText': this.state.subjectText,
                'url': "/" + keyInt + "/" + this.state.subjectText,
            };
            this.setState({
                ...this.state,
                keyCount: keyInt,
                subjects: newDict,
                subjectText: ''
            });


        }
    }

    deleteSubject(key) {
        let newDict = this.state.subjects;
        delete newDict[key];
        this.setState({
            ...this.state,
            subjects: newDict
        })
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
        borderBottomWidth: 10,
        borderBottomColor: '#ddd'
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26
    },
    scrollContainer: {
        flex: 1,
        marginTop:63,
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
        marginRight: 70,
        backgroundColor: '#252525',
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 5,
        top: 90,
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
        top: 85,
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
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    AsyncStorage,
    Button,
} from 'react-native';
import {StackNavigator} from 'react-navigation';


export default class Subject extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            url: this.props.url
        }
    }

    render() {
        const nav = this.props.navigation;
        return (
            <View key={this.props.keyval} style={styles.subject}>
                <TouchableOpacity style={styles.subjectContainer}>
                    <Button title={this.props.subject} onPress={()=> nav.navigate('Subjects')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.subjectDelete}>
                    <Text style={styles.subjectDeleteText}>Delete</Text>
                </TouchableOpacity>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    subject: {
        position: 'relative',
        padding: 40,
        paddingRight: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed'
    },
    subjectText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#4286f4',
        fontWeight: 'bold',
        opacity: 1,
    },
    subjectContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#DDDDDD',
        paddingRight: 140,
        padding: 25,
        top: 5,
        left: 20,
        bottom: 5
    },
    subjectDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f44141',
        padding: 25,
        top: 5,
        bottom: 5,
        right: 10
    },
    subjectDeleteText: {
        color: 'white'
    },
});

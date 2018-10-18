import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    AsyncStorage,
    Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Subject extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            url: this.props.url,

        }
    }

    render() {
        return (
            <View key={this.props.keyval} style={styles.subject}>
                <Text style={styles.subjectText}  >{this.props.subject}</Text>
                <Icon name='arrow-right' size={15} color='blue'/>
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
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed'
    },
    subjectText: {
        paddingLeft: 20,
        borderLeftWidth: 15,
        paddingRight: 5,
        borderLeftColor: '#4286f4',
        opacity: 0.7,
    },
    subjectDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f44141',
        padding: 10,
        top: 15,
        bottom: 15,
        right: 10
    },
    subjectDeleteText: {
        color: 'white'
    },
});

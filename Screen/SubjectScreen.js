import React from 'react';
import {View, Button, Text} from 'react-native';
import Todo from '../components/Todo';
class SubjectScreen extends React.Component {
    render() {
        return (
            <View>
                <Todo navigation={this.props.navigation}/>
            </View>
        );
    }
}
export default SubjectScreen;
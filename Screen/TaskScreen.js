import React from 'react';
import {View} from 'react-native';
import Todo from '../components/Todo';
class TaskScreen extends React.Component {
    //TaskScreen renders the To-do component, and sends down the navigation prop from App.js.
    render() {
        return (
            <View>
                <Todo navigation={this.props.navigation}/>
            </View>
        );
    }
}
export default TaskScreen;
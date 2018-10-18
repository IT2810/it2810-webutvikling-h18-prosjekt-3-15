import React from 'react';
import {View, Button, Text} from 'react-native';
import Mainpage from '../components/Mainpage';
class HomeScreen extends React.Component {
    render() {
        return (
            <View>
                <Mainpage navigation={this.props.navigation}/>
            </View>
        );
    }

}
export default HomeScreen;
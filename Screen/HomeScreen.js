import React from 'react';
import {View} from 'react-native';
import Mainpage from '../components/Mainpage';
class HomeScreen extends React.Component {
    //Homescreen renders the Mainpage component and sends down the props from App.js.
    render() {
        return (
            <View>
                <Mainpage navigation={this.props.navigation}/>
            </View>
        );
    }

}
export default HomeScreen;
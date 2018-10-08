import React from "react";
import {Text, View, StyleSheet} from "react-native";

class Timer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        if (this.props.time == null || this.props.time == 0) {
            return <View><Text  style={styles.heading}> </Text></View>
        }
        return(
            <View>
                <Text style={styles.heading}>{this.props.time}</Text>
                <Text>Seconds left </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    heading:{
        flex: 1,
        fontSize: 36,
        paddingTop: 40,
        margin: 10,
    },
});


export default Timer;
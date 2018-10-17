import React from "react";
import {TouchableOpacity} from "react-native";

class Button extends React.Component{
    constructor(props){
        super(props);
    }

    startTimer(event) {
        let time = (this.props.isMinutes) ? this.props.time * 60 : this.props.time;
        return this.props.startTimer(time)
    }

    render() {
        return (
            <TouchableOpacity onPress={this.startTimer}>
            </TouchableOpacity>
        )
    }
}

export default Button;
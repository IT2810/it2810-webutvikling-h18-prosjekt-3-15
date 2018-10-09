import React from 'react';
import {Text, View, TextInput,Button, TouchableOpacity} from 'react-native';

export default class SubjectText extends React.Component{
    states = [];
    constructor(props, context) {
        super(props, context);

        this.state = {
            name: ""
        }
    }
    AddState = (item) => {
        this.states.push(...this.states, item);
    }

    render(){
        return(
            <View>
            <TextInput
                placeholder="Subject"
                style={{height:40, borderColor:'gray', borderWidth: 1}}
                onChangeText={(text) => this.setState({name: text})}
                value={this.state.name}
            />
                <TouchableOpacity>
                    style= {styles.submitButton}
                    onPress= () => this.AddState(this.state.name)
                </TouchableOpacity>
            </View>

        )
    }

}
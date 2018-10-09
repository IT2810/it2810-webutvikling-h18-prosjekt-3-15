import React from 'react';
import {View, Text} from 'react-native';
import {ListItem} from 'react-native-elements';

const stressball = [];

export default class SubjectList extends React.Component{
    constructor(props, context) {
        super(props, context);

    }

    render(){
        return(
            <View>
                <ListItem
                    title: this.props.name
                />
            </View>
        )
    }
}
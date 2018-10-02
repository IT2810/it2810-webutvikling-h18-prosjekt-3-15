import React from 'react';
import { View, StyleSheet} from 'react-native';
import CustomButton from './Components/customButton.js';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <CustomButton
                    text="Click Me"
                    onPress={() => {
                        alert("Hi there!!!");
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
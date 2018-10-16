import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Mainpage from './components/Mainpage';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            title: ["placeholder"]
        }
    }

  render() {
    return (
      <View>
          <Mainpage/>
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
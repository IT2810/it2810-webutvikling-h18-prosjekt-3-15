import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from './components/List';
import Item from './components/Item';
import Input from "./components/Input";
import Checkbox from './components/Checkbox';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            checked: false,
            item: [],
            onCheckItem: '',
            onDeleteItem: ''
        }
    }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
          <Checkbox/>
          <Input/>
          <Item/>
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
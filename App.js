import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import axios from 'axios'

import BusRoute from './Components/BusRoute.js'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      eta: '',
      minutesAway: '',
      proximityText: '',
      bus: '',
      stopCode: '',
      listening: false,
      listening2: false
    }
  }

  handleClick =() => { 
    console.log('clicked')
  }

  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.text} onClick={this.handleClick}>Bus Route</Text>
        <Text style={styles.text}>Bus Stop
        </Text>
        <Text style={styles.text}>Bus Time</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'black',
    alignSelf: 'stretch',
    textAlign: 'center',
    padding: 70.5,
    minHeight: 150, 
    margin: 30
  }
});

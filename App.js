import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import axios from 'axios'

//Importing all components
import BusRoute from './Components/BusRoute';
import BusTime from './Components/BusTime';
import BusStop from './Components/BusStop';

//Importing speech recognition import Voice from 'react-native-voice';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eta: '',
      minutesAway: '',
      proximityText: '',
      bus: '',
      stopCode: '',
      listening: false,
      listening2: false
    }

    // Voice.onSpeechStart = this   .onSpeechStartHandler   .bind(this);
    // Voice.onSpeechEnd = this   .onSpeechEndHandler   .bind(this);
    // Voice.onSpeechResults = this   .onSpeechResultsHandler   .bind(this);
  }

  //Event for when a button is clicked
  handleClick = (e) => {
    console.log('clicked')
    // Voice.start('en-US');
  }

  render() {
    return (

      <View style={styles.container}>

        <Text>ULTRAVOX</Text>
        <BusRoute handleClick={this.handleClick}/>
        <BusStop handleClick={this.handleClick}/>
        <BusTime handleClick={this.handleClick}/>

      </View>
    )
  }
}

//Only styles the view container
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

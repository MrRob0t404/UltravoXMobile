import React from 'react'
import Voice from 'react-native-voice';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'

class BusRoute extends React.Component {
    constructor(props) {
        super();
        Voice.onSpeechStart = this.onSpeechStartHandler;
        Voice.onSpeechEnd = this.onSpeechEndHandler;
        Voice.onSpeechResults = this.onSpeechResultsHandler;
    }

    onStartButtonPress(e) {
        console.log(true)
        Voice.start('en-US');
    }

    render() {
        return (
            <TouchableOpacity style={styles.button} onPress={this.onStartButtonPress}>

                <Image
                    source={require('.././Assets/Images/microphone.png')}
                    style={styles.image}/>

            </TouchableOpacity>
        )
    }
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        borderWidth: 2,
        borderColor: 'grey',
        alignSelf: 'stretch',
        padding: 25,
        minHeight: 160,
        marginTop: 30,
        marginBottom: 5,
        // textAlign: 'center',
        backgroundColor: 'blue'
    },
    image: {
        width: 80.5,
        height: 70.5,
        marginLeft: 120,
        marginRight: 120,
        paddingTop: 90
    }
})

export default BusRoute;
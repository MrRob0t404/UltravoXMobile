import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'

class BusStop extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.button} onPress={this.props.handleClick}>
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
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
        backgroundColor: 'blue'
    },
    image: {
        width: 70.5,
        height: 70.5
    }
})

export default BusStop;
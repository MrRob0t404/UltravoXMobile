import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'

class BusTime extends React.Component {

    handleClick = () => {
        this.setState({clicked: true});
    }

    render() {
        return (
            <TouchableOpacity style={styles.button} onPress={this.props.handleClick}>
                <Text fontSize={90}>
                    Bus Time
                </Text>
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
        marginTop: 5,
        marginBottom: 10,
        textAlign: 'center',
        backgroundColor: 'blue'
    }
})

export default BusTime;
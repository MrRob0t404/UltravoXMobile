import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

class BusRoute extends React.Component {
    handleClick = () => {
        console.log('clicked');

    }

    render() {
        return (
            <View onClick={this.handleClick}></View>
        )
    }
};

export default BusRoute;
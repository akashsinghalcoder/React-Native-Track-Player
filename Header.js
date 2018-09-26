import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';


export default class Header extends Component
{

    constructor(props)
    {
      super(props);
    }
    render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>WorkAround</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 72,
    paddingTop: 20,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row',
  },
  welcome:
  {
    color:'#ffffff',
  }

});
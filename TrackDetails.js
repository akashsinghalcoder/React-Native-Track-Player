import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

export default class TrackDetails extends Component
{
  constructor(props)
  {
    super(props);
    this.state={artist:this.props.artist,title:this.props.title};
  }
    render() {
    return (
        <View style={styles.container}>
    
    <View style={styles.detailsWrapper}>
    <Text style={styles.title} >{this.state.title}</Text>
      <Text style={styles.artist} >{this.state.artist}</Text>
     </View>
     </View>
    );
}
}
const styles = StyleSheet.create({
  

  container: {
    paddingTop: 24,
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
    paddingRight: 20,
  },
  detailsWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  artist: {
    color: '#ffffff',
    fontSize: 12,
    marginTop: 4,
  },
});
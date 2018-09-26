import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,Slider
} from 'react-native';



function pad(n, width, z=0) {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

const minutesAndSeconds = (position) => ([
  pad(Math.floor(position / 60), 2),
  pad(position % 60, 2),
]);

export default class Seekbar extends Component
{
  constructor(props)
  {
    super(props);

    this.state={elapsed:minutesAndSeconds(this.props.currentposition),remaining:minutesAndSeconds(this.props.trackLength-this.props.currentposition)};
  
  }

  componentDidUpdate(nextProps) {
    if(this.props.currentposition !== nextProps.currentposition) {
      this.setState( {elapsed: minutesAndSeconds(nextProps.currentposition), remaining: minutesAndSeconds(this.props.trackLength-nextProps.currentposition)} );
    } 
  }

      render() {
    return (
        <View style={styles.container}>
           <View style={{flexDirection: 'row'}}>
        <Text style={styles.text}>
          {this.state.elapsed[0] + ":" + this.state.elapsed[1]}
        </Text>
        <View style={{flex: 1}} />
        <Text style={[styles.text, {width: 40}]}>
          {this.props.trackLength > 1 && "-" + this.state.remaining[0] + ":" + this.state.remaining[1]}
        </Text>
      </View>
      <Slider
        maximumValue={Math.max(this.props.trackLength, 1, this.props.currentposition + 1)}
        onSlidingStart={this.props.onSlidingStart}
        onSlidingComplete={this.props.onSeek}
        value={this.props.currentposition}
        style={styles.slider}
        minimumTrackTintColor='#fff'
        maximumTrackTintColor='rgba(255, 255, 255, 0.14)'
        thumbStyle={styles.thumb}
        trackStyle={styles.track}
      />
     </View>
    );
}


} 


const styles = StyleSheet.create({
  slider: {
    marginTop: -12,
  },
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  track: {
    height: 2,
    borderRadius: 1,
  },
  thumb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.72)',
    fontSize: 12,
    textAlign:'center',
  }
});
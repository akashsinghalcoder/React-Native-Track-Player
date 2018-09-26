/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import Header from './Header';
import AlbumArt from './AlbumArt';
import TrackDetails from './TrackDetails';
import SeekBar from './SeekBar.js';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});





type Props = {};
export default class App extends Component<Props> {
  constructor(props)
  {
    super(props);
    this.state={currentposition:0};
     this.getstate = this.getstate.bind(this);
  }
    seek(time) {
    time = Math.round(time);
  TrackPlayer.seekTo(time);
  TrackPlayer.play();
  this.setState({currentposition:time});

  }


getstate()
 {
  
  TrackPlayer.setupPlayer().then(async () => {
    TrackPlayer.updateOptions({
            capabilities: [
                TrackPlayer.CAPABILITY_PLAY,
                TrackPlayer.CAPABILITY_PAUSE,
                TrackPlayer.CAPABILITY_SEEK_TO,
                TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
                TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS
            ]
        });
    // Adds a track to the queue
    await TrackPlayer.add({
        id: 'trackId',
        url: require('./audio_house.mp3'),
        title: 'Track Title',
        artist: 'Track Artist',
    });
 
    // Starts playing it
    TrackPlayer.play();
    setInterval(()=>{
let currentpositioni=this.state.currentposition+1;
this.setState({currentposition:currentpositioni});

    },1000);
 
});
  }
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <AlbumArt url="https://reactjs.org/logo-og.png"/>
        <TrackDetails title="Ye zindagi" artist="KK"/>

         <SeekBar
          onSeek={this.seek.bind(this)}
          trackLength={29}
          onSlidingStart={() => TrackPlayer.pause()}
          currentposition={this.state.currentposition} />
        <Button onPress={this.getstate} title="Learn More" color="#841584"/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#000000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

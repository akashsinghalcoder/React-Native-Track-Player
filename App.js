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



/*
export const TRACKS = [
  {
    title: 'Stressed Out',
    artist: 'Twenty One Pilots',
    albumArtUrl: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
    audioUrl: "http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3",
  },
  {
    title: 'Love Yourself',
    artist: 'Justin Bieber',
    albumArtUrl: "http://arrestedmotion.com/wp-content/uploads/2015/10/JB_Purpose-digital-deluxe-album-cover_lr.jpg",
    audioUrl: 'http://oranslectio.files.wordpress.com/2013/12/39-15-mozart_-adagio-fugue-in-c-minor-k-546.mp3',
  },
  {
    title: 'Hotline Bling',
    artist: 'Drake',
    albumArtUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Drake_-_Hotline_Bling.png',
    audioUrl: 'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3',
  },
];
*/

var track1={


    id: 'trackId1',
        url: 'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3',
        title: 'Track Title',
        artist: 'Track Artist',
  };
    var track2={


    id: 'trackId1',
        url: 'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3',
        title: 'Track Title',
        artist: 'Track Artist',
  };

type Props = {};
export default class App extends Component<Props> {
  constructor(props)
  {
    super(props);
    this.state={currentposition:0,playing:'NONE'};
     this.getstate = this.getstate.bind(this);
     this.nextsong=this.nextsong.bind(this);
     this.previoussong=this.previoussong.bind(this);
  }
    seek(time) {
    time = Math.round(time);
  TrackPlayer.seekTo(time);
  TrackPlayer.play();
  this.setState({currentposition:time});

  }
  nextsong()
  {
    if(this.state.playing=='NONE')
    {
      this.getstate();
      return;
    }
    TrackPlayer.skipToNext()
    this.setState({currentposition:0,playing:'PLAY'});
  }
   previoussong()
  {
    if(this.state.playing=='NONE')
    {
      this.getstate();
      return;
    }
    TrackPlayer.skipToPrevious();
    this.setState({currentposition:0,playing:'PLAY'});
  }
  


getstate()
 {

  
  if(this.state.playing=='PLAY')
  {
    TrackPlayer.pause();
    this.setState({playing:'PAUSE'})
     
     return;
  }
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
    await TrackPlayer.add([track1,track2]);

    this.setState({playing:'PLAY'}); 
    // Starts playing it
    TrackPlayer.play();
    timer=setInterval(()=>{
       if(this.state.currentposition==300)
       {
        this.setState({currentposition:0,playing:'PAUSE'});
        TrackPlayer.pause();
       }

      else if(this.state.playing=='PLAY')
      {
let currentpositioni=this.state.currentposition+1;
this.setState({currentposition:currentpositioni});
}},1000); 
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
          trackLength={300}
          onSlidingStart={() => TrackPlayer.pause()}
          currentposition={this.state.currentposition} />


        <Button onPress={this.getstate} title="Play button" color="#841584"/>

        <Button onPress={this.nextsong} title="Next song" color="#841584"/>

        <Button onPress={this.previoussong} title="Previous song" color="#841584"/>
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

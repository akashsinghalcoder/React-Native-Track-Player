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



export default class AlbumArt extends Component
{
  constructor(props)
  {
    super(props);

    if(this.props.url==null||this.props.url=='')
    {
    this.state={imageurl:''};
    }
  else
  {
    this.state={imageurl:this.props.url};
  }
  }

renderelement()
{
  

   if(this.state.imageurl=='')
   {
      
       return <Image style={styles.image}  source={require('./img/bydefault.jpeg')} />

      }
      else
      {
        return <Image source={{uri: this.state.imageurl}} style={styles.image} />
      
      }

      

}

  render() {
    return (
      <View style={styles.container}>
      {this.renderelement()}
      
   
      </View>
    );
}
}



const { width, height } = Dimensions.get('window');
const imageSize = width - 48;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 24,
    
  },
  image: {
    width: imageSize,
    height: imageSize,
  },
})
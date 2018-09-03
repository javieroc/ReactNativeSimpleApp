import React from 'react';
import { ImageBackground, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  genre: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, .75)',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 10,
  },
});

const Category = props => (
  <ImageBackground source={{ uri: props.background_image }} style={styles.container}>
    <Text style={styles.genre}>{props.genres[0]}</Text>
  </ImageBackground>
);

export default Category;

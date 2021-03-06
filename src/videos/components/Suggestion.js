import React from 'react';
import {
  View, Text, Image, StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  left: {

  },
  right: {
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  cover: {
    width: 100,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    color: '#44546b',
  },
  year: {
    backgroundColor: '#70b124',
    paddingVertical: 4,
    paddingHorizontal: 6,
    color: 'white',
    fontSize: 12,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  rating: {
    color: '#6b6b6b',
    fontSize: 14,
    fontWeight: 'bold',
  },
  genre: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'black',
  },
  genreText: {
    color: 'white',
    fontSize: 11,
    padding: 5,
  },
});

const Suggestion = props => (
  <View style={styles.container}>
    <View style={styles.left}>
      <Image
        style={styles.cover}
        source={{
          uri: props.medium_cover_image,
        }}
      />
      <View style={styles.genre}>
        <Text style={styles.genreText}>{props.genres[0]}</Text>
      </View>
    </View>
    <View style={styles.right}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.year}>{props.year}</Text>
      <Text style={styles.rating}>{props.rating}</Text>
    </View>
  </View>
);

export default Suggestion;

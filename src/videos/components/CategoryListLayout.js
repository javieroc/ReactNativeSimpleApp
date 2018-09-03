import React from 'react';
import {
  View, Text, ImageBackground, StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

const CategoryListLayout = props => (
  <ImageBackground source={require('../../../assets/bg.png')} style={styles.container}>
    <Text style={styles.title}>{props.title}</Text>
    {props.children}
  </ImageBackground>
);

export default CategoryListLayout;

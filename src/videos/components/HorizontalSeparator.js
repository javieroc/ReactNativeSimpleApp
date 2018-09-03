import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    marginHorizontal: 5,
  },
});

const HorizontalSeparator = () => <View style={styles.separator} />;

export default HorizontalSeparator;

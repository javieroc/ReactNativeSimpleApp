import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  separator: {
    borderTopWidth: 1,
  },
});

const VerticalSeparator = props => (
  <View style={[
    styles.separator,
    {
      borderTopColor: props.color ? props.color : '#eaeaea',
    },
  ]}
  >
    <Text>Separador</Text>
  </View>
);

export default VerticalSeparator;

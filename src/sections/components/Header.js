import React from 'react';
import {
  View, Text, Image, StyleSheet, SafeAreaView,
} from 'react-native';

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 30,
    resizeMode: 'contain',
  },
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

const Header = props => (
  <View>
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={require('../../../assets/devandcoffee-logo.png')} style={styles.logo} />
        <View style={styles.right}>{props.children}</View>
      </View>
    </SafeAreaView>
  </View>
);

export default Header;

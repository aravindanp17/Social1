import React, {Component} from 'react';

import {View, Text, StyleSheet} from 'react-native';

class Photo extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Page</Text>
      </View>
    );
  }
}

export default Photo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});

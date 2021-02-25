import React, {Component} from 'react';

import {View, Text, StyleSheet} from 'react-native';

class Quote extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Page</Text>
      </View>
    );
  }
}

export default Quote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});

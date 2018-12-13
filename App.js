/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import TodoInput from './src/component/TodoInput';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  onPress = (text) => {
    console.log(text);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <TodoInput onPress={this.onPress} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#333',
  },
  main: {
    flex: 1,
    maxWidth: 400,
    alignItems: 'center',
  }
});

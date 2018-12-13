import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#008080',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    color: '#fff',
  }
})

const Button = (props) => {
  const {
    onPress,
    children,
    style,
    textStyle
  } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]} >
      <Text style={[styles.textStyle, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
}

export default Button;
import React, { Component } from 'react';

import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { FONT_SIZE } from 'app/config';
import { Text } from 'app/components/Type';

const defaultColor = 'black';
const DEFAULT_OBJ = {};

const Button = ({
  iconLeft = false,
  iconRight = false,
  color,
  small,
  background,
  children,
  onPress,
  loading,
  style,
  inverted = false
}) => (
  <TouchableOpacity
    style={[
      styles.component,
      style ? style : DEFAULT_OBJ,
      inverted ? styles.inverted : DEFAULT_OBJ,
      background ? {backgroundColor: background} : DEFAULT_OBJ,
      small ? styles.small : DEFAULT_OBJ
    ]}
    onPress={() => {
      if(loading){
        return false
      } else {
        onPress();
      }
    }}
  >
    {iconLeft && !loading ? (
      <Icon
        name={iconLeft} 
        style={styles.icon}
      />
    ) : null}
    {!loading ? (
      <Text
        align="center"
        style={[
          styles.text,
          inverted ? styles.invertedText : DEFAULT_OBJ,
          color ? {color} : DEFAULT_OBJ
        ]}
      >
        {children.toUpperCase()}
      </Text>
    ) : (
      <ActivityIndicator/>
    )}
    {iconRight && !loading ? (
      <Icon
        name={iconLeft} 
        style={styles.icon}
      />
    ) : null}
  </TouchableOpacity>
)


// styles
const styles = StyleSheet.create({
  component : {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 35,
    height: 55,
    borderRadius: 9999
  },
  inverted: {
    backgroundColor: 'transparent'
  },
  small: {
    transform: [{scale: 0.9}]
  },
  text: {
    color: 'white',
    marginBottom: 0,
    marginHorizontal: 10,
    fontWeight: '700',
    textAlign: 'center',
    fontSize: FONT_SIZE * 0.9
  },
  invertedText: {
    color: 'black'
  }, 
  icon: {
    fontSize: FONT_SIZE * 1.3
  }
});



export default Button

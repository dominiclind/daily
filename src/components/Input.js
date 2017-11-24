import React, { Component } from 'react';

import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

import {Text} from 'app/components/Type';

import { FONT_SIZE, FONT_FAMILY } from 'app/config';
const DEFAULT_OBJECT = {};

const Input = (props) => (
  <View>
  	{props.label ? (
  		<Text style={styles.label}>{props.label}</Text>
  	) : null}
  	<View style={[styles.wrapper, props.style || DEFAULT_OBJECT]}>
	  	<TextInput
	      autoCorrect={props.autoCorrect || false}
	      autoFocus={props.autoFocus || false}
	      underlineColorAndroid="transparent"
	      keyboardType={props.keyboardType || 'default'}
	      returnKeyType="done"
	      maxLength={props.maxLength || 100}
	      value={props.value}
	      onChangeText={(text) => props.onChange(text)}
	  		placeholder={props.placeholder || "Start typing to search products"}
	  		style={[styles.textInput, props.style || DEFAULT_OBJECT]}
	  	/>
  	</View>
  </View>
)


// styles
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    height: 55,
  },
  textInput: {
    padding: 10,
    height: 55,
  	backgroundColor: 'transparent',
  	fontSize: FONT_SIZE * 1,
    fontFamily: FONT_FAMILY
  },
  label: {
  	fontSize: FONT_SIZE * 0.9,
  	lineHeight: FONT_SIZE * 1,
  	marginBottom: 2,
  	marginTop: 10,
  	fontWeight: '600',
  	backgroundColor: 'transparent'
  }
});


export default Input

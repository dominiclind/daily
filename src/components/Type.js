import React, { Component } from 'react';
import { FONT_SIZE, FONT_FAMILY } from 'app/config';

import {
  View,
  Text as ReactNativeText,
  StyleSheet,
} from 'react-native';

const DEFAULT_OBJ = {};

const extendStyle = (baseStyle, props) => {
	return [
		styles.all,
		...baseStyle,
		props.align ? { textAlign: props.align } : DEFAULT_OBJ,
		props.color ? { color: props.color } : DEFAULT_OBJ,
		props.weight ? { fontWeight: props.weight } : DEFAULT_OBJ,
		props.style || DEFAULT_OBJ,
	]
}

export const H1 = (props) => (
  <ReactNativeText style={extendStyle([styles.h1, styles.headings], props)}>
  	{props.children}
  </ReactNativeText>
)
export const H2 = (props) => (
	<ReactNativeText style={extendStyle([styles.h2, styles.headings], props)}>
		{props.children}
	</ReactNativeText>
)
export const H3 = (props) => (
	<ReactNativeText style={extendStyle([styles.h3, styles.headings], props)}>
		{props.children}
	</ReactNativeText>
)

export const H4 = (props) => (
  <ReactNativeText style={extendStyle([styles.h4, styles.headings], props)}>
    {props.children}
  </ReactNativeText>
)

export const Text = (props) => (
	<ReactNativeText style={extendStyle([styles.text, styles.type], props)}>
		{props.children}
	</ReactNativeText>
)



// styles
const styles = StyleSheet.create({
  all : {
    marginBottom: 10,
    fontFamily: FONT_FAMILY
  },
  headings : {
  	marginTop: 10,
    marginBottom: 10,
    fontWeight: '800',
  },
  type: {
    color: '#4d4d4d'
  },
  h1: {
  	fontSize:  FONT_SIZE * 2.,
  	lineHeight: (FONT_SIZE * 2) * 1.2,
  },
  h2: {
  	fontSize: FONT_SIZE * 1.5,
  	lineHeight: (FONT_SIZE * 1.5) * 1.2,
  },
  h3: {
  	fontSize: FONT_SIZE * 1.25,
  	lineHeight: (FONT_SIZE * 1.25) * 1.2,
  },
  h4: {
    fontSize: FONT_SIZE * 1,
    lineHeight: (FONT_SIZE * 1) * 1.2,
  },
  text: {
  	fontSize: FONT_SIZE,
  	lineHeight: (FONT_SIZE * 1) * 1.5
  }
});


export default {H1,H2,H3,Text};

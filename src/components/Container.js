import React, { Component } from 'react';

import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  Platform
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const PADDING = 0;
const DEFAULT_OBJ = {};
const DEFAULT_ARRAY = [];

const Container = (props) => (
  <LinearGradient
    style={{flex: 1}}
    colors={props.gradient || DEFAULT_ARRAY}
  >
    <KeyboardAvoidingView style={[
        styles.component,
        {backgroundColor: props.gradient ? 'transparent' : props.backgroundColor || 'transparent'},
        props.center ? styles.center : null,
        props.padding ? styles.padding : null,
        props.style ? props.style : null,
      ]}>
      {props.children}
    </KeyboardAvoidingView>
  </LinearGradient>
)


// styles
const styles = StyleSheet.create({
  component : {
    flex: 1
  },
  padding: {
    paddingTop: 65 + PADDING
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export default Container

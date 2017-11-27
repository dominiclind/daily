import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';

import {
  View,
  StyleSheet,
  Animated,
  ScrollView
} from 'react-native';

import { Text,H1,H2,H3 } from 'app/components/Type';

const Slider = (props) => (
  <Animatable.View animation="fadeIn" duration={850} style={styles.component}>
  	<H3 style={styles.title}>{props.title}</H3>
  	<Animated.ScrollView
  		horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingLeft: 20, paddingRight: 20, paddingBottom: 10}}

  	>
  		{props.children}
  	</Animated.ScrollView>
  </Animatable.View>
)


// styles
const styles = StyleSheet.create({
  component : {
    backgroundColor:'transparent',
  },
  title: {
  	margin: 20,
  	marginTop: 20
  }
});


export default Slider

import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Animated,
  ScrollView
} from 'react-native';

import { Text,H1,H2 } from 'app/components/Type';

const Slider = (props) => (
  <View style={styles.component}>
  	<H2 style={styles.title}>{props.title}</H2>
  	<Animated.ScrollView
  		horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingLeft: 20, paddingRight: 20, paddingBottom: 10}}

  	>
  		{props.children}
  	</Animated.ScrollView>
  </View>
)


// styles
const styles = StyleSheet.create({
  component : {
    backgroundColor:'transparent',
  },
  title: {
  	margin: 20,
  	marginTop: 40
  }
});


export default Slider

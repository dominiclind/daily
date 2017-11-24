import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { Text,H1,H2, H3 } from 'app/components/Type';

const WorkoutCard = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={[styles.component, props.last ? styles.last : {}]}>
    	<H3>{props.title}</H3>
    </View>
  </TouchableOpacity>
)


// styles
const styles = StyleSheet.create({
  component : {
    backgroundColor:'red',
    width: 300,
    height: 140,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    marginBottom: 20
  },
  last: {
  	// marginRight: 20,
  	// backgroundColor: 'blue'
  }
});


export default WorkoutCard

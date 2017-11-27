import React, { Component } from 'react';
import {format} from 'date-fns';

import * as Animatable from 'react-native-animatable';

import {
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { Text,H1,H2, H3 } from 'app/components/Type';

const WorkoutCard = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <Animatable.View animation="fadeInRight" duration={650} style={[styles.component, props.last ? styles.last : {}]}>
    	<H3>{props.title}</H3>
      <Animatable.View style={styles.meta}>
        <Text weight="500" style={styles.metaText}>{format(props.date, 'dddd D/MM').toUpperCase()}</Text>
      </Animatable.View>
    </Animatable.View>
  </TouchableOpacity>
)


// styles
const styles = StyleSheet.create({
  component : {
    backgroundColor:'#DEE2E6',
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
  },
  meta: {
    position:'absolute',
    bottom:0,
    left:0,
    right:0,
    paddingHorizontal: 15
  },
  metaText: {
    fontSize: 12,
    lineHeight: 12,
    opacity: 0.8
  }
});


export default WorkoutCard

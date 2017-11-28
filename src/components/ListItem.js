import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';

import { Text,H1,H2,H3 } from 'app/components/Type';
import CheckLine from 'app/components/CheckLine';

const COLORS = {
	instruction : '#40C057',
	rest: '#66D9E8',
  exercise: '#FA5252'
};

const ListItem = (props) => (
	<TouchableWithoutFeedback onPress={props.onPress}>
	  <View
	  	style={[
	  		styles.component,
	  		props.type == 'instruction' ? styles.instruction : {},
	  	]}
	  >
	  	{props.type == 'instruction' || props.type == 'rest' ? (
	  		<View style={[styles.indicator, {backgroundColor: COLORS[props.type]}]} />
	  	) : (
        <View style={[styles.indicator, {backgroundColor: COLORS[props.type]}]} />
      )}
			<CheckLine show={props.checked}>
		  	<H3 
		  		style={[
		  			styles.label,
		  			props.type == 'instruction' || props.type == 'rest' ? styles.instructionLabel : {}
		  		]}
		  	>
		  		{props.label}
		  	</H3>
	  	</CheckLine>
	  </View>
  </TouchableWithoutFeedback>
)


// styles
const styles = StyleSheet.create({
  component : {
  	flexDirection: 'row',
  	marginBottom: 5,
  	alignItems: 'center'
  },
  instruction: {
  	
  },
  label: {
  	fontWeight: '500',
  	fontSize: 18
  },
  instructionLabel: {
  	opacity:.65
  },
  indicator: {
  	width: 7,
  	height: 7,
  	backgroundColor: 'black',
  	marginRight: 10,
  	borderRadius: 20
  }
});


export default ListItem

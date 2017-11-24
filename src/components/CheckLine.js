import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Animated
} from 'react-native';

import { Text,H1,H2 } from 'app/components/Type';

class CheckLine extends Component {

  constructor(props) {
    super(props);

    this.state = {
    	show: new Animated.Value(0)
    }
  }

  componentDidMount() {
  }

  componentWillUpdate(nextProps){
  	Animated.spring(this.state.show, {
  		toValue: nextProps.show ? 1 : 0,
  	}).start()
  }

  render() {
  	const width = this.state.show.interpolate({
  		inputRange:[0,1],
  		outputRange:['0%', '102%']
  	});

  	const lineStyles = {
  		width
  	}
    return (
		 	<View style={styles.component}>
				<Animated.View style={[styles.line, lineStyles]} />
				{this.props.children}
		  </View>
    );
  }
}


// styles
const styles = StyleSheet.create({
  component : {
  	backgroundColor: 'transparent',
  },
  line: {
  	height: 3,
  	width: '102%',
  	position:'absolute',
  	top:20,
  	left: -2,
  	backgroundColor: 'red',
  }
});


export default CheckLine;
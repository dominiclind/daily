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

  componentWillUpdate(nextProps, nextState) {
    if(nextProps.show !== this.props.show){
      if(nextProps.show){
        Animated.spring(this.state.show, {
          toValue: 1,
        }).start();
      } else {
        Animated.timing(this.state.show, {
          toValue: 0,
          duration: 200,
        }).start();
      }
    }
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
  	width: '120%',
  	position:'absolute',
  	top:21,
  	left: -2,
    right: 10,
  	backgroundColor: 'black',
  }
});


export default CheckLine;
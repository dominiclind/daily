import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Animated
} from 'react-native';

import { Text } from 'app/components/Type';

import Animation from 'lottie-react-native';

class Loading extends Component {

 constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }
 componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
    }).start();
  }

	render() {
		return (
		  <View style={styles.component}>
		   <Animation
		      style={{
		        width: 200,
		        height: 200,
		      }}
		      progress={this.state.progress}
		      source={require('../animations/loader_3.json')}
		    />
		  	<Text color="black"> Loading</Text>
		  </View>
		)
	}

}


// styles
const styles = StyleSheet.create({
  component : {
    backgroundColor:'purple',
  },
});


export default Loading

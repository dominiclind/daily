import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions
} from 'react-native';

import Button from 'app/components/Button';

const { width, height } = Dimensions.get('window');

class Modal extends Component {
	constructor(props) {
	  super(props);
	
		this.state = {
			show: new Animated.Value(0)
		}
	}

	componentWillUpdate(nextProps, nextState) {
		if(nextProps.show !== this.props.show){
			if(nextProps.show){
				Animated.spring(this.state.show, {
					toValue: 1,
					useNativeDriver: true
				}).start();
			} else {
				Animated.timing(this.state.show, {
					toValue: 0,
					duration: 200,
				}).start();
			}
		}
	}

	_hide() {
		Animated.timing(this.state.show, {
			toValue: 0,
			duration: 200,
		}).start(() => {
			this.props.onHide();
		});
	}

	render() {

		const wrapperShow = this.state.show.interpolate({
			inputRange: [0,0.2,1],
			outputRange: [height,0,0],
      extrapolate: 'clamp'
		});

		const contentY = this.state.show.interpolate({
			inputRange: [0,0.5,1],
			outputRange: [300,300,0]
		});
		const contentOpacity = this.state.show.interpolate({
			inputRange: [0,1],
			outputRange: [0,1]
		});
		
		const dimmerOpac = this.state.show.interpolate({
			inputRange: [0,1],
			outputRange: [0,1]
		});
		
		return (
			<View style={[
	 			styles.component,
	 			{
	 				transform: [
		 				{
		 					translateY: this.props.show ? 0 : height 
		 				}
		 			]
		 		}]
		 		}
		 	>
		 		<Animated.View style={[styles.dimmer, {opacity: dimmerOpac}]}>
		 			<TouchableOpacity style={styles.dimmerButton} onPress={() => this._hide()}/>
		 		</Animated.View>
		 		
		 		<Animated.View style={[styles.content, { opacity: contentOpacity, transform: [{ translateY: contentY }] }]}>
		 			<Text style={styles.header}>{this.props.header}</Text>
		  		<Text style={styles.text}>{this.props.text}</Text>

		  		{this.props.action ? (
		  			<Button onPress={this.props.action} style={{marginTop: 15}}>{this.props.actionLabel}</Button>
	  			): null}
		  	</Animated.View>
		 
		  </View>
		)
	}
}

// styles
const styles = StyleSheet.create({
  component : {
  	position: 'absolute',
    width,
    height,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    top:0,
    left:0
  }, 
  dimmer : {
  	position: 'absolute',
    backgroundColor:'rgba(0,0,0,.7)',
    width,
    height,
    top:0,
    left:0,
  },
  dimmerButton : {
    width,
    height,
  },
  content: {
  	backgroundColor: 'white',
  	padding: 30,
  },
 	header: {
 		fontSize: 16,
 		lineHeight: 22,
 		marginBottom: 15,
 		fontWeight: '600',
 		textAlign: 'center'
 	},
 	text: {
 		fontSize: 14,
 		lineHeight: 21,
 		textAlign: 'center'
 	}
});


export default Modal

import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Easing,
  Animated,
  StatusBar
} from 'react-native';


import Swiper from 'react-native-swiper';

import Button from 'app/components/Button';
import Container from 'app/components/Container';
import { Text, H1,H2, } from 'app/components/Type';

import Modal from 'app/components/Modal';

const { height:vh, width:vw} = Dimensions.get('window');

class Onboarding extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	total: props.screens.length,
	  	index: 0,
	  	show: new Animated.Value(0)
	  };
	}

	componentDidMount() {
		const { show } = this.props;

		if(show){
			Animated.timing(this.state.show, {
				toValue: 1,
				duration: 450,
				useNativeDriver: true,
				easing: Easing.out(Easing.cubic)
			}).start();
		}
	}

	componentWillUpdate(nextProps, nextState) {
		if(nextProps.show !== this.props.show){
			if(nextProps.show){
				Animated.timing(this.state.show, {
					toValue: 1,
					duration: 450,
					useNativeDriver: true,
					easing: Easing.out(Easing.cubic)
				}).start();
			} else {
				Animated.timing(this.state.show, {
					toValue: 0,
					duration: 250,
					useNativeDriver: true,
					easing: Easing.out(Easing.quad)
				}).start();
			}
		}
	}

	_onScrollEnd(e,state,context){
		this.setState({index: state.index, total: state.total})
	}
	_onDone() {
		this.props.onHide()
	}
	_onSkip() {
		this.props.onHide()
	}

	render() {
		const { screens } = this.props;
		const { total, index, show } = this.state;

		const translateY = show.interpolate({
			inputRange: [0,1],
			outputRange: [vh + 20, 0],
			// extrapolate: 'clamp'
		});

		const animStyles = {transform: [{translateY}]}

		return (
			<Animated.View style={[styles.component, animStyles]}>
				<StatusBar animated showHideTransition="slide" hidden={this.props.show}/>
			  <Swiper
			  	activeDotColor="black"
			  	removeClippedSubviews={false}
			  	showsButtons={false}
			  	loop={false}
			  	bounces
			  	onMomentumScrollEnd={(e, state, context) => this._onScrollEnd(e, state, context)}
			  >
			  	{screens.map((screen, index) => (
				  	<View style={styles.slide} key={index}>
				  		<View style={styles.imageContainer}>
					  		<Image
					  			style={styles.image}
					  			source={{uri: screen.image}}
					  		/>
				  		</View>
				  		<View style={styles.content}>
				  			<H2>{screen.title}</H2>
				  			<Text>{screen.text}</Text>
				  		</View>
				  	</View>
			  	))}
			  </Swiper>
			  <View style={styles.bottom}>
			  	<Button small inverted onPress={() => this._onSkip()}>Skip</Button>
			  	{total-1 == index ? (<Button small onPress={() => this._onDone()}>Done</Button>) : null}
			  </View>
			</Animated.View>
		)
	}
}

// styles
const styles = StyleSheet.create({
  component : {
    backgroundColor:'white',
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    flex: 1
  },
  slide: {
  	flex: 1,
  	height: vh,
  	width: vw,
  	backgroundColor: 'white'
  },
  imageContainer: {
  	flex:1,
  	justifyContent: 'center',
  	alignItems: 'center'
  },
  image: {
  	width:'100%',
  	height: '100%'
  },
  content: {
  	padding: 20,
  	backgroundColor: 'white',
  	flex:.7,
  	alignItems: 'center'
  },
  bottom: {
  	position:'absolute',
  	bottom:0,
  	left:0,
  	right:0,
  	paddingBottom: 5,
  	backgroundColor: 'transparent',
  	flex: 1,
  	flexDirection: 'row',
  	justifyContent: 'space-between'
  }
});


export default Onboarding

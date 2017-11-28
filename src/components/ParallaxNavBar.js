import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Feather';

import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
  StatusBar,
  ScrollView,
  Animated,
  RefreshControl
} from 'react-native';

import {Text, H1, H4} from 'app/components/Type'

const DEFAULT_OBJ = {};

class ParallaxNavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
    };
  }

  render (){
    const {props} = this;
    const { scrollY } = this.state;


    const navBarExpandedTranslate = scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 20]
    });

    const navBarExpandedOpacity = scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [1, 0]
    });

    const smallTitleOpacity = scrollY.interpolate({
      inputRange: [0, 40, 60],
      outputRange: [0, 0 ,1]
    });

    const navBarExpandedAnimatedStyles = {
      // transform: [{
      //   translateY: navBarExpandedTranslate
      // }],
      opacity: navBarExpandedOpacity
    }
    const smallTitleStyle = {
      opacity: smallTitleOpacity
    }

    return (
      <Animatable.View animation="fadeIn" delay={150}  duration={500} style={{flex:1}}>
        <Animated.View style={[
          styles.component,
          props.inverted ? styles.componentInverted : DEFAULT_OBJ,
        ]}>
        <StatusBar barStyle={props.statusBar ? props.statusBar : props.inverted ? 'light-content' : 'dark-content'}/>

        <Animated.View style={[styles.titleContainer, smallTitleStyle]}>
          {props.titleImage ? (
            <Image style={styles.titleImage} source={{uri: props.titleImage}} />
          ) : (
            <Text style={[styles.title, props.inverted ? styles.titleInverted : DEFAULT_OBJ ]}>{props.title}</Text>
          )}
        </Animated.View>

        {props.onLeft ? (
        <TouchableOpacity
          style={styles.leftContainer}
          onPress={() => {
            if(props.statusBarBack){
              StatusBar.setBarStyle(props.statusBarBack, false);
            }
            Keyboard.dismiss()
            props.onLeft();
          }}
        >
          {props.leftIcon ? (
            <Icon style={[styles.icon, props.inverted ? styles.iconInverted : DEFAULT_OBJ]} name={props.leftIcon} />
          ) : (
            <Text style={[styles.navText, props.inverted ? styles.navTextInverted : DEFAULT_OBJ ]}>{props.left}</Text>
          )}
        </TouchableOpacity>
        ) : null}

        {props.onRight ? (
        <View style={styles.rightContainer}>
          <TouchableOpacity
            onPress={props.onRight}
          >
            {props.rightIcon ? (
              <Icon style={[styles.icon, props.inverted ? styles.iconInverted : DEFAULT_OBJ]} name={props.rightIcon} />
            ) : (
              <Text style={[styles.navText, props.inverted ? styles.navTextInverted : DEFAULT_OBJ ]}>{props.right}</Text>
            )}
          </TouchableOpacity>
        </View>
        ) : null}
      </Animated.View>

        <Animated.ScrollView
          refreshControl={props.onRefresh ? (
            <RefreshControl
              refreshing={props.loading}
              onRefresh={props.onRefresh}
            />
            ) : false
          }
          style={styles.content}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            {useNativeDriver: true}
          )}
        >
          <Animated.View style={[styles.navBarExpanded, navBarExpandedAnimatedStyles]}>
            <H4 style={styles.subtitle}>{props.subtitle}</H4>
            <H1>{props.title}</H1>
          </Animated.View>
          <Animatable.View  animation="fadeIn" delay={300} duration={400}>
            {this.props.children}
          </Animatable.View>
        </Animated.ScrollView>
      </Animatable.View>
    )
  }

}

// styles
const styles = StyleSheet.create({
  component : {
    zIndex: 99,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {
        paddingTop: 20,
        height: 70,
      },
      android: {
        paddingTop: 0,
        height: 50,
      }
    })
  },
  componentInverted: {
    backgroundColor: 'white',
    borderBottomColor: 'white'
  },
  leftContainer: {
    position:'absolute',
    left: 0,
    top: 23,
    padding:10,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  rightContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 0,
    padding:10,
    top: 23,
  },
  titleContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  titleImage: {
    height: 25,
    resizeMode: 'contain'
  },
  title: {
    textAlign: 'center',
    //fontSize: 34,
    color: 'black',
    fontWeight: '600',
    marginBottom:-5  
  },
  bigTitle: {
    //fontSize: 34,
    color: 'black',
    fontWeight: '600',
    marginBottom:-5,
    padding: 10,
  },
  subtitle: {
    marginBottom: 0,
    fontWeight: '500',
    lineHeight: 14,
    fontSize: 12,
    opacity: 0.6
  }, 
  titleInverted: {
    color: 'black'
  },
  navBarExpanded: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  navText: {
    fontSize: 16,
    color: 'black',
    ...Platform.select({
      ios: {
        position:'relative',
        top:2
      }
    })
  },
  navTextInverted: {
    color: 'black'
  },
  icon :{
    color: 'black',
    fontSize: 26,
    top: 0
  },
  iconInverted: {
    color: 'black'
  },
});


export default ParallaxNavBar

import React, { Component } from 'react';
import { Keyboard } from 'react-native';

import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
  StatusBar
} from 'react-native';

import {Text} from 'app/components/Type'

const DEFAULT_OBJ = {};

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const NavBar = (props) => (
  <View style={[
      styles.component,
      props.inverted ? styles.componentInverted : DEFAULT_OBJ
    ]}>
    <StatusBar barStyle={props.statusBar ? props.statusBar : props.inverted ? 'dark-content' : 'light-content'}/>

    <View style={styles.centerContainer}>
      {props.titleImage ? (
        <Image style={styles.titleImage} source={{uri: props.titleImage}} />
      ) : (
        <Text style={[styles.title, props.inverted ? styles.titleInverted : DEFAULT_OBJ ]}>{props.title}</Text>
      )}
    </View>

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

  </View>
);


// styles
const styles = StyleSheet.create({
  component : {
    zIndex: 99,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
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
    left: -5,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    padding: 20,
    ...Platform.select({
      ios: {
        top: 15,
      },
      android: {
        top: 0,
        paddingTop: 13
      }
    })
  },
  centerContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center'
  },
  rightContainer: {
    width: 60,
    backgroundColor: 'transparent',
    position: 'absolute',
    padding: 15,
    right: -5,
    ...Platform.select({
      ios: {
        top: 15,
      },
      android: {
        top: 0,
        paddingTop: 13
      }
    })
  },
  titleImage: {
    height: 25,
    resizeMode: 'contain'
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
    ...Platform.select({
      ios: {
        marginBottom:-5
      }
    })
  },
  titleInverted: {
    color: 'black'
  },
  navText: {
    fontSize: 16,
    color: 'white',
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
    color: 'white',
    fontSize: 26,
    top: 0
  },
  iconInverted: {
    color: 'black'
  },
});


export default NavBar

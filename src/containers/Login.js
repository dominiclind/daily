import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  View,
  StyleSheet,
  Alert,
  Image,
  StatusBar
} from 'react-native';

import { login } from 'app/actions/auth';

import {Text, H1} from 'app/components/Type';

import Button from 'app/components/Button';
import Container from 'app/components/Container'
import Onboarding from 'app/components/Onboarding'
import Modal from 'app/components/Modal';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      onboarding: true
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
  }

  _showOnboarding() {
    this.setState({onboarding: !this.state.onboarding})
  }
  _onForgotPress() {
    Alert.alert(
      'Forgot password',
      'Remember to forget password here',
      [],
      { cancelable: true }
    )
  }
  render() {
    const { auth } = this.props;

    return (
      <Container center gradient={['#D9AFD9','#97D9E1']}>
        <StatusBar barStyle="light-content" />

        <Image style={styles.logo} source={{uri: 'https://i.imgur.com/DoN86qO.png'}} />
        <H1 color="white" style={{marginBottom: 80}}>BestApp</H1>

        <Button
          background="white"
          color="#59878C"
          onPress={() => this.props.dispatch(login())}
          loading={auth.loading}
          iconLeft="facebook-box"
        >
          Login with facebook
        </Button>
        <Button 
          small
          inverted
          color="white"
          onPress={() => this._onForgotPress()}
        >
          forgot password?
        </Button>
        <View style={{position:'absolute', bottom: 0}}>
          <Button
            small
            inverted
            color="white"
            onPress={() => this._showOnboarding()}
          >
            What is this app?
          </Button>
        </View>

        <Onboarding
          show={this.state.onboarding}
          onHide={() => this.setState({onboarding: false})}
          screens={[
          {
            image: 'https://cdn.dribbble.com/users/107759/screenshots/3651794/wfkv33.gif',
            title: 'Welcome',
            text: 'First screen of onboarding!'
          },
          {
            image: 'https://cdn.dribbble.com/users/107759/screenshots/3749219/save-money.gif',
            title: 'Describing feature nr 1',
            text: 'How this thing is completely impossible to live without, and why you should use it.'
          },
          {
            image: 'https://cdn.dribbble.com/users/5815/screenshots/2420649/ezgif-3521036396.gif',
            title: 'Feature 3: feature more',
            text: 'Just press play, and your dreams come true.'
          }
        ]}/>
    
      </Container>
    );
  }
}


// styles
const styles = StyleSheet.create({
  page : {
    flex: 1,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 5
  }
});


// get relevant props from state
function mapStateToProps(state) {
  const { auth } = state;

  return {
		auth
  };
}

export default connect(mapStateToProps)(Login);

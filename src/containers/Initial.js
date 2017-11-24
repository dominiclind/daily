import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

import { boot } from 'app/actions/auth';

import Container from 'app/components/Container'

class Initial extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(boot());
  }

  render() {
    return (
      <Container center gradient={['#2AF598','#08AEEA']}>
        <ActivityIndicator color="white" />
      </Container>
    );
  }
}


// styles
const styles = StyleSheet.create({
  page : {
    flex: 1,
  }
});


// get relevant props from state
function mapStateToProps(state) {
  const { thing } = state;

  return {
		thing
  };
}

export default connect(mapStateToProps)(Initial);

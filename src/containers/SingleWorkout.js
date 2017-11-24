import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {
  View,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

import axios from 'axios';

import { Text,H1,H2 } from 'app/components/Type';
import Container from 'app/components/Container'
import ParallaxNavBar from 'app/components/ParallaxNavBar'
import ListItem from 'app/components/ListItem'

class SingleWorkout extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
  }

  render() {
    const { workout } = this.props;

    return (
      <Container>
        <ParallaxNavBar
          title={ workout.title}
          leftIcon="arrow-left"
          onLeft={() => Actions.pop()}
          rightIcon="heart"
          onRight={() => console.log('right')}
        >
          <Text style={{marginBottom: 40}}>{ workout.description}</Text>
          { workout.instructions.map((instruction, index) => (
            <ListItem key={index} {...instruction}/>
          ))}
        </ParallaxNavBar>
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

export default connect(mapStateToProps)(SingleWorkout);

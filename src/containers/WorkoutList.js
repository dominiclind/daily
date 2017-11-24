import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux';
import { connect } from 'react-redux';
import axios from 'axios';

import {
  View,
  StyleSheet
} from 'react-native';


import {getWorkouts} from 'app/actions/workouts';

import { Text,H1,H2 } from 'app/components/Type';
import Container from 'app/components/Container';
import Slider from 'app/components/Slider';
import WorkoutCard from 'app/components/WorkoutCard';

class WorkoutList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      featured: []
    }
  }

  componentDidMount() {
    const { dispatch, workouts } = this.props;

    dispatch(getWorkouts())
  }

  render() {
    const { featured, workouts } = this.props.workouts;
    return (
      <Container>
        <Slider title="Featured">
          {featured.map((w,i) => <WorkoutCard onPress={() => Actions.single({workout: w})} last={i == featured.length-1} key={w.id} {...w}/>)}
        </Slider>
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
  const { thing, workouts } = state;

  return {
		thing,
    workouts
  };
}

export default connect(mapStateToProps)(WorkoutList);
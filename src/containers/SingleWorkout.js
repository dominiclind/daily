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
import Container from 'app/components/Container';
import ParallaxNavBar from 'app/components/ParallaxNavBar';
import ListItem from 'app/components/ListItem';

class SingleWorkout extends Component {

  constructor(props) {
    super(props);


    console.log(props.workout);
    this.state = {
      loading: true,
      instructions : props.workout.instructions
    }
  }

  componentDidMount() {
    const { dispatch,workout } = this.props;
  }

  toggle(index) {
    console.log('toggle');
    const { instructions } = this.state;
    
    let newInstructions = [...instructions]; 
    instructions[index].checked = !instructions[index].checked;
    this.setState({instructions: newInstructions});
  }
  render() {
    const { workout } = this.props;

    return (
      <Container>
        <ParallaxNavBar
          title={workout.title}
          subtitle={workout.subtitle || 'Dagens pass'}
          leftIcon="arrow-left"
          onLeft={() => Actions.pop()}
          rightIcon="heart"
          onRight={() => console.log('right')}
        >
        <View style={{padding: 15}}>
          <View style={styles.descWrapper}>
          <Text style={{marginBottom: 20}}>{ workout.description}</Text>
          </View>
          { workout.instructions.map((instruction, index) => (
            <ListItem
              key={index}
              checked={this.state.instructions[index].checked}
              onPress={() => this.toggle(index)}
              {...instruction}
            />
          ))}
          </View>
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

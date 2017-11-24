import React, { Component } from 'react';
import {
  Scene,
  Reducer,
  Router,
  Switch,
  Modal,
  Actions,
  ActionConst,
} from 'react-native-router-flux';

import KitchenSink from 'app/containers/KitchenSink';
import Login from 'app/containers/Login';
import Initial from 'app/containers/Initial';
import SingleWorkout from 'app/containers/SingleWorkout';
import WorkoutList from 'app/containers/WorkoutList';

const getSceneStyle = () => ({
  backgroundColor: "#fff",
  shadowOpacity: 0,
  shadowRadius: 0,
});

class Routes extends Component { 
  render () {
    return (
			<Router getSceneStyle={getSceneStyle}>
    		<Scene key="root" hideNavBar>
    			<Scene key="initial"  component={Initial} />
	        <Scene key="login" type="replace" component={Login} />
          <Scene key="home" type="replace" panHandlers={null} component={KitchenSink} />
          <Scene key="single"  component={SingleWorkout} />
          <Scene key="workoutList" initial  component={WorkoutList} />
  	    </Scene>
	    </Router>
    );
  }
}

export default Routes;

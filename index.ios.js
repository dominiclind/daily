import { AppRegistry } from 'react-native';

// @todo remove when RN upstream is fixed
console.ignoredYellowBox = ['Warning: Failed propType: SceneView'];

import Root from './src/root';

AppRegistry.registerComponent('dailyWorkouts', () => Root);

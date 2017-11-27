import {StatusBar} from 'react-native';

import { Actions } from 'react-native-router-flux';

import { getData } from 'app/utils/api';

export const GET_WORKOUTS = 'WORKOUTS/GET_WORKOUTS';
export const GET_WORKOUTS_SUCCESS = 'WORKOUTS/GET_WORKOUTS_SUCCESS';
export const GET_WORKOUTS_FAIL = 'WORKOUTS/GET_WORKOUTS_FAIL';



export function getWorkouts() {
	return (dispatch) => {
		dispatch({type: GET_WORKOUTS})
		getData().then(res => {

			const workouts = res.workouts;
			const sliders = res.sliders;

			dispatch({type: GET_WORKOUTS_SUCCESS, workouts, sliders})
		})
	}
}

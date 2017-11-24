import {StatusBar} from 'react-native';

import { Actions } from 'react-native-router-flux';

import { getWorkouts as APIgetWorkouts } from 'app/utils/api';

import getFeatured from 'app/utils/getFeatured';

export const GET_WORKOUTS = 'WORKOUTS/GET_WORKOUTS';
export const GET_WORKOUTS_SUCCESS = 'WORKOUTS/GET_WORKOUTS_SUCCESS';
export const GET_WORKOUTS_FAIL = 'WORKOUTS/GET_WORKOUTS_FAIL';



export function getWorkouts() {
	return (dispatch) => {
		dispatch({type: GET_WORKOUTS})
		APIgetWorkouts().then(res => {

			const workouts = res.workouts;
			const featured = getFeatured(res.featured, workouts);

			dispatch({type: GET_WORKOUTS_SUCCESS, featured, workouts})
		})
	}
}

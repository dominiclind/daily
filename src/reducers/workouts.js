import {
  GET_WORKOUTS,
  GET_WORKOUTS_SUCCESS,
  GET_WORKOUTS_FAIL,
} from '../actions/workouts';

const initialState = {
  loading: false,
  workouts: [],
  sliders: []
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case GET_WORKOUTS:
      return {
        ...state,
        loading: true
      }
    case GET_WORKOUTS_SUCCESS:
      return {
        ...state,
        loading: false,
        workouts: action.workouts,
        sliders: action.sliders
      }
    case GET_WORKOUTS_FAIL:
      return {
        ...state,
        loading:false,
      }           
    default:
      return state;
  }
}

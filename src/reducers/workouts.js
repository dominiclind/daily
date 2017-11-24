import {
  GET_WORKOUTS,
  GET_WORKOUTS_SUCCESS,
  GET_WORKOUTS_FAIL,
} from '../actions/workouts';

const initialState = {
  loading: false,
  workouts: [],
  featured: []
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
        featured: action.featured
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

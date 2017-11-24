import {
  BOOT,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_CANCELLED,
  LOGIN_ERROR,
} from '../actions/auth';

const initialState = {
  loading: false,
  auth: false
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        auth: action.token
      }
    case LOGIN_CANCELLED:
      return {
        ...state,
        loading:false,
      }
    case LOGIN_ERROR:
      return {
        ...state,
        loading:false,
      }            
    case BOOT:
      return {
        ...state,
        loading:false,
      }
    default:
      return state;
  }
}

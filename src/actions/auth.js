import {StatusBar} from 'react-native';

import { Actions } from 'react-native-router-flux';

import { getToken } from 'app/utils/fb';
import { login as firebaseLogin, checkLogin } from 'app/utils/firebase';

export const BOOT = 'AUTH/BOOT';
export const LOGIN = 'AUTH/LOGIN';
export const LOGIN_SUCCESS = 'AUTH/LOGIN_SUCCESS';
export const LOGIN_CANCELLED = 'AUTH/LOGIN_CANCELLED';
export const LOGIN_ERROR = 'AUTH/LOGIN_ERROR';

export function boot() {
  return (dispatch, getState) => {
    dispatch({ type: BOOT });
    const { auth } = getState(); 
    
    // checkLogin((user) => {
    //   if(user){
    //     Actions.home();
    //   } else {
    //     Actions.login();
    //   }
    // })

    if(auth.auth){
      Actions.home();
    } else {
      Actions.login();
    }
  }
}



export function login() {
  return (dispatch) => {
    dispatch({ type: LOGIN });
    StatusBar.setHidden(true, 'slide');
    getToken().then(({token}) => {
      StatusBar.setHidden(false, 'slide');
      console.log('GOT TOKEN IN RESOLVE: ', token);
      //firebaseLogin(token);

      dispatch({type: LOGIN_SUCCESS, token})

      Actions.home();
    })
    .catch(response => {
      StatusBar.setHidden(false, 'slide');
      console.log('somehow it ddnt work: ', response)
      if(response.status == 'cancelled'){
        dispatch({type: LOGIN_CANCELLED});
      } else{
        dispatch({type: LOGIN_ERROR});
      }
    });
  }
}

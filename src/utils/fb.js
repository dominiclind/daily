import FBSDK from 'react-native-fbsdk';

const {
  LoginManager,
  AccessToken
} = FBSDK;

export function getToken (string) {
	return new Promise((resolve, reject) => {
	  LoginManager.logInWithReadPermissions(['public_profile']).then(
	    function(result) {
	      if (result.isCancelled) {
	      	reject({error: true, status: 'cancelled'});
	      } else {
	        AccessToken.getCurrentAccessToken().then(data => {
	          const accessToken = data.accessToken.toString();
	          console.log('got token:', accessToken)
	      		resolve({status: 'success', token: accessToken});
	        });
	      }
	    },
	    function(error) {
	      reject({error: true, status: error})
	    }
	  );
  })
}


export function fblogout (string) {
	LoginManager.logOut();
}
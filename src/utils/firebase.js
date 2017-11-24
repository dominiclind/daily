// import firebase from 'firebase';

// var config = {
//   apiKey: "AIzaSyBl0pw-9HcqvB1iC0Vpniw-CMaIs6iOrnQ",
//   authDomain: "elux-home.firebaseapp.com",
//   databaseURL: "https://elux-home.firebaseio.com",
//   projectId: "elux-home",
//   storageBucket: "elux-home.appspot.com",
//   messagingSenderId: "655579722646"
// };

// let app;

// if (!firebase.apps.length) {
//   app = firebase.initializeApp(config);
// }

// const objectAsArray = (obj) => {
//   const array = Object.keys(obj).map(key => {
//     return {
//       ...obj[key],
//       id: key
//     }
//   });
//   return array;
// }

// check login
export function checkLogin(cb) {
	firebase.auth().onAuthStateChanged((user) => {
    if(user){
      const cleanUser = {
        id: user.uid,
        displayName: user.displayName,
        picture: user.photoURL,
      };
      firebase.database().ref(`users/${user.uid}`).set(cleanUser, cb(cleanUser));
    } else {
      cb(false);
    }
  });
}

// login
export function login(token) {
	const credential = firebase.auth.FacebookAuthProvider.credential(token);
  
  firebase.auth().signInWithCredential(credential).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(error);
    // ...
  });
}

// logout
export function logout() {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    //cb()
  }, function(error) {
    // An error happened.
  });
}
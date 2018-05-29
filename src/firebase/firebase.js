import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDjWykwrRJw9DJHWaYScJe3OPLvJNAUL-A",
  authDomain: "control-ind.firebaseapp.com",
  databaseURL: "https://control-ind.firebaseio.com",
  projectId: "control-ind",
  storageBucket: "control-ind.appspot.com",
  messagingSenderId: "236934360125"
}

firebase.initializeApp(config);

export default firebase;

export const provider = new firebase.auth.FacebookAuthProvider();
export const auth = firebase.auth();
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD4ntLmYXhIdvFtd8VKyaSMRNTuuUDB4rU',
  authDomain: 'crwn-db-729dc.firebaseapp.com',
  databaseURL: 'https://crwn-db-729dc.firebaseio.com',
  projectId: 'crwn-db-729dc',
  storageBucket: 'crwn-db-729dc.appspot.com',
  messagingSenderId: '410005596422',
  appId: '1:410005596422:web:1b81b37c021a1b9f3ad687',
  measurementId: 'G-EDQCVJCCCR'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

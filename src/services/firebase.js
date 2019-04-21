import firebase from 'firebase/app';

const config = {
  apiKey: 'AIzaSyAycbpm69g7DLaJcTYiSTICwFuhnmJAaxA',
  authDomain: 'react-notes-3e0ab.firebaseapp.com',
  databaseURL: 'https://react-notes-3e0ab.firebaseio.com',
  projectId: 'react-notes-3e0ab',
  storageBucket: 'react-notes-3e0ab.appspot.com',
  messagingSenderId: '85222766707',
};

firebase.initializeApp(config);
export default firebase;

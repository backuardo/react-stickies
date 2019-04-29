import firebase from 'firebase/app';

const config = {
  /*
    I know what you're thinking, but it's ok
    https://stackoverflow.com/a/37484053
  */
  apiKey: 'AIzaSyAycbpm69g7DLaJcTYiSTICwFuhnmJAaxA',
  authDomain: 'react-notes-3e0ab.firebaseapp.com',
  databaseURL: 'https://react-notes-3e0ab.firebaseio.com',
  projectId: 'react-notes-3e0ab',
  storageBucket: 'react-notes-3e0ab.appspot.com',
  messagingSenderId: '85222766707',
};

firebase.initializeApp(config);
export default firebase;

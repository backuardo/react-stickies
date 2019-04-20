import firebase from 'firebase/app';
import 'firebase/database';


const config = {
  apiKey: 'AIzaSyAycbpm69g7DLaJcTYiSTICwFuhnmJAaxA',
  authDomain: 'react-notes-3e0ab.firebaseapp.com',
  databaseURL: 'https://react-notes-3e0ab.firebaseio.com',
  projectId: 'react-notes-3e0ab',
  storageBucket: 'react-notes-3e0ab.appspot.com',
  messagingSenderId: '85222766707',
};

firebase.initializeApp(config);

export function fetchNotes(callback) {
  firebase.database().ref('notes').on('value', (snapshot) => {
    const newNoteState = snapshot.val();
    callback(newNoteState);
  });
}

export function addNote(newNote) {
  firebase.database().ref('notes').push(newNote);
}

export function updateNote(id, fields) {
  firebase.database().ref('notes').child(id).update(fields);
}

export function deleteNote(id) {
  firebase.database().ref('notes').child(id).remove();
}

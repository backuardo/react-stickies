import 'firebase/database';
import firebase from './firebase';

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

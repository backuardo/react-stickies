import 'firebase/auth';
import firebase from './firebase';

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

export function signIn(callback) {
  auth.signInWithPopup(provider)
    .then((result) => {
      const { user } = result;
      callback(user);
    });
}

export function signOut(callback) {
  auth.signOut()
    .then(() => callback());
}

export function persistSignIn(callback) {
  // if user was signed in last time, automatically sign them in
  auth.onAuthStateChanged((user) => {
    if (user) {
      callback(user);
    }
  });
}

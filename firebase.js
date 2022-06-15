import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyCxBSdIwZz8d-x-Pfjjs97WRqL736YBbRk',
  authDomain: 'clonecww001.firebaseapp.com',
  projectId: 'clonecww001',
  storageBucket: 'clonecww001.appspot.com',
  messagingSenderId: '892130199937',
  appId: '1:892130199937:web:59cbc1bfe9dab4fb7f0080',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
export const db = app.firestore();

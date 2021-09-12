import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDTnnwB1IrcK6SxqVvXJc1pas_yMfn_5pw",
  authDomain: "project-73-41b1c.firebaseapp.com",
  projectId: "project-73-41b1c",
  storageBucket: "project-73-41b1c.appspot.com",
  messagingSenderId: "822875733458",
  appId: "1:822875733458:web:0fcb1ff66789809442dc0b"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()


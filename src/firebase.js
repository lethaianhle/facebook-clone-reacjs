// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBlci9KBM0JwhnoOd6TT6nSFpGgZLLMLNU",
    authDomain: "facebook-clone-d075c.firebaseapp.com",
    projectId: "facebook-clone-d075c",
    storageBucket: "facebook-clone-d075c.appspot.com",
    messagingSenderId: "220536897248",
    appId: "1:220536897248:web:d48e4491dd281435095a85",
    measurementId: "G-V3HJ4Q9QW9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
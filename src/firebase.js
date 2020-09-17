import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBXk5wS7xbdCHmf4ImANGhuxcyV_eCB7tE",
    authDomain: "ywitter-c8bcf.firebaseapp.com",
    databaseURL: "https://ywitter-c8bcf.firebaseio.com",
    projectId: "ywitter-c8bcf",
    storageBucket: "ywitter-c8bcf.appspot.com",
    messagingSenderId: "880173606198",
    appId: "1:880173606198:web:8bcc9dfdc21fe156d13f97"
  };

export default firebase.initializeApp(firebaseConfig);
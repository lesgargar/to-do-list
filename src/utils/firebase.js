import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCbIospZQjTd3gR9IjxBcZGBaxeZkv0C2M",
    authDomain: "todolist-540ac.firebaseapp.com",
    databaseURL: "https://todolist-540ac-default-rtdb.firebaseio.com",
    projectId: "todolist-540ac",
    storageBucket: "todolist-540ac.appspot.com",
    messagingSenderId: "72346542412",
    appId: "1:72346542412:web:251ebd334a15a3d74cefe9"
  };

  export default firebase.initializeApp(firebaseConfig);
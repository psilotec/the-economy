import firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyBPIoy1oEAoBj-B9AFFkdgIb1EqLA4LO8c",
    authDomain: "the-economy.firebaseapp.com",
    databaseURL: "https://the-economy.firebaseio.com",
    projectId: "the-economy",
    storageBucket: "",
    messagingSenderId: "311964826052"
  };
  
  firebase.initializeApp(config);

const database = firebase.database();

export default database;
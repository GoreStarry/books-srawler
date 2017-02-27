var firebase = require("firebase");

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
  apiKey: "AIzaSyDUOgiFBD0ZtuiFeaomS0RAUmtEQ-NDr7Q",
  authDomain: "books-srawler.firebaseapp.com",
  databaseURL: "https://books-srawler.firebaseio.com",
  storageBucket: "books-srawler.appspot.com",
  messagingSenderId: "674342355866"
};
firebase.initializeApp(config);
var database = firebase.database();

const email = 'rx783gp03@gmail.com';
const password = '25571174';

firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
// ...
});

function writeUserData(bookId, name, createTime, imageUrl) {
  firebase.database().ref('users/' + bookId).set({
    username: name,
    createTime: createTime,
  });
}

writeUserData('dsfasdfs', 'GQ', '2017-3-2')

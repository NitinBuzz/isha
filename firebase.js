const firebase = require('firebase');
const config = {
  apiKey: 'AIzaSyDcSH--Lb7lwaG6-2cnbNlRZ0kx0gm8v3Q',
  authDomain: 'isha-prod.firebaseapp.com',
  databaseURL: 'https://isha-prod.firebaseio.com',
  projectId: 'isha-prod',
  storageBucket: 'isha-prod.appspot.com',
  messagingSenderId: '108161243429'
};
firebase.initializeApp(config);
const database = firebase.database();
// database.ref('messages').push({
//   name: 'www',
//   email: 'ee',
//   message: 'rrr',
//   date: Date.now()
// });

let message;
const pushIn = (name, email, message) => {
  return new Promise((resolve, reject) => {
    message = database.ref('messages').push({
      name,
      email,
      message,
      date: Date.now()
    });
    if (message) {
      resolve(message);
    }
    reject('Error');
  });
};

module.exports = ({ firebase }, { database }, pushIn);

// <script>
//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyDcSH--Lb7lwaG6-2cnbNlRZ0kx0gm8v3Q",
//     authDomain: "isha-prod.firebaseapp.com",
//     databaseURL: "https://isha-prod.firebaseio.com",
//     projectId: "isha-prod",
//     storageBucket: "isha-prod.appspot.com",
//     messagingSenderId: "108161243429"
//   };
//   firebase.initializeApp(config);
// </script>

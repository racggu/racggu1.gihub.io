// [START initialize_firebase_in_sw]
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-messaging.js');
// Initialize the Firebase app in the service worker by passing in the messagingSenderId.

firebase.initializeApp({
  apiKey: "AIzaSyBrDjk8usRFwBF0gZymkatk2DIAHhQ3I6A",
  authDomain: "mouda-707ff.firebaseapp.com",
  databaseURL: "xxxx-xxxx-xxxx-xxxx",
  projectId: "mouda-707ff",
  storageBucket: "mouda-707ff.appspot.com",
  messagingSenderId: "914369579960",
  appId: "1:914369579960:web:cf19bd6f599ee6e19b1d4d",
  measurementId: "G-6X2NPPSVLT"
});

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();
// [END initialize_firebase_in_sw]
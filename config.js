import * as firebase from 'firebase'
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCJu-qdSvl9TZ5hMwn3T-vIwadcXwePDp8",
  authDomain: "class71-ed888.firebaseapp.com",
  projectId: "class71-ed888",
  storageBucket: "class71-ed888.appspot.com",
  messagingSenderId: "881873966203",
  appId: "1:881873966203:web:6ed065d82ebe0f9d21fede"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore()
  

import firebase from 'firebase'
import 'firebase/database'

let firebaseConfig = {
  apiKey: "AIzaSyDlzGSCiYIlHgidgwPkV_GJKdp7NP2c2gs",
  authDomain: "meuapp-9f13a.firebaseapp.com",
  databaseURL: "https://meuapp-9f13a.firebaseio.com",
  projectId: "meuapp-9f13a",
  storageBucket: "meuapp-9f13a.appspot.com",
  messagingSenderId: "1027035173355",
  appId: "1:1027035173355:web:0143a1ae962ecb119489ae",
  measurementId: "G-VY59XYRBLQ"
};
// Initialize Firebase
if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
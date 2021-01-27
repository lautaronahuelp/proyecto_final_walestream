import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDDN43inBAI5YOq-AzkuCACIx_5hgUuRcU",
    authDomain: "proyecto-walestream-coderhouse.firebaseapp.com",
    projectId: "proyecto-walestream-coderhouse",
    storageBucket: "proyecto-walestream-coderhouse.appspot.com",
    messagingSenderId: "947900596605",
    appId: "1:947900596605:web:1aa24a2bebe1ffa9cbcc14"
  }


const app = firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore(app)
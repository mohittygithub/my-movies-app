import firebase from 'firebase/app'
import '/firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCZSpnATWxL6ilA3aihbQG43f-W6Wz1Yvg',
  authDomain: 'my-movies-app-6a8f5.firebaseapp.com',
  projectId: 'my-movies-app-6a8f5',
  storageBucket: 'my-movies-app-6a8f5.appspot.com',
  messagingSenderId: '320916654009',
  appId: '1:320916654009:web:e5f9e7990eef2788fc5868',
}

export const createUserProfileDocument = async (userAuth, additionalData) => {}
firebase.initializeApp(firebaseConfig)

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDr0CyirnCHr9mgcy7kHkCS4vwy72Q6dmY',
  authDomain: 'fashain.firebaseapp.com',
  projectId: 'fashain',
  storageBucket: 'fashain.appspot.com',
  messagingSenderId: '518946434425',
  appId: '1:518946434425:web:898690202c2c2ef5f813a8',
  measurementId: 'G-P24W5RPK5F'
}

// init firebase
initializeApp(firebaseConfig)

// init & export firestore service
export const db = getFirestore()
export const auth = getAuth()

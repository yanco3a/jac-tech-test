// npm dependencies
import firebase from 'firebase'
import 'firebase/firestore'

// local dependencies
import firebaseConfig from './firebaseConfig'

// Constants
const firebaseApp = firebase.initializeApp(firebaseConfig)

// initialise Firestore
export default firebaseApp.firestore()


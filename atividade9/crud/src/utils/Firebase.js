import firebase from 'firebase/app'
import 'firebase/firestore'
import Firebase_key from '../keys/Firebase_key'

export default class Firebase {
    constructor() {
        firebase.initializeApp(Firebase_key) //key
    }

    getFirestore() {
        return firebase.firestore()
    }
}
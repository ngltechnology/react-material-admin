import firebase from "firebase/app"
import "firebase/firestore"
import { config } from "./config"

export const firebaseApp = firebase.initializeApp(config)
export const authentication = firebase.auth()
export const firestore = firebase.firestore()

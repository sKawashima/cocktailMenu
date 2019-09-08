'use strict'

import * as firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDnqiZLbEbyUkLa_Z3Z94_3fOJvIHyOa7o',
  authDomain: 'cocktail-menu-d94f8.firebaseapp.com',
  databaseURL: 'https://cocktail-menu-d94f8.firebaseio.com',
  projectId: 'cocktail-menu-d94f8',
  storageBucket: 'cocktail-menu-d94f8.appspot.com',
  messagingSenderId: '26002974316',
  appId: '1:26002974316:web:8699b7ad5ece8c7e831a49'
}

const app = firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
// const collection = db.collection('cocktails')

export const upload = (data:any, collectionName:string) => {
  const collection = db.collection(collectionName)
  collection.add(data).then(() => {
    return 'success'
  }).catch((e) => {
    return e
  })
}

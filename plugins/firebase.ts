import firebase from 'firebase/app'

const config = {
  apiKey: "AIzaSyCU43wTBbs6mKowlB7B4yc8VBn9XUmg88Q",
  authDomain: "cocktail-menu-49dc6.firebaseapp.com",
  databaseURL: "https://cocktail-menu-49dc6.firebaseio.com",
  projectId: "cocktail-menu-49dc6",
  storageBucket: "cocktail-menu-49dc6.appspot.com",
  messagingSenderId: "280726237672",
  appId: "1:280726237672:web:fe8b5242d7743146"
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase

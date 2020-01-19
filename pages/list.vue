<template lang="pug">
div
  h2 list
  ul
    li(v-for='cocktail in cocktails')
      p {{ cocktail.name}}
      p {{ cocktail.alcohol }}
      p {{ cocktail.base }}
      p {{ cocktail.color }}
      p {{ cocktail.taste }}
      p 材料
      ul
        li(v-for='material in cocktail.materials')
          p {{ material.name }}
</template>

<script lang="ts">
import Vue from 'vue'
import * as firebase from 'firebase/app'
import 'firebase/firestore'

let vm

export default Vue.extend({
  data: () => {
    return {
      cocktails: []
    }
  },

  created () {
    vm = this

    const firebaseConfig = {
      apiKey: 'AIzaSyDnqiZLbEbyUkLa_Z3Z94_3fOJvIHyOa7o',
      authDomain: 'cocktail-menu-d94f8.firebaseapp.com',
      databaseURL: 'https://cocktail-menu-d94f8.firebaseio.com',
      projectId: 'cocktail-menu-d94f8',
      storageBucket: 'cocktail-menu-d94f8.appspot.com',
      messagingSenderId: '26002974316',
      appId: '1:26002974316:web:8699b7ad5ece8c7e831a49'
    }

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
    }

    vm.cocktails = []

    const db = firebase.firestore()
    db.collection('cocktails').get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          vm.cocktails.push(doc.data())
        })
      })
  }
})
</script>

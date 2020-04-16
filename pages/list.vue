<template lang="pug">
section.cocktailWrapper
  Cocktail(v-for='cocktail in cocktails' :cocktail='cocktail')
</template>

<script lang="ts">
import Vue from 'vue'
import * as firebase from 'firebase/app'
import 'firebase/firestore'

import Cocktail from '@/components/Cocktail'

let vm

export default Vue.extend({
  components: {
    Cocktail
  },

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

<style lang="sass" scoped>
.cocktailWrapper
  margin: 24px
  display: grid
  grid-gap: 24px
  grid-template-columns: 1fr 1fr 1fr
  @media screen and (max-width: 960px)
    grid-template-columns: 1fr 1fr
  @media screen and (max-width: 600px)
    grid-template-columns: 1fr
</style>

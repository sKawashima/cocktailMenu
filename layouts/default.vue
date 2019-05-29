<template lang='pug'>
  #container
    nav#nav.inner
      .brand
        nuxt-link(to='/').button.logo
          | Cocktail Menu
        .burger
          a.button(@click='updateBurgerStatus')
            fa.icon(icon='bars')
      .menu(v-bind:class='[{"is-active": isActive}]')
        nuxt-link(to='/').button
          p Cocktail List
        nuxt-link(to='/').button
          p Bottles
        nuxt-link(to='new').button
          p add Cocktail
    nuxt#main
    footer
      p © 2019 sKawashima
</template>

<style lang="sass">
@import '~assets/sass/variable'

body
  background-color: #fff
  min-height: 100vh
  font-family: 'Hannari', 'Yu Mincho', 'YuMincho', serif

.inner
  display: block
  max-width: 1080px
  margin: 0 auto
  padding: 0 1em
</style>

<style lang='sass' scoped>
@import '~assets/sass/variable'

#container
  display: flex
  flex-direction: column
  min-height: 100vh

#nav
  margin-top: 1em
  display: flex
  padding: 0 .5em
  font-weight: bold
  width: 100%
  a
    color: $theme-color
    text-decoration: none
    &:hover
      text-decoration: underline
  @media screen and (max-width: 768px)
    flex-direction: column
    padding: 0
  .brand
    display: flex
    justify-content: space-between
  .menu
    display: flex
    @media screen and (max-width: 768px)
      display: none
      flex-direction: column
  .burger
    display: none
    @media screen and (max-width: 768px)
      display: block
      .button
        &:hover
          background-color: inherit
  .button
    display: flex
    padding: 1em 0
    align-items: center
    margin-right: 2em
    @media screen and (max-width: 768px)
      margin-right: 0
  .is-active
    display: flex
#main
  flex-grow: 1
footer
  width: 100vw
  height: 4em
  display: flex
  justify-content: center
  align-items: center
  background-color: $theme-color
  color: #fff
</style>

<script lang="ts">
// import { log } from 'util'
import Vue from 'vue'

let vm
export default Vue.extend({
  data: () => {
    return {
      isActive: 0
    }
  },
  created() {
    vm = this
  },
  methods: {
    updateBurgerStatus: () => {
      vm.isActive = ~vm.isActive
      // console.log(vm.isActive)
    }
  }
})
</script>

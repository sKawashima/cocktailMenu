<template lang='pug'>
  #container
    nav#nav
      .brand
        nuxt-link(to='/').button.logo
          fa.icon(icon='cocktail')
        .burger
          a.button(@click='updateBurgerStatus')
            fa.icon(icon='bars')
      .menu(v-bind:class='[{"is-active": isActive}]')
        nuxt-link(to='/').button
          fa.icon(icon='clipboard-list')
          p Cocktail List
        nuxt-link(to='/').button
          fa.icon(icon='wine-bottle')
          p Bottles
    nuxt#main
    footer
      p © 2019 sKawashima
</template>

<style lang='sass' scoped>
$theme-color: #ffeed3

#container
  display: flex
  flex-direction: column
  min-height: 100vh

#nav
  display: flex
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.6))
  background-color: darken($theme-color, 20)
  padding: 0 .5em
  a
    color: #111
    text-decoration: none
  @media screen and (max-width: 768px)
    flex-direction: column
    padding: 0
  .brand
    display: flex
    justify-content: space-between
    .logo
      color: darken(saturate($theme-color, 80%), 60)
  .menu
    display: flex
    @media screen and (max-width: 768px)
      display: none
      flex-direction: column
      background-color: darken($theme-color, 7)
  .burger
    display: none
    @media screen and (max-width: 768px)
      display: block
      .button
        &:hover
          background-color: inherit
  .button
    display: flex
    padding: 1em
    align-items: center
    margin-right: 0.5em
    @media screen and (max-width: 768px)
      margin-right: 0
    p
      margin: 0 0.5em
    &:hover
      background-color: lighten(darken($theme-color, 20), 10)
  .icon
    font-size: 1.5em
  .is-active
    display: flex
#main
  margin: 2em 0
  flex-grow: 1
footer
  width: 100vw
  height: 4em
  display: flex
  justify-content: center
  align-items: center
  background-color: desaturate($theme-color, 100)
</style>

<style lang="sass">
$theme-color: #ffeed3

body
  background-color: $theme-color
  min-height: 100vh
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

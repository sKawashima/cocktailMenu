<template lang="pug">
  div
    nav.navbar.has-shadow
      .navbar-brand
        nuxt-link.navbar-item.has-text-centered(to='/')
          font-awesome-icon(icon='cocktail').is-size-4
        a.navbar-burger#burger(aria-label='menu' aria-expanded='false' @click='toggleBurger')
          - for (let i = 0;i < 3;i++)
            span(aria-hidden='true')
      #mainMenu.navbar-menu.navbar-start(v-bind:class='[{"is-active": isActiveBurger}]')
        .navbar-item
          nuxt-link(to='/recipe')
            font-awesome-icon(icon='clipboard-list').is-size-5
            span Cocktail
        .navbar-item
          nuxt-link(to='/list')
            font-awesome-icon(icon='wine-bottle').is-size-5
            span Bottle
      #userSettings.navbar-menu.navbar-end(v-bind:class='[{"is-active": isActiveBurger}]')
        .navbar-item
          .buttons
            a.button(disabled) ユーザー認証
    .container
      nuxt
    footer.footer
      .content.has-text-centered
        p © 2019 sKawashima
</template>

<style scoped lang='sass'>
.navbar-item
  span
    padding-left: 0.5em
</style>

<script lang="ts">
import Vue from 'vue'

let vm
export default Vue.extend({
  data: () => {
    return {
      isActiveBurger: 0
    }
  },
  created() {
    vm = this
  },
  methods: {
    toggleBurger: () => {
      // console.log('clicked burger')
      vm.isActiveBurger = ~vm.isActiveBurger
      // console.log(vm.isActiveBurger)
    }
  }
})
</script>

function newFunction() {
  return this;
}

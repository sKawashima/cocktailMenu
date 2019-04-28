<template lang="pug">
  div
    nav.navbar.has-shadow
      .navbar-brand.navbar-start
        .navbar-item
          nuxt-link(to='/recipe')
            font-awesome-icon(icon='clipboard-list').is-size-5
            span Cocktail
        .navbar-item
          nuxt-link(to='/list')
            font-awesome-icon(icon='wine-bottle').is-size-5
            span Bottle
      .navbar-item
        font-awesome-icon(icon='cocktail').is-size-4
      nuxt-link(to='/').navbar-end
        .navbar-item
          .buttons
            a.button(disabled) ユーザー認証
    #main
      nuxt
    footer.footer
      p © 2019 sKawashima
</template>

<style scoped lang='sass'>
.navbar-item
  span
    padding-left: 0.5em
</style>

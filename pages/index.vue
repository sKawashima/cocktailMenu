<template lang='pug'>
  section
    div
      logo
      h1.title
        | cocktailMenu
      h2.subtitle
        | meu test
      .links
        a.button--green(href="https://nuxtjs.org/" target="_blank") Documentation
        a.button--grey(href="https://github.com/nuxt/nuxt.js" target="_blank") GitHub
        .button test

</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
</style>

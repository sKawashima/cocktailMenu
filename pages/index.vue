<template lang='pug'>
section.container
  #hero
    h1 Cocktail Menu
    p Cocktail Recipe Database for House Bartender
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="sass" scoped>
#hero
  padding: 0 2em
</style>

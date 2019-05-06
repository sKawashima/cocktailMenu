<template lang='pug'>
section.container
  #hero
    .inner
      h1
        fa.icon(icon='cocktail')
        |  Cocktail Menu
      p 家でカクテルを作る人のためのカクテルデータベース
  #list.inner
    h2 新着カクテル
    List
</template>

<script>
import List from '~/components/List.vue'

export default {
  components: {
    List
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'

#hero
  padding: 2em 1em
  background-color: darken($theme-color, 75)
  color: #fff
  h1
    font-size: 2rem
    font-weight: bold
  p
    margin-top: 1.5em
#list
  margin-top: 2em
  h2
    font-weight: bold
    font-size: 1.5rem
    margin: 0 0 1rem
</style>

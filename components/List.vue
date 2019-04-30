<template lang="pug">
#list
  h2 新着カクテル
  .list
    - for(let i = 0;i < 8;i++)
      ListItem.item
</template>

<style lang="sass" scoped>
#list
  margin-top: 2em
  padding: 0 1em
  h2
    font-weight: bold
    font-size: 1.5rem
    margin: 0 0 1rem
</style>

<script lang="ts">
import ListItem from '~/components/List_item.vue'
import Vue from 'vue'

export default Vue.extend({
  components: {
    ListItem
  }
})
</script>

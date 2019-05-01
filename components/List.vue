<template lang="pug">
section
  - for(let i = 0;i < 8;i++)
    ListItem.item(
      name='カルーア・ミルク',
      alcohol='12'
    )
</template>

<style lang="sass" scoped>
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

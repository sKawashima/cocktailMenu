<template lang='pug'>
  div
    Header
    nuxt
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/Header'

export default Vue.extend({
  components: {
    Header
  }
})
</script>

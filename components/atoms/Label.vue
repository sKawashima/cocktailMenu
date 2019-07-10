<template lang='pug'>
label.label {{text}}
</template>

<script>
let vm

export default {
  props: ['text']
}
</script>

<style lang="sass" scoped>
.label
  font-size: 14px
</style>

<template lang='pug'>
label.label {{text}}
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
.label
  font-size: 14px
</style>

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
$theme: #2D1112

.label
  font-size: 14px
  color: $theme
</style>

<template lang="pug">
select.select
  option(v-for='choice in choices') {{ choice }}
</template>

<style lang="sass" scoped>
$theme: #2D1112

.select
  color: $theme
  border: 1px solid $theme
  height: 32px
  width: 100%
</style>

<script>
export default {
  props: {
    choices: Array
  }
}
</script>

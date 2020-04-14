<template lang="pug">
section
  p {{ cocktail.name}}
  p {{ cocktail.alcohol }}
  p {{ cocktail.base }}
  p {{ cocktail.color }}
  p {{ cocktail.taste }}
  p 材料
  ul
    li(v-for='material in cocktail.materials')
      p {{ material.name }}
  p {{ cocktail.recipe }}
  p {{ cocktail.glass }}
  a(:href='cocktail.sourceUrl') source
</template>

<script>
export default {
  props: {
    cocktail: {
      type: Object,
      default: () => ({}),
      required: false
    }
  },
  created () {
    console.dir(this.cocktail)
  }
}
</script>

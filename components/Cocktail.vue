<template lang="pug">
section.cocktail
  h3.heading
    span.alcohol {{ cocktail.alcohol }}
    span.taste {{ cocktail.taste }}
    span.base {{ cocktail.base }}
    p.cocktailName {{ cocktail.name}}
  ul.materialList
    li.material(v-for='material in cocktail.materials')
      p.material__name {{ material.name }}
      p.material__amount {{ material.amount }}
  p.recipe {{ cocktail.recipe }}
  p.glass {{ cocktail.glass }}
  //- a(:href='cocktail.sourceUrl') source
  //- p {{ cocktail.color }}
  //- TODO: colorに併せて表示テーマカラー$themeを変更する
</template>

<script>
export default {
  props: {
    cocktail: {
      type: Object,
      default: () => ({}),
      required: false
    }
  }
}
</script>

<style lang="sass" scoped>
$theme: #333333
$gray-1: #333333
$gray-3: #828282

.cocktail
  border: 1px solid $theme
  border-top: 8px solid $theme
  padding: 16px

.alcohol,
.taste,
.base
  font-size: 11px
  color: $theme

.taste,
.base
  padding-left: 8px

.cocktailName
  font-size: 14px
  font-weight: bold
  color: darken($theme, .5)
  margin-top: 8px

.materialList
  margin-top: 16px

.material
  margin-top: 8px
  font-size: 12px
  display: flex
  &__name
    color: $gray-1
  &__amount
    color: $gray-3
    margin-left: 8px

.recipe
  margin-top: 16px
  font-size: 12px
  color: $gray-1

.glass
  margin-top: 16px
  font-size: 12px
  color: $gray-3
</style>

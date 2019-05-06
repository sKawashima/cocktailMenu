<template lang="pug">
section.container
  .inner
    h1 add Cocktail
    form
      label カクテル名
      input(type='text' v-model='name')
      label 度数
      //- TODO クラス名どういかする
      .w
        input(type='text' v-model='alcohol')
        p 度
      label テイスト
      select(v-model='taste')
        option(disabled value='') テイストを選択してください
        option 甘口
        option 中甘口
        option 中辛口
        option 辛口
      label 材料
      p // あとでつくる
      //- TODO やる
      label レシピ
      p // あとでつくる
      //- TODO やる
</template>

<style lang="sass" scoped>
.inner
  margin: 0 1em
  background-color: #fff
  padding: 2em 1em
  border-radius: 1em
h1
  font-size: 1.5rem
  font-weight: bold
form
  margin-top: 2em
  display: grid
  grid-template-columns: auto 1fr
  grid-gap: 1.5em .5em
  input
    font-size: 1.1em
    padding-left: 0.5em
  label
    line-height: 2em
    text-align: right
  select
    font-size: 1em
.w
  display: flex
  p
    line-height: 2em
    margin-left: .5em

</style>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => {
    return {
      name: '',
      alcohol: '',
      taste: ''
    }
  },
  watch: {
    name: () => {
      console.log(`input`)
    }
  }
})
</script>

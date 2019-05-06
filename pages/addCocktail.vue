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
      #simplemde
        textarea#recipeEditor
      //- TODO やる
      .blank
      a.button(@click='confirm') 確認
</template>

<script lang="ts">
import SimpleMDE from 'simplemde'
import 'simplemde/dist/simplemde.min.css'

import Vue from 'vue'

let simplemde
export default Vue.extend({
  data: () => {
    return {
      name: '',
      alcohol: '',
      taste: '',
      material: [],
      material_list: ['カルーア コーヒー リキュール'],
      recipe: ''
    }
  },
  mounted() {
    simplemde = new SimpleMDE({
      spellChecker: false
    })
  },
  methods: {
    confirm: function () {
      this.recipe = simplemde.value() // マークダウンエディタ処理

      // console.log(`カクテル名: ${this.name}`)
      // console.log(`度数: ${this.alcohol}`)
      // console.log(`テイスト: ${this.taste}`)
      // console.log(`材料: 材料`)
      // console.log(`レシピ: ${this.recipe}`)
    }
  }
})
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'

.container
  padding: 0 1em

.inner
  margin: 0 auto
  background-color: #fff
  padding: 2em
  border-radius: 1em
h1
  font-size: 1.5rem
  font-weight: bold
form
  margin-top: 2em
  display: grid
  grid-template-columns: auto 1fr
  grid-gap: 1.5em .5em
  font-family: "游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック", "Yu Gothic", sans-serif
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
  .button
    display: block
    padding: 1em
    background-color: #fff
    color: darken($theme-color, 40)
    border: 1px solid darken($theme-color, 40)
    border-radius: .5em
    text-align: center
    width: 3em
    transition: .1s
    &:hover
      background-color: darken($theme-color, 40)
      border: 1px solid darken($theme-color, 40)
      color: #fff
</style>

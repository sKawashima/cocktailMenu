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
      #material_tag
      label レシピ
      #recipe_input
        textarea#recipeEditor
      .blank
      a.button(@click='confirm') 確認
</template>

<script lang="ts">
import SimpleMDE from 'simplemde'
import 'simplemde/dist/simplemde.min.css'
import Taggle from 'taggle'
import 'taggle/src/minimal.css'
import Vue from 'vue'
import _pull from 'lodash/pull'

let simplemde
// eslint-disable-next-line
let materialTag
let vm

export default Vue.extend({
  data: () => {
    return {
      name: '',
      alcohol: '',
      taste: '',
      materials: [],
      material_list: ['カルーア コーヒー リキュール'],
      recipe: ''
    }
  },
  mounted() {
    vm = this
    simplemde = new SimpleMDE({
      spellChecker: false
    })

    if (document.getElementById('material_tag') !== null) {
      // document.getElementById('material_tag') || 'error'部は、ライブラリがelまたはstringしか受け付けないためnull回避
      materialTag = new Taggle(document.getElementById('material_tag') || 'error', {
        onTagAdd: (e, tag) => {
          vm.addMaterial(tag)
        },
        onTagRemove: (e, tag) => {
          vm.removeMaterial(tag)
        }
      })
    }
  },
  methods: {
    confirm: () => {
      vm.recipe = simplemde.value() // マークダウンエディタ処理
      // console.log(`カクテル名: ${vm.name}`)
      // console.log(`度数: ${vm.alcohol}`)
      // console.log(`テイスト: ${vm.taste}`)
      // console.log(`材料: ${vm.materials}`)
      // console.log(`レシピ: ${vm.recipe}`)
    },
    addMaterial: (tag) => {
      vm.materials.push(tag)
    },
    removeMaterial: (tag) => {
      _pull(vm.materials, tag)
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
  #material_tag
    border: 1px solid #ccc
    padding: 3px 3px 0
</style>

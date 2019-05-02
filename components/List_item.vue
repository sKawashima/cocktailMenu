<template lang="pug">
a
  img(src='http://www.suntory.co.jp/wnb/img/cocktail/p_Kahlua_milk.gif')
  h3 {{name}}
  p {{alcohol}}度
  p {{taste}}
  p {{material}}
</template>

<script lang="ts">
import Vue from 'vue'
let vm

export default Vue.extend({
  props: {
    name: {
      type: String,
      default: 'おいしいカクテル'
    },
    alcohol: {
      type: Number,
      default: 0
    },
    taste: {
      type: String,
      default: 'おいしい'
    },
    materials: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data: () => {
    return {
      material: 'エラー'
    }
  },
  created() {
    vm = this
  },
  mounted() {
    console.log(vm)
    // console.log(Array.isArray(Array(this.materials)))
    this.material = String(vm.materials.join(', '))
  }
})
</script>

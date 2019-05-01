<template lang="pug">
a
  img(src='http://www.suntory.co.jp/wnb/img/cocktail/p_Kahlua_milk.gif')
  h3 {{name}}
  p {{alcohol}}度
  p {{taste}}
  p {{materials}}
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    name: {
      type: String,
      default: 'おいしいカクテル'
    },
    alcohol: {
      type: String,
      default: '0'
    },
    taste: {
      type: String,
      default: 'おいしい'
    },
    materials: {
      type: String,
      default: '["水"]'
    }
  },
  data: () => {
    return {
      material: 'エラー'
    }
  },
  mounted() {
    // console.log(this.materials)
    // console.log(Array.isArray(Array(this.materials)))
    // this.material = Array(this.materials).join(', ')
  }
})
</script>

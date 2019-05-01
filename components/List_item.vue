<template lang="pug">
a
  img(src='http://www.suntory.co.jp/wnb/img/cocktail/p_Kahlua_milk.gif')
  h3 {{name}}
  p {{alcohol}}度
  p 甘口
  p カルーア・コーヒー・リキュール, 牛乳
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    name: {
      type: String,
      default: '名前'
    },
    alcohol: {
      type: Number,
      default: 10
    }
  }
})
</script>

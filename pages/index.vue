<template lang='pug'>
section.container
  #list.inner
    //- h2 New
    List
</template>

<script>
import List from '~/components/List.vue'
import firebase from '~/plugins/firebase'
import 'firebase/firestore'

const db = firebase.firestore()
// const settings = { timestampsInSnapshots: true }

/**
 * @todo Vueの中にFirebaseの関数を埋めて情報をロードする
 * @body dbを登録できるように鳴ったら色々やる
 */
db.settings({})

export default {
  components: {
    List
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'

#list
  margin-top: 1em
  h2
    font-weight: bold
    font-size: 1.5rem
    margin: 0 0 1rem
    font-family: 'Yu Mincho', 'YuMincho', serif
</style>

<template lang="pug">
header.header
  p.title Cocktail Menu
  img.search(src='@/assets/mdi_search.svg')
</template>

<style lang="sass" scoped>
.header
  height: 48px
  background: #333333
  padding: 0 24px
  display: flex
  justify-content: space-between
  align-items: center

.title
  display: inline
  color: #ffffff
  font-size: 12px
</style>

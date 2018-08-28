<template>
  <div id="app">
    <router-view/>
    <FooterGuider v-show="$route.meta.showFooter"/>
  </div>
</template>
<script>
  import FooterGuider from './components/FooterGuide/FooterGuide.vue'

  import {reqAddress} from './api'
  export default {
    mounted(){
     this.$store.dispatch('getAddress')
    },
   components:{
     FooterGuider
   }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
</style>

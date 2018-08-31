<template>
  <div id="app">
    <router-view/>
    <FooterGuider v-show="$route.meta.showFooter"/>
  </div>
</template>
<script>
  import FooterGuider from './components/FooterGuide/FooterGuide.vue'
  import {reqAddress} from './api'
  import {reqShopInfo} from './api'
  import axios from 'axios'
  export default {
   async mounted(){
     this.$store.dispatch('getAddress')
     this.$store.dispatch('getUser')

     /*axios.get('/goods').then(response=>{
       console.log(response.data)
     })*/
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

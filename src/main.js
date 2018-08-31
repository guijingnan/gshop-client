import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock/mockServer'
import HeaderTop from './components/HeaderTop/HeaderTop.vue'
import {Button}  from 'mint-ui'
Vue.use(MintUI);
Vue.component('HeaderTop',HeaderTop);
Vue.component(Button.name,Button);
new Vue({
  el:'#app',
  render:h=>h(App),
  router,
  store
})

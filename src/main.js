import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import loading from './common/images/loading.gif'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock/mockServer'
import './filters'
import Split from  './components/Split/Split.vue'
import HeaderTop from './components/HeaderTop/HeaderTop.vue'
Vue.use(MintUI);
Vue.use(VueLazyload,{
  loading
})
Vue.component('HeaderTop',HeaderTop);
Vue.component('Split',Split);
new Vue({
  el:'#app',
  render:h=>h(App),
  router,
  store
})

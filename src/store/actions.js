import {
  reqAddress,
  reqCategorys,
  reqshops,
  reqUserinfo,
  reqLogout,
  reqShopGoods,
  reqShopRatings,
  reqShopInfo
} from '../api'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO
  } from './mutation-types'
import axios from 'axios'
export default {
  async getAddress({commit,state}){
    const {latitude,longitude} = state;
    const geohash=`${latitude},${longitude}`
    const result = await reqAddress(geohash);
    const address = result.data;
   commit(RECEIVE_ADDRESS,{address})
  },
  async getCategorys({commit}){
    const result = await reqCategorys()
    const categorys = result.data
    commit(RECEIVE_CATEGORYS,{categorys})
  },
  async getShops({commit,state}){
    const {latitude,longitude} = state;
    const result = await reqshops(latitude,longitude);
    console.log(result)
    const shops = result.data
    commit(RECEIVE_SHOPS,{shops})
  },
  saveUser({commit},user){
    commit(RECEIVE_USER,{user})
  },
  async getUser({commit}){
    const result = await reqUserinfo();
    const user = result.data;
    commit(RECEIVE_USER,{user})
  },
  async logout({commit}){
    const result = await reqLogout()
    if(result.code===0){
      commit(RESET_USER)
    }

  },
  async getShopGoods({commit},cb) {
    const result = await reqShopGoods();
    console.log(result)
    if(result.code===0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      cb && cb()

    }
  },

  async getShopRatings({commit}){
    const result = await reqShopRatings();
    const ratings = result.data
    commit(RECEIVE_RATINGS,{ratings})
  },
  async getShopInfo({commit}){
    const result = await reqShopInfo();
    const info = result.data
    commit(RECEIVE_INFO,{info})
  }
}

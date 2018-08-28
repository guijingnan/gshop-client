import {reqAddress,reqCategorys,reqshops} from '../api'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS} from './mutation-types'
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
    const shops = result.data
    commit(RECEIVE_SHOPS,{shops})
  }
}

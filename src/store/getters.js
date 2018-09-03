export default {
totalCount(state){
 return state.shopFoods.reduce((preTotal,food)=>preTotal + food.count
  ,0)
},
totalPrice(state){
  return state.shopFoods.reduce((preTotal,food)=>preTotal + food.count * food.price
  ,0)
  },
ratingCount(state){
  return state.ratings.length
},
positiveRating(state){
  return state.ratings.reduce((pretotal,item)=>{
    return pretotal + item.rateType===0?1:0
  },0)
},
  negativeRating(state){
    return state.ratings.reduce((pretotal,item)=>{
      return pretotal + item.rateType===1?1:0
    },0)
  }
}

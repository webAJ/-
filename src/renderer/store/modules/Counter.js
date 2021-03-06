import axios from 'axios'
const state = {
  tabs:[],
  female:[],
  TiId:'',
  Things:'',
  name:''
}

const getters = {
  // Id:function(){}
}

const mutations = {
  // 排行榜
  tabs(state,data){
    state.tabs = data
  },
  female(state,data){
    state.female = data
  },
  TiId(state,data){
    state.TiId = data
  },
  Things(state,data){
    state.Things = data
  },
  name(state,data){
    state.name = data
  }
}

const actions = {
  // 排行榜 
  ClassList({commit}){
    axios(`http://api.zhuishushenqi.com/ranking/gender`)
    .then(data =>{
      console.log(state)
      commit('tabs',data.data.male)
      commit('female',data.data.female)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

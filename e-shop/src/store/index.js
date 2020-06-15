import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

//使用vuex
Vue.use(Vuex)

//对外输出store
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

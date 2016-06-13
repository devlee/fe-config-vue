import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  countList: {},
  eventBus: new Vue()
}

const mutations = {
  CLICKONETIME (state, amount, idx) {
    state.count += amount
    state.countList[idx] = state.countList[idx] || 0
    state.countList[idx] += amount
    state.countList = { ...state.countList }
  }
}

export default new Vuex.Store({
  state,
  mutations
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  currentUser: null,
};

const getters = {
  getCurrentUser(state) {
    return state.currentUser;
  },
};

const mutations = {
  setCurrentUser(state, currentUser) {
    state.currentUser = currentUser;
  },
};

const actions = {
  setCurrentUser(context, currentUser) {
    context.commit('setCurrentUser', currentUser)
  },
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});


export default store;

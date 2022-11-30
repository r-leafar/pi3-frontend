import { createStore } from 'vuex'

export default createStore({
  state: {
    pessoa: null/* {
      "idpessoa":24
    }*/
  },
  getters: {
  },
  mutations: {
    storePessoa(state,payload){
      state.pessoa = payload;
    },
    logoffPessoa(state){
      state.pessoa = null;
    }
  },
  actions: {
  },
  modules: {
  }
})

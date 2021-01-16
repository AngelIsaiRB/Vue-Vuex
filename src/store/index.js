import { createStore } from 'vuex'

export default createStore({
  state: {
    contador : 125,

  },
  mutations: {
    incrementar(state, payload){
      state.contador += payload ;
    },
    disminuir(state, payload){
      state.contador -= payload ;
    }

  },
  actions: {
    accionIncrementar({commit}){
      commit("incrementar",10)
    },
    accionDisminuir({commit}, numero ){
      commit("disminuir", numero)
    },
    accionBoton({commit}, payload ){ //payload es un objeto
      if(payload.estado){
        commit("incrementar", payload.numero);
      }
      else{
        commit("disminuir", payload.numero);
      }
    }
  },
  modules: {
  }
})

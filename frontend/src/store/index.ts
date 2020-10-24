import { createStore } from 'vuex'

export default createStore({
  state: {
    backendUrl: "http://127.0.0.1:8000",
    token: null,
    jwtToken: null,
    refreshToken: null
  },

  mutations: {
    setToken (state, value) {
      state.token = value
    },

    setJwt (state, tokens) {
      state.jwtToken = tokens.access
      state.refreshToken = tokens.refresh
    }
  },

  actions: {
    setToken(context, value) {
      context.commit('setToken', value);
    },

    setJwt(context, value) {
      context.commit('setJwt', value)
    }
  },

  modules: {
  },

  getters: {
    getBackendUrl: state => {
      return state.backendUrl
    },

    getToken: state => {
      return state.token
    },

    getJwtToken: state => {
      return state.jwtToken
    },

    getRefreshToken: state => {
      return state.refreshToken
    },
  }
})

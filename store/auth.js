// store/auth.js
export const state = () => ({
  isAuthenticated: false,
  accessToken: null,
})


export const getters = {
  // Định nghĩa getter để lấy access token từ state
  accessToken: (state) => state.token,
}
export const mutations = {
  setAuthentication(state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated
  },
  setTokens(state, { accessToken }) {
    state.accessToken = accessToken
  },
}

export const actions = {
  login({ commit }, { accessToken }) {
    if (!accessToken) {
      return
    }
    // Set authentication status and tokens
    commit('setAuthentication', true)
    commit('setTokens', { accessToken })
  },
  logout({ commit }) {
    // Clear authentication status and tokens
    commit('setAuthentication', false)
    commit('setTokens', { accessToken: null })
  },
}

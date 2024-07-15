// store/index.js
import * as volatilityApi from '../api/volatility.js'

export const state = () => ({
  profile: null
});

export const mutations = {
  setProfile(state, profile) {
    state.profile = profile;
  }
};

export const actions = {
  async saveProfile({ commit }) {
    let profile = null;
    await volatilityApi.getProfileUser()
      .then(res => {
        profile = res.data
      })
      .catch(err => {
        console.log(err);
      })
    commit('setProfile', profile);
  },
};

export const getters = {
  getProfile(state) {
    return state.profile;
  }
};

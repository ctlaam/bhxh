// store/index.js

export const state = () => ({
  profile: null
});

export const mutations = {
  setProfile(state, profile) {
    state.profile = profile;
  }
};

export const actions = {
  async saveProfile({ commit }, profile) {
    commit('setProfile', profile);
  }
};

export const getters = {
  getProfile(state) {
    return state.profile;
  }
};

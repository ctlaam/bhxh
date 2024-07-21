// store/index.js

export const state = () => ({
  profile: null,
  vip: null,
  key: 1,
});

export const mutations = {
  setProfile(state, profile) {
    state.profile = profile;
  },
  setVip(state, payload) {
    state.vip = payload
  },
  setKey(state, payload) {
    state.key++;
  }
};

export const actions = {
  async saveProfile({ commit }, profile) {
    commit('setProfile', profile);
  },
  async saveVip({ commit }, payload) {
    commit('setVip', payload);
  }
};

export const getters = {
  getProfile(state) {
    return state.profile;
  }
};

import Vue from 'vue';
import Vuex from 'vuex';
import Characters from '../constants/Characters';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    selectedCharacter: null,
    characters: Characters
  },

  getters: {
    allCharacters: (state) => {
      return state.characters;
    },
    selectedCharacter: (state) => {
      return state.selectedCharacter;
    }
  },

  mutations: {
    selectCharacter: (state, char) => {
      state.selectedCharacter = char;
    }
  }
});

export default store;

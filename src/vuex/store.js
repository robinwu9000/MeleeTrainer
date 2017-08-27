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
    },
    unselectCharacter: (state) => {
      state.selectedCharacter = null;
    },
    toggleTechCompletion: (state, { tech, completed }) => {
      let index = state.selectedCharacter.techniques.indexOf(tech),
        selectedTech = state.selectedCharacter.techniques[index];
      selectedTech.completed = completed;
    }
  }
});

export default store;

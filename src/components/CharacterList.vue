<template>
  <div id='character-list'>
    <div class='character'
      v-for='character in characters'
      :class='{ selected: selectedCharacter === character }'
      @click='selectCharacter(character)'>
      {{ character.name }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      characters: 'allCharacters',
      selectedCharacter: 'selectedCharacter'
    })
  },

  methods: {
    selectCharacter (char) {
      this.$store.commit('selectCharacter', char);
    }
  }
}
</script>

<style scoped>
  #character-list {
    border-right: 1px solid #000;
    min-width: 150px;
    width: 200px;
  }

  .character {
    border: 1px solid #2ed51a;
    height: 50px;
    padding-left: 30px;
  }

  .character.selected {
    background-color: #a5eb9d;
  }

  .character:hover {
    background-color: #e2dcdf;
  }
</style>

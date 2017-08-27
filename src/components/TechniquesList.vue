<template lang="html">
  <div id="techniques-list">
    <div class="character-techniques" v-if="selectedCharacter">
      <div class="technique"
        v-for="technique in selectedCharacter.techniques">
        {{ `${technique.name} x${technique.reps}` }}
        <input type="checkbox"
          v-model='technique.completed'
          @click='toggleCompletion(technique)'>
      </div>
    </div>
    <div class="no-character-selected" v-else>
      Please Select a Character from the List
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      selectedCharacter: 'selectedCharacter'
    })
  },

  methods: {
    toggleCompletion (tech) {
      let checked = event.target.checked;
      this.$store.commit('toggleTechCompletion', { tech, completed: checked });
    }
  }
}
</script>

<style lang="css">
.technique {
  height: 50px;
}
</style>

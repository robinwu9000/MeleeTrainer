<template lang="html">
  <div id="techniques-list">
    <div class="character-techniques" v-if="selectedCharacter">

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
  }
}
</script>

<style lang="css">
</style>

<template>
  <div id='character-list'>
    <div class='character'
      v-for='character in characters'
      :key='character.id'>
      {{ character.name }}
    </div>
  </div>
</template>

<script>
import Characters from '../constants/Characters';

export default {
  data () {
    return {
      characters: Characters
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

  .character:hover {
    background-color: #e2dcdf;
  }
</style>

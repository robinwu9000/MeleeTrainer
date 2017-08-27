<template>
  <div id="app">
    <header-bar></header-bar>
    <character-list></character-list>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar';
import CharacterList from './components/CharacterList';

export default {
  name: 'app',
  components: {
    HeaderBar,
    CharacterList
  }
}
</script>

<style>

</style>

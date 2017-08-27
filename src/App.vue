<template>
  <div id="app">
    <header-bar></header-bar>
    <div id="main-content">
      <character-list></character-list>
      <techniques-list></techniques-list>
    </div>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar';
import CharacterList from './components/CharacterList';
import TechniquesList from './components/TechniquesList';

export default {
  name: 'app',
  components: {
    HeaderBar,
    CharacterList,
    TechniquesList
  }
}
</script>

<style>
 #main-content {
   display: flex;
 }
</style>

<template>
  <div id="header-bar">
    <div class="title">Melee Training App</div>
    <timer></timer>
  </div>
</template>

<script>
import Timer from './Timer';

export default {
  components: {
    Timer
  }
}
</script>

<style scoped>
#header-bar {
  align-items: center;
  border-bottom: 1px solid #000;
  display: flex;
}

.title {
  border-right: 1px solid #000;
  flex-grow: 1;
  font-size: 36px;
}

.timer {
  text-align: center;
  width: 15%;
}
</style>

<template>
  <div class="timer">
    {{ formattedTime() }}
    <button class='start-stop' @click='toggleTimer'>{{ running ? 'stop' : 'start' }}</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      secondsRemaining: 1800,
      running: false,
      interval: null
    }
  },

  methods: {
    formattedTime () {
      let output = "",
        minutes = Math.floor(this.secondsRemaining / 60),
        seconds = Math.floor(this.secondsRemaining % 60);

      output += minutes + ":";
      output += (seconds < 10 ? '0' : '') + seconds;

      return output;
    },
    toggleTimer () {
      this.running ? this.stop() : this.start();
      this.running = !this.running;
    },
    tick () {
      this.secondsRemaining -= 1;
      if(this.secondsRemaining < 1) {
        clearInterval(this.interval);
      }
    },
    stop () {
      clearInterval(this.interval);
    },
    start () {
      this.interval = setInterval(this.tick, 1000);
    }
  }
}
</script>

<style>
</style>

<template>
  <div class="PomodoroClock">
    <h1 class="Heading">Pomodoro Clock</h1>
    <setters></setters>
    <display :reset-on-off="resetOnOff" @reset-complete="resetComplete"></display>
    <reset @timer-reset="timerReset"></reset>
  </div>
</template>

<script>
import Setters from './Setters'
import Display from './Display'
import Reset from './Reset'

export default {
  name: 'PomodoroClock',
  data () {
    return { resetOnOff: false }
  },
  components: {
    Setters,
    Display,
    Reset
  },
  methods: {
    timerReset () {
      this.resetOnOff = true
    },
    resetComplete () {
      this.resetOnOff = false
    }
  }
}
</script>

<style scoped>
.PomodoroClock {
  width: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: silver;
  padding: 1rem 0 1rem 0;
  border-radius: 0.4rem;
}
.PomodoroClock .Heading {
  margin: 2rem 0;
  font-size: 2rem;
  font-weight: 300;
  color: snow;
}
</style>

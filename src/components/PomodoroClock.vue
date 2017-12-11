<template>
  <div class="PomodoroClock">
    <setters></setters>
    <display></display>
  </div>
</template>

<script>
import Setters from './Setters'
import Display from './Display'

export default {
  name: 'PomodoroClock',
  components: {
    Setters,
    Display
  }
}
</script>

<style>
</style>

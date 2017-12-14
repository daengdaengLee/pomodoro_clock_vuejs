<template>
  <div class="Reset" @click="timerReset">
    Reset
  </div>
</template>

<script>
export default {
  name: 'Reset',
  methods: {
    timerReset () {
      this.$emit('timer-reset')
    }
  }
}
</script>

<style scoped>
.Reset {
  box-sizing: border-box;
  width: 16rem;
  height: 48px;
  border: 1px solid white;
  border-radius: 0.4rem;
  font-size: 1.5rem;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  color: snow;
}
.Reset:hover {
  cursor: pointer;
  background-color: white;
  color: black;
}
</style>

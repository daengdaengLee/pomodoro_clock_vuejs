<template>
  <div class="Display Session">
    <div class="State">
      {{ state }}
    </div>
    <div class="Timer">
      {{ timer }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Display',
  props: {
    session: {
      type: Number,
      default () { return 25 }
    },
    break: {
      type: Number,
      default () { return 5 }
    }
  },
  created () {
    this.state = 'Session'
    this.timer = this.session
  }
}
</script>

<style scoped>
.Display {
  width: 25rem;
  height: 6rem;
  border-radius: 0.4rem;
  margin: 1rem 0;
  color: snow;
  font-size: 1.5rem;
  font-weight: 300;
}
.Display:hover {
  cursor: pointer;
}
.Session {
  background-color: springgreen;
}
.Break {
  background-color: tomato;
}
.Display .State {
  height: 50%;
  border-bottom: 0.5px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.Display .Timer {
  height: 50%;
  border-top: 0.5px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <div class="Display Session" @click="timerClick">
    <div class="State">
      {{ state }}
    </div>
    <div class="Timer">
      {{ timer }}, {{ timerOnOff }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import _ from 'lodash'

export default {
  name: 'Display',
  data () {
    return {
      state: 'Session',
      timerCount: 0,
      timerOnOff: false
    }
  },
  computed: _.extend(
    {
      timer () {
        if (this.state === 'Session') {
          return this.sessionLength - this.timerCount
        }
      }
    },
    mapState(['breakLength', 'sessionLength'])
  ),
  methods: {
    timerClick () {
      this.timerOnOff = !this.timerOnOff
    }
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

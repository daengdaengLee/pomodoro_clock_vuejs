<template>
  <div class="Display" @click="timerClick" :class="classState">
    <div class="State">
      {{ state }}
    </div>
    <div class="Timer">
      {{ timer }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import _ from 'lodash'

export default {
  name: 'Display',
  props: {
    resetOnOff: {
      type: Boolean,
      default () { return false }
    }
  },
  data () {
    return {
      state: 'Session',
      timerCount: 0,
      timerOnOff: false,
      timerId: null
    }
  },
  computed: _.extend(
    {
      totalSessionSecs () {
        return this.sessionLength * 60
      },
      totalBreakSecs () {
        return this.breakLength * 60
      },
      timer () {
        if (this.state === 'Session') {
          return this.calculateTimer(this.totalSessionSecs, this.timerCount)
        } else if (this.state === 'Break') {
          return this.calculateTimer(this.totalBreakSecs, this.timerCount)
        }
      },
      classState () {
        return {
          Session: this.state === 'Session',
          Break: this.state === 'Break'
        }
      }
    },
    mapState(['breakLength', 'sessionLength'])
  ),
  watch: {
    resetOnOff (bool) {
      if (bool) {
        if (this.timerId) {
          clearInterval(this.timerId)
        }
        this.timerOnOff = false
        this.state = 'Session'
        this.timerCount = 0
        this.$emit('reset-complete')
      }
    }
  },
  methods: {
    timerClick () {
      this.timerOnOff = !this.timerOnOff
      if (this.timerOnOff) {
      // 타이머 작동
        this.timerId = setInterval(() => {
          if ((this.state === 'Session') && (this.totalSessionSecs === this.timerCount)) {
            this.state = 'Break'
            this.timerCount = -1
          }
          if ((this.state === 'Break') && (this.totalBreakSecs === this.timerCount)) {
            this.state = 'Session'
            this.timerCount = -1
          }
          this.timerCount += 1
        }, 1000)
      } else {
      // 타이머 중지
        clearInterval(this.timerId)
        this.timerId = null
      }
    },
    calculateTimer (total, count) {
      const remainTotalSecs = total - count
      const remainMin = Math.floor(remainTotalSecs / 60)
      const remainSecs = remainTotalSecs - (remainMin * 60)
      let remainMinString
      switch (remainMin) {
        case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9:
          remainMinString = '0' + String(remainMin)
          break
        default:
          remainMinString = String(remainMin)
      }
      let remainSecsString
      switch (remainSecs) {
        case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9:
          remainSecsString = '0' + String(remainSecs)
          break
        default:
          remainSecsString = String(remainSecs)
      }
      return `${remainMinString} : ${remainSecsString}`
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

<template>
  <div class="Setter">
    <p class="Center Display">{{ setterName }} : {{ displayNum }}</p>
    <p class="Center Button MinusButton" @click="minus(); timeChange()">
      -
    </p>
    <p class="Center Button PlusButton" @click="plus(); timeChange()">
      +
    </p>
  </div>
</template>

<script>
export default {
  name: 'Setter',
  data () {
    return {
      timerNum: 0
    }
  },
  props: {
    initNum: {
      type: Number,
      default () { return 10 }
    },
    setterName: {
      type: String,
      default () { return 'Setter' }
    }
  },
  computed: {
    displayNum () {
      if (this.timerNum > 0) {
        return this.timerNum
      }
      return 1
    }
  },
  methods: {
    plus () {
      this.timerNum += 1
    },
    minus () {
      this.timerNum -= 1
    },
    timeChange () {
      this.$emit('time-change', { setterName: this.setterName, displayNum: this.displayNum })
    }
  },
  created () {
    this.timerNum = this.initNum
  }
}
</script>

<style scoped>
.Setter {
  background-color: powderblue;
  width: 16rem;
  border-radius: 0.4rem;
  color: snow;
  height: 2rem;
  font-size: 1.2rem;
  font-weight: 300;
  display: flex;
}
.Setter .Center {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.Setter .Display {
  box-sizing: border-box;
  border-right: 1px solid white;
  height: 100%;
  width: 70%;
}
.Setter .Button {
  box-sizing: border-box;
  height: 100%;
  width: 15%;
  font-size: 1.8rem;
}
.Setter .MinusButton {
  box-sizing: border-box;
  border-right: 1px solid white;
}
.Setter .MinusButton:hover {
  cursor: pointer;
  background-color: tomato;
}
.Setter .PlusButton {
  box-sizing: border-box;
}
.Setter .PlusButton:hover {
  cursor: pointer;
  background-color: springgreen;
}
</style>

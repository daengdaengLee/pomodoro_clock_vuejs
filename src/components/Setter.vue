<template>
  <div class="Setter">
    <p class="Display">{{ setterName }} : {{ displayNum }}</p>
    <div class="Buttons">
      <div class="MinusButton" @click="minus(); timeChange()">
        -
      </div>
      <div class="PlusButton" @click="plus(); timeChange()">
        +
      </div>
    </div>
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
  width: 12rem;
  border-radius: 0.4rem;
  color: snow;
}
.Setter .Display {
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 300;
  cursor: default;
}
.Setter .Buttons {
  display: flex;
  border-top: 1px solid white;
  height: 2rem;
  font-size: 1.8rem;
  font-weight: 300;
}
.Setter .Buttons .MinusButton {
  border-right: 0.5px solid white;
  width: 50%;
  height: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.Setter .Buttons .MinusButton:hover {
  cursor: pointer;
  background-color: tomato;
  border-bottom-left-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
}
.Setter .Buttons .PlusButton {
  border-left: 0.5px solid white;
  width: 50%;
  height: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.Setter .Buttons .PlusButton:hover {
  cursor: pointer;
  background-color: springgreen;
  border-bottom-left-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
}
</style>

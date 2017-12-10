<template>
  <div class="Setter">
    <p>{{ setterName }}</p>
    <div class="NumDisplay">{{ displayNum }}</div>
    <div class="Buttons">
      <div class="MinusButton" @click="minus">
        -
      </div>
      <div class="PlusButton" @click="plus">
        +
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Setter',
  props: {
    displayNum: {
      type: Number,
      default () { return 0 }
    },
    setterName: {
      type: String,
      default () { return 'Setter' }
    }
  },
  methods: {
    plus () {
      this.displayNum += 1
    },
    minus () {
      this.displayNum -= 1
    }
  }
}
</script>

<style scoped>
</style>

<template>
  <div class="Setters">
    <setter
      :setterName="'Break length'"
      :displayNum="5"
    >
    </setter>
    <setter
      :setterName="'Session length'"
      :displayNum="25"
    >
    </setter>
  </div>
</template>

<script>
import Setter from './Setter'

export default {
  name: 'Setters',
  components: {
    Setter
  }
}
</script>

<style scoped>
</style>

<template>
  <div class="Setters">
    <setter
      :setter-name="'Break length'"
      :init-num="5"
    >
    </setter>
    <setter
      :setter-name="'Session length'"
      :init-num="25"
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
.Setters {
  display: flex;
  width: 25rem;
  justify-content: space-between;
}
</style>

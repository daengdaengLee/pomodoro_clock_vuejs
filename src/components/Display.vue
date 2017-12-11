<template>
  <div class="Display Session">
    <div class="State">
      {{ "'Session'" }}
    </div>
    <div class="Timer">
      {{ sessionLength }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Display',
  computed: mapState(['breakLength', 'sessionLength'])
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

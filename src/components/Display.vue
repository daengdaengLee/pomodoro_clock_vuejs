<template>
  <div class="Display Session">
    <div class="State">

    </div>
    <div class="Timer">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Display'
}
</script>

<style scoped>
.Display {
  width: 25rem;
  height: 6rem;
  border-radius: 0.4rem;
  margin: 1rem 0;
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
}
.Display .Timer {
  height: 50%;
  border-top: 0.5px solid white;
}
</style>

<template>
  <div class="Setters">
    <setter
      :setter-name="'Break length'"
      :init-num="breakLength"
      @time-change="timeChange"
    >
    </setter>
    <setter
      :setter-name="'Session length'"
      :init-num="sessionLength"
      @time-change="timeChange"
    >
    </setter>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Setter from './Setter'
import Constant from '../Constant'

export default {
  name: 'Setters',
  computed: mapState(['breakLength', 'sessionLength']),
  components: {
    Setter
  },
  methods: mapActions({ timeChange: Constant('TIME_CHANGE') })
}
</script>

<style scoped>
.Setters {
  display: flex;
  width: 25rem;
  justify-content: space-between;
}
</style>

<template>
  <div class="container">
    <index></index>
  </div>
</template>

<script>
import index from './views/index.vue'
export default {
  data () {
    return {
      
    }
  },

  components: {
    index
  },

  computed: {},

  methods: {}
}

</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}
.container{
  width: 100vw;
  height: 100vh;
  background: url('./statics/background.png');
  background-repeat: no-repeat;
  background-size: contain;
  /* -webkit-background-size: 100vw 100vh;
  -o-background-size: 100vw 100vh; */
  background-position: center 0;
}

</style>
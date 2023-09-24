<template>
  <router-view />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  height: 100%;
  /* margin-top: 60px; */
}
html,
body,
h3,
p{
  margin: 0;
  padding: 0
}

</style>

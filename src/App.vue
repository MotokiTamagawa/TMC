<template>
  <div class="app">
    <HeaderView/>
    <div class="router-view">
      <router-view />
    </div>
    <FooterView/>
  </div>
</template>


<script lang="js">

import HeaderView from './components/HeaderView.vue'

import FooterView from './components/FooterView.vue'

export default {
  components: {
    HeaderView,
    FooterView
  },
}




</script>

<style scoped>

.app {
  background-color: #f2f2e9;
  font-family: sans-serif;
  margin: 0;
  padding: 0;
}


.router-view {
  margin: 0;
  padding: 0;
}


</style>
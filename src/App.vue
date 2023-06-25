<template>
  <div class="app">
    <div class="header">
      <HeaderView/>
    </div>
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
  background-color: #ebeae9;
  font-family: sans-serif;
  margin: 0 auto;
  padding: 0;
  text-decoration: none;
  color: black;
}

.header {
  width: 100%;
}

.router-view {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0;
}

@media screen and (max-width: 959px) {
	/* 959px以下に適用されるCSS（タブレット用） */
}

@media screen and (max-width: 480px) {
	/* 480px以下に適用されるCSS（スマホ用） */

  .router-view {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 0;
  }

}


</style>
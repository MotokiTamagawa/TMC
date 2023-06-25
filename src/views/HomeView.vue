<template>

  <div class="home-container">
    <TopView/>
    <FieldView/>
    <IntroductionView/>
    <CorporateView/>
    <ContactContents/>
  </div>

</template>


<script lang="js">

import TopView from '../components/TopView.vue'
import FieldView from '../components/FieldView.vue';
import IntroductionView from '../components/IntroductionView.vue'
import CorporateView from '../components/CorporateView.vue';
import ContactContents from '../components/ContactContents.vue'

import FadeIn from '../components/FieldView.vue'


export default {
  components: {
    TopView,
    FieldView,
    IntroductionView,
    CorporateView,
    ContactContents,
    FadeIn
},
  // data () {
  //   return {

  //   };
  // },
}

</script>

<style scoped>

.home-container {
  max-width: 1000px;
  padding-top: 80px;
  margin: auto;
}

@media screen and (max-width: 959px) {
	/* 959px以下に適用されるCSS（タブレット用） */
}

@media screen and (max-width: 480px) {
	/* 480px以下に適用されるCSS（スマホ用） */
}




</style>
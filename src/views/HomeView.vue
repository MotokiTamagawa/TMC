<template>

  <div class="home-container">
    <TopView/>
    <FieldView/>
    <CorporateView/>


    <div>当事務所について（ABOUT OFFICE）</div>

    <div>トップコンテンツ</div>
    <div>新規事業</div>
    <div>司法書士紹介</div>


  </div>


</template>


<script lang="js">

import TopView from '../components/TopView.vue'
import FieldView from '../components/FieldView.vue';
import CorporateView from '../components/CorporateView.vue';




export default {
  components: {
    TopView,
    FieldView,
    CorporateView

},
  // data () {
  //   return {

  //   };
  // },
}

</script>

<style scoped>

.home-container {
  /* background-color: rgb(0, 240, 32); */
}




</style>
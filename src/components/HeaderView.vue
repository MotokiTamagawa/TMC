<template>

  <div class="header-container">

    <div class="header-contents">

      <div class="header-left" @click="Top">
        行政書士 寺町久徳事務所
        <div class="heade-en">TERAMACHI HISANORI ADMINISTRATIVE SCRIVENER OFFICE</div>
      </div>

      <div class="header-right">

        <router-link class="header-right-content" style="color: black;" to="/#field" v-scroll-to="{
            el:'#field',
            duration: 800,
            lazy: false,
        }">
          <div class="en">FIELD</div>
          <div class="jp">事業内容</div>
        </router-link>

          <div class="header-right-content" v-scroll-to="{
            el:'#introduction',
            duration: 800,
            lazy: false,
          }">
            <div class="en">INTRODUCTION </div>
            <div class="jp">司法書士紹介</div>
          </div>

        <div class="header-right-content" v-scroll-to="{
             el:'#corporate',
            duration: 800,
            lazy: false,
        }">
          <div class="en">CORPORATE</div>
          <div class="jp">事務所概要</div>
        </div>

        <div class="header-right-content" v-scroll-to="{
            el:'#contact',
            duration: 800,
            lazy: false,
        }">
          <div class="en">CONTACT</div>
          <div class="jp">お問い合わせ</div>
        </div>
      </div>
    </div>

  </div>
</template>


<script lang="js">
import router from '../router';


export default {
    methods: {
      Top() {
          this.$router.push({path:'/'});
          this.$router.go();
        }
    },
    components: { router }
};

</script>



<style scoped>

.header-container {
  padding: 30px 20px;
  background-color: #ebeae9;
  color:  rgb(0, 0, 0);
  font-weight: bold;
  height: 50px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.9;
  z-index: 999;
  width: 1000px;
}

.header-contents {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  margin: auto;
}


.header-left {
  text-align: left;
  font-size: 22px;
  font-family:serif;
  text-align: center;
  cursor: pointer;
}

.header-left:hover {
  text-align: left;
  font-size: 22px;
  font-family:serif;
  text-align: center;
  cursor: pointer;
  color: rgb(99, 99, 99);
}



.heade-en {
 font-size: 8px;
}

.header-right {
  display: flex;
  justify-content: center;
  align-items: space-between;
  font-family:serif;
}

.header-right-content {
  padding: 0px 20px;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
}

.header-right-content:hover {
  padding: 0px 20px;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  color: rgb(99, 99, 99);
}


.en {
  font-size: 16px;
}

.jp {
  font-size: 12px;
}

</style>
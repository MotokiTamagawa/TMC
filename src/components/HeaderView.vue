<template>

  <div class="header-container">
    <!-- PC -->
    <div class="header-contents">

      <div class="header-left" @click="Top">
        行政書士 寺町久徳事務所
        <div class="heade-en">TERAMACHI HISANORI ADMINISTRATIVE SCRIVENER OFFICE</div>
      </div>

      <div class="header-right" @click="scrollFlagChange()">

        <router-link class="header-right-content" to="/#field" v-scroll-to="{
            el:'#field',
            duration: 800,
            lazy: false,
        }">
          <div class="en">FIELD</div>
          <div class="jp">事業内容</div>
        </router-link>

        <router-link  class="header-right-content" to="/#introduction" v-scroll-to="{
          el:'#introduction',
          duration: 800,
          lazy: false,
        }">
          <div class="en">INTRODUCTION </div>
          <div class="jp">行政書士紹介</div>
        </router-link>

        <router-link class="header-right-content" to="/#corporate" v-scroll-to="{
             el:'#corporate',
            duration: 800,
            lazy: false,
        }">
          <div class="en">CORPORATE</div>
          <div class="jp">事務所概要</div>
        </router-link>

        <router-link class="header-right-content" to="/#contact" v-scroll-to="{
            el:'#contact',
            duration: 800,
            lazy: false,
        }">
          <div class="en">CONTACT</div>
          <div class="jp">お問い合わせ</div>
        </router-link>

      </div>
    </div>

    <!-- SP -->
    <div class="sp-header-contents">

      <div class="sp-header-left" @click="Top">
        <div class="top-title">行政書士 寺町久徳事務所</div>
        <div class="sp-heade-en">TERAMACHI HISANORI ADMINISTRATIVE SCRIVENER OFFICE</div>
      </div>

      <div class="sp-header-right">

        <div class="hamburger_btn" v-on:click='ActiveBtn=!ActiveBtn'>
          <span class="line line_01" v-bind:class="{'btn_line01':ActiveBtn}"></span>
          <span class="line line_02" v-bind:class="{'btn_line02':ActiveBtn}"></span>
          <span class="line line_03" v-bind:class="{'btn_line03':ActiveBtn}"></span>
        </div>

      </div>
          <!--サイドバー-->
          <transition name="menu">
            <div class="menu" v-show="ActiveBtn">
                <ul  @click="scrollFlagChange()">
                  <hr>
                  <li @click='ActiveBtn=!ActiveBtn'>
                    <router-link class="sp-header-menu" style="color: black;" to="/#field" v-scroll-to="{
                        el:'#field',
                        duration: 800,
                        lazy: false,
                    }">
                      <div class="sp-menu-en">FIELD</div>
                      <div class="sp-menu-jp">事業内容</div>
                    </router-link>
                  </li>
                  <hr>

                  <li @click='ActiveBtn=!ActiveBtn'>
                    <router-link class="sp-header-menu"  style="color: black;" to="/#introduction" v-scroll-to="{
                      el:'#introduction',
                      duration: 800,
                      lazy: false,
                    }">
                      <div class="sp-menu-en">INTRODUCTION </div>
                      <div class="sp-menu-jp">行政書士紹介</div>
                    </router-link>
                  </li>
                  <hr>

                  <li @click='ActiveBtn=!ActiveBtn'>
                    <router-link class="sp-header-menu"  style="color: black;" to="/#corporate" v-scroll-to="{
                        el:'#corporate',
                        duration: 800,
                        lazy: false,
                    }">
                      <div class="sp-menu-en">CORPORATE</div>
                      <div class="sp-menu-jp">事務所概要</div>
                    </router-link>
                  </li>

                  <hr>

                  <li  @click='ActiveBtn=!ActiveBtn'>
                    <router-link class="sp-header-menu"  style="color: black;" to="/#contact" v-scroll-to="{
                        el:'#contact',
                        duration: 800,
                        lazy: false,
                    }">
                      <div class="sp-menu-en">CONTACT</div>
                      <div class="sp-menu-jp">お問い合わせ</div>
                    </router-link>
                  </li>
                  <hr>
                  <li  @click='ActiveBtn=!ActiveBtn'>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                  </li>
                </ul>
            </div>
          </transition>

    </div>



  </div>
</template>

<script lang="js">

export default {
  components: {

  },
  data() {
    return {
      ActiveBtn: false,
    }
  },
  computed: {
  },
  methods: {
    Top() {
        this.$router.push({path:'/'});
        this.$router.go();
      },
      scrollFlagChange() {
        // console.log('フラグ変える');

        this.$store.dispatch('chengeScrollFlag');

        // console.log(this.$store.getters.getScrollFlag);
      },
    },
    ActiveBtnClose(){
      this.ActiveBtn = false;
    },
};

</script>



<style scoped>

.header-container {
  padding: 20px 20px;
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

/* SP打ち消し */
.sp-header-contents {
  display: none;
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
  color: rgb(133, 133, 133);
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

.header-right a {
  text-decoration: none;
  color: black;
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
  color: rgb(133, 133, 133);
}


.en {
  font-size: 16px;
}

.jp {
  font-size: 12px;
}


@media screen and (max-width: 800px) {
	/* 480px以下に適用されるCSS（スマホ用） */
  .header-container {
    padding: 20px 20px;
    background-color: #ebeae9;
    color:  rgb(0, 0, 0);
    font-weight: bold;
    height: 30px;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.9;
    z-index: 999;
    width: 100%;
  }

  /* PC打ち消し */
  .header-contents {
    display: none;
    padding: 0px 20px;
  }

  .sp-header-contents {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sp-header-left {
    font-family:serif;
    text-align: center;
    cursor: pointer;
    z-index: 9000;
  }

  .top-title {
    font-size: 17px;
  }

  .sp-heade-en {
    font-size: 8px;
    display: block;
    transform: scale(0.8);
  }

  .sp-header-right {

  }


  /* ハンバーガー */
  .hamburger_btn {
    position: fixed;
    top: 10px;
    right: 7%;
    width: 60px;
    height: 62px;
    cursor: pointer;
    z-index: 9999;
  }

  .hamburger_btn .line {
    position: absolute;
    top: 0;
    left: 20px;
    width: 32px;
    height: 2px;
    background: #000000;
    text-align: center;
  }

  .hamburger_btn .line_01 {
    top: 16px;
    transition: 0.4s ease;
    z-index: 9999;

  }
  .hamburger_btn .line_02 {
    top: 26px;
    transition: 0.4s ease;
    z-index: 9999;
  }
  .hamburger_btn .line_03 {
    top: 36px;
    transition: 0.4s ease;
    z-index: 9999;
  }

  .btn_line01 {
    transform: translateY(10px) rotate(-45deg);
    transition: 0.4s ease;
    z-index: 99999;

  }
  .btn_line02 {
    transition: 0.4s ease;
    opacity: 0;
    z-index: 9999;
    color: #fff;
  }
  .btn_line03 {
    transform: translateY(-10px) rotate(45deg);
    transition: 0.4s ease;
    z-index: 9999;
    color: #fff;
  }

  /*サイドバー*/
  .menu-enter-active, .menu-leave-active {
    transition: opacity 0.5s;
  }
  .menu-enter, .menu-leave-to {
    opacity: 0.1;
  }
  .menu-leave, .menu-enter-to{
    opacity: 1;
  }

  .menu li {
    list-style: none;
    /* line-height: 40px; */
    padding: 20px 0px;
    background-color: rgb(255, 255, 255);
  }
  .menu {
    background-color: rgb(255, 255, 255);
    z-index: 999;
    /* padding: 2rem 1rem; */
    position: fixed;
    width: 100%;
    height: 80rem;
    padding-top: 80px;
    top: 0;
    right: 0;
  }
  .menu a {
    color: rgb(255, 255, 255);
    text-decoration: none;
    font-size: 1.2rem;
    padding: 20px 0px;
  }
  .menu ul{
    margin: 1rem 0px;
    padding: 0;
  }

  .sp-header-menu {
    text-align: center;
    font-family:serif;
    font-weight: bold;
  }

  .sp-menu-en {
    font-size: 23px;
    background-color: rgb(255, 255, 255);
  }

  .sp-menu-jp {
    font-size: 20px;
    background-color: rgb(255, 255, 255);
  }

  hr {
    margin: 0;
  }

}


</style>
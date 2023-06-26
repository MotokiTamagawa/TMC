<template>
  <div class="introduction-container" id="introduction">

    <div class="contents-title-container">
      <div class="contents-title">INTRODUCTION</div>
      <span class="sub-title">行政書士紹介</span>
      <hr>
    </div>

    <div class="top-name">行政書士：寺町久徳</div>

    <div class='introduction-section' :class="{fadeIn:visible}" v-show="visible">

      <div class="picture-wrapper">
        <img src="src/assets/images/IMG_0714.jpg" class="picture-detail">
      </div>

      <div class="greeting-container">
        <div class="greeting-title">【ご挨拶】</div>
        行政書士寺町久徳事務所の寺町です。<br>
        日本も高齢化社会を迎え、相続手続き、空家・農地等不動産の処分、成年後見制度の必要性など、ご家族に関する悩みも多種多様になりました。<br>
        小職は遺言・成年後見制度の相談から、相続開始後の財産調査・遺産分割協議書作成など幅広く相続関係の相談に対応してきました。<br>
        また、兼業で不動産業の登録もありますので、不動産の処分についても対応することができますし、墓じまい等の助言・紹介なども必要に合わせて対応可能です。<br>
        これら相続に関しては、被相続人・相続人の皆様が現在から将来に向けて安心して相続手続きができるように努めてまいります。<br>
        また、建設業・産業廃棄物の許可申請や、一般的な各種申請・書類作成なども幅広くサポートさせて頂きます。<br><br>

        <div class="name">寺町拝</div>
      </div>
    </div>

  </div>
</template>

<script lang="js">

export default {
  data() {
    return{
      visible:false,
      scrollFlag:null
    }
  },
  watch:{
    '$store.state.scrollFlag'(scrollFlag) {
      if (scrollFlag == false) {
        console.log(scrollFlag);
        this.visible=true;
      }
    }
  },
  created() {
     window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);

  },
  methods: {

    handleScroll() {

      if (this.visible == false) {
        if (window.innerWidth <= 800) {
          // スマートフォンの処理
          if (!this.visible && window.scrollY > 1830) {
            this.visible = true;
          }
        } else {
          // PC
          if (!this.visible && window.scrollY > 2600) {
            this.visible = true;
          }
        }
      }


},
  }
}



</script>

<style scoped>

.introduction-container {
  padding-top: 100px;
  padding-bottom: 50px;
  text-align: center;
  margin: 10px;
  font-family:serif;
}

.contents-title-container {
  padding-bottom: 50px;
}

.field-contents {
  padding-bottom: 50px;
}

.contents-title {
  font-size: 30px;
  font-weight: bold;
}


.sub-title {
  font-size: 20px;
  font-weight: bold;
}

.contents-title-container hr {
  width: 30px;
  font-weight: bold;
  color:black;
}

.top-name {
  font-size: 18px;
  font-weight: bold;
}

.introduction-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
}

.picture-wrapper {
  width: 500px;
}

.picture-detail {
  width: 80%;
}

.greeting-container {
  width: 500px;
  text-align: left;
  line-height: 28px;
  font-size: 17px;
}

.greeting-title {
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  padding-bottom: 5px;
}

.name {
  text-align: right;
}

/* フェードイン */
.fadeIn {
  animation: fadeIn 1s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(300px);
    transition-duration:.9s;
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
    transition-duration:.7s;
  }
}


@media screen and (max-width: 800px) {
	/* 480px以下に適用されるCSS（スマホ用） */

  .introduction-container {
    padding-top: 100px;
    padding-bottom: 50px;
    text-align: center;
    margin: 10px;
    font-family:serif;
  }

  .contents-title-container {
    padding-bottom: 30px;
  }

  .contents-title {
    font-size: 30px;
    font-weight: bold;
  }

  .sub-title {
    font-size: 20px;
    font-weight: bold;
  }

  .contents-title-container hr {
    width: 30px;
    font-weight: bold;
    color:black;
  }

  .top-name {
    font-size: 18px;
    font-weight: bold;
  }

  .introduction-section {
    display: block;
    justify-content: center;
    align-items: center;
  }

  .picture-wrapper {
    width: 100%;
  }

  .greeting-container {
    padding-top: 10px;
    width: 90%;
    margin: auto;
    text-align: left;
    line-height: 23px;
    font-size: 15px;
  }

  .greeting-title {
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    padding-bottom: 3px;
  }

  .name {
    text-align: right;
  }

}



</style>
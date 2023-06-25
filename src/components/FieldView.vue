<template>
  <div class="field-container">

    <div class="contents-title-container" id="field">
      <div class="contents-title">FIELD</div>
      <span class="sub-title">事業内容</span>
      <hr>
    </div>

    <div class="field-contents">

      <div class="field-content" :class="{fadeIn:visible}" v-show="visible">
        <div class="content-title">
          相続関係
          <p>相続関係説明図作成、遺産分割協議書作成、遺言書の起案・作成など</p>
          <p>(一社)コスモス成年後見サポートセンター会員</p>
        </div>

        <div class="content-image">
          <img src="../assets/images/inheritance.jpg" class="content-image-detail">
        </div>
      </div>

      <div class="field-content" :class="{fadeIn1:visible1}" v-show="visible1">
        <div class="content-image">
          <img src="../assets/images/land.jpg" class="content-image-detail">
        </div>

        <div class="content-title">
          土地関係
          <p>農地転用申請、開発許可申請など</p>
        </div>
      </div>

      <div class="field-content" :class="{fadeIn2:visible2}" v-show="visible2">
        <div class="content-title">
          建設業関係
          <p>建設許可申請、競争入札参加資格審査申請（指名願い）など</p>
        </div>
        <div class="content-image">
          <img src="../assets/images/construction.jpg" class="content-image-detail">
        </div>
      </div>

      <div class="field-content" :class="{fadeIn3:visible3}" v-show="visible3">
        <div class="content-image">
          <img src="../assets/images/foreigner.jpg" class="content-image-detail">
        </div>
        <div class="content-title">
          外国人関係
          <p>当職は申請取次行政書士として届出をしております。<br>
          (申請人ご本人様の入国管理局への出頭が免除されます。)</p>
        </div>
      </div>
    </div>


    <div class="sp-field-contents">
      <div class="sp-field-content" :class="{fadeIn:visible}" v-show="visible">
        <hr>
        <div class="sp-content-title">
          相続関係
        </div>
        <div class="sp-content-image">
          <img src="../assets/images/inheritance.jpg" class="sp-content-image-detail">
        </div>
        <p>相続関係説明図作成、遺産分割協議書作成、<br>遺言書の起案・作成など</p>
        <p>(一社)コスモス成年後見サポートセンター会員</p>
      </div>


      <div class="sp-field-content" :class="{fadeIn1:visible1}" v-show="visible1">
        <hr>
        <div class="sp-content-title">
          土地関係
        </div>
        <div class="sp-content-image">
          <img src="../assets/images/land.jpg" class="sp-content-image-detail">
        </div>
        <p>農地転用申請、開発許可申請など</p>
      </div>


      <div class="sp-field-content" :class="{fadeIn2:visible2}" v-show="visible2">
        <hr>
        <div class="sp-content-title">
          建設業関係
        </div>
        <div class="sp-content-image">
          <img src="../assets/images/construction.jpg" class="sp-content-image-detail">
        </div>
        <p>建設許可申請、競争入札参加資格審査申請<br>（指名願い）など</p>
      </div>


      <div class="sp-field-content" :class="{fadeIn3:visible3}" v-show="visible3">
        <hr>
        <div class="sp-content-title">
          外国人関係
        </div>
        <div class="sp-content-image">
          <img src="../assets/images/foreigner.jpg" class="sp-content-image-detail">
        </div>

        <p>当職は申請取次行政書士として届出をしております。<br>
          (申請人ご本人様の入国管理局への出頭が免除されます。)</p>
          <hr>
      </div>


    </div>

    <div class="attention-wrapper" :class="{fadeIn4:visible4}" v-show="visible4">
      その他、<span>『産業廃棄物関係（産業廃棄物収集運搬許可申請など）』</span><br>
      <span>『会社設立など各種申請（設立手続き、営業許可申請、内容証明作成、契約書作成）』</span>なども取り扱っております。<br>
      行政書士には守秘義務がございますので、ご安心してお気軽にご相談ください。
    </div>

  </div>
</template>



<script lang="js">

export default {
  data() {
    return{
      visible:false,
      visible1:false,
      visible2:false,
      visible3:false,
      visible4:false,
    }
  },
  created() {
      window.addEventListener("scroll", this.handleScroll);
      window.addEventListener("scroll", this.handleScroll1);
      window.addEventListener("scroll", this.handleScroll2);
      window.addEventListener("scroll", this.handleScroll3);
      window.addEventListener("scroll", this.handleScroll4);
    },
    destroyed() {
      window.removeEventListener("scroll", this.handleScroll);
      window.removeEventListener("scroll", this.handleScroll1);
      window.removeEventListener("scroll", this.handleScroll2);
      window.removeEventListener("scroll", this.handleScroll3);
      window.removeEventListener("scroll", this.handleScroll4);
    },
  watch: {

    '$store.state.scrollFlag'(scrollFlag) {
      if (scrollFlag == false) {
        console.log(scrollFlag);
        this.visible=true;
        this.visible1=true;
        this.visible2=true;
        this.visible3=true;
        this.visible4=true;
      }
    },

    scroll() {

      let hash = this.$router.hash;
      console.log(hash);

      if (hash == 'field') {
        this.$router.push('./#field')
      }

    },
  },
  computed: {
  },
  methods: {
    handleScroll() {

      if (this.visible == false) {

        if (window.innerWidth <= 800) {
          // スマートフォンの処理
          if (!this.visible && window.scrollY > 150) {
            this.visible = true;
          }
        } else {
          // PC
          if (!this.visible && window.scrollY > 500) {
            this.visible = true;
          }
        }

      }

  },
  handleScroll1() {
    if (this.visible1 == false){

      if (window.innerWidth <= 800) {
          // スマートフォンの処理
          if (!this.visible1 && window.scrollY > 450) {
            this.visible1 = true;
          }
        } else {
          // PC
          if (!this.visible1 && window.scrollY > 900) {
            this.visible1 = true;
          }
      }

    }


  },
  handleScroll2() {

    if (this.visible2 == false) {

      if (window.innerWidth <= 800) {
          // スマートフォンの処理
          if (!this.visible2 && window.scrollY > 750) {
            this.visible2 = true;
          }
        } else {
          // PC
          if (!this.visible2 && window.scrollY > 1300) {
            this.visible2 = true;
          }
      }
    }



  },
  handleScroll3() {

    if (this.visible3 == false) {
      if (window.innerWidth <= 800) {
          // スマートフォンの処理
          if (!this.visible3 && window.scrollY > 1150) {
            this.visible3 = true;
          }
        } else {
          // PC
          if (!this.visible3 && window.scrollY > 1700) {
            this.visible3 = true;
          }
      }
    }

  },

  handleScroll4() {

    if (this.visible4 == false) {
      if (window.innerWidth <= 800) {
        // スマートフォンの処理
        if (!this.visible4 && window.scrollY > 1450) {
          this.visible4 = true;
        }

      }else {
        // PC
        if (!this.visible4 && window.scrollY > 2100) {
          this.visible4 = true;
        }
      }
    }
  }
  }
}

</script>

<style scoped>

.field-container {
  padding-top: 100px;
  padding-bottom: 50px;
  text-align: center;
  margin: 10px;
  font-family:serif;
}

.contents-title-container {
  padding-top: 100px;
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
  width: 150px;
  font-weight: bold;
  color:black;
}

.field-content {
  display: flex;
  width: 1000px;
  margin: auto;
  padding: 30px 0px;
}

/* SP打ち消し */
.sp-field-contents {
  display: none;
}

.content-title {
  font-size: 24px;
  font-weight: bold;
  width: 40%;
  padding: 100px 30px;
  text-align: left;
}

.content-title p {
  font-size: 15px;
  font-weight: normal;
}

.content-image {
  width: 60%;
}

.content-image-detail {
  width: 100%;
}

.attention-wrapper {
  border: 3px solid #b6b5b5;
  font-size: 18px;
  padding: 10px;
}

.attention-wrapper span{
  font-weight: bold;
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

.fadeIn1 {
  animation: fadeIn1 1s;
}
@keyframes fadeIn1 {
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

.fadeIn2 {
  animation: fadeIn2 1s;
}
@keyframes fadeIn2 {
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

.fadeIn3 {
  animation: fadeIn3 1s;
}
@keyframes fadeIn3 {
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

.fadeIn4 {
  animation: fadeIn4 1s;
}
@keyframes fadeIn4 {
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

  .field-container {
    padding-top: 20px;
    padding-bottom: 50px;
    text-align: center;
    margin: 10px;
    font-family:serif;
  }

  .contents-title-container {
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

  /* PC用打ち消し */
  .field-contents {
    display: none;
  }

  .sp-field-contents {
    display: block;
  }

  .sp-field-content {

  }

  .sp-field-content p{
    font-size: 15px;
  }

  .sp-content-title {
    font-size: 20px;
    font-weight: bold;
    padding: 10px 0px;
  }

  .sp-content-image {
    width: 100%;
  }

  .sp-content-image-detail {
      width: 80%;
  }

  .attention-wrapper {
    border: 3px solid #b6b5b5;
    font-size: 15px;
    padding: 20px;
  }

.attention-wrapper span{
  font-weight: bold;

}



}



</style>
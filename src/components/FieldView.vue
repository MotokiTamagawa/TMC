<template>
  <div class="field-container">

    <div class="contents-title-container" id="field">
      <div class="contents-title">FIELD</div>
      <span class="sub-title">事業内容</span>
      <hr>
    </div>

    <div class="field-contents">

      <div  :class="{fadeIn:visible}" v-show="visible">
        <div class="field-content">
          <div class="content-title">
            相続関係
            <p>遺言・遺産分割協議書作成・相続財産調査など</p>
          </div>

          <div class="content-image">
            <img src="../assets/images/inheritance.jpg" class="content-image-detail">
          </div>
        </div>

        <Accordion>
          <div slot="title">詳しくはこちら</div>
                    <div slot="close">閉じる</div>
          <div class="sp-content" slot="content">
            <p>
              <span>公正証書遺言の作成手続き</span><br>
            遺言公正証書をするためには、必要書類を収集したり、証人になってくれる人を探したりする手間が生じますが依頼により、書類の収集や証人の立会いもおこないますし、遺言者が公証役場に行くのも1回だけで十分となる場合も多いです。<br><br>

            <span>相続人調査</span><br>
            調査をしなくても親族関係を把握しているでしょうが、誰が法定相続人なのかを確定するためには、相続人調査が必要です。 <br>
            相続人調査は、被相続人の出生から死亡までのすべての戸籍謄本等（場合によっては被相続人の尊属の死亡の分かる戸籍謄本等も含みます）を収集して行います。<br>
            なお、相続人を確認するための戸籍謄本等は、相続手続きでも必要となります。相続手続き（相続財産の名義変更手続き）の前提業務として相続手続きと併せてご依頼ください。<br><br>

            <span>相続財産調査、財産目録の作成</span><br>
            相続財産の内容を把握するためには、相続財産の調査が必要です。<br> 相続財産の調査によって、思わぬ財産が見つかることや、実は莫大な借金があったことが発覚することがあります。<br>
            相続手続きの前提業務として相続手続きと併せてご依頼ください。<br><br>

            <span>遺産分割協議書の作成</span><br>
            相続人全員の遺産分割協議の結果を書面にしたものが遺産分割協議書です。<br> 遺産分割協議書の作成と合わせて、預貯金の相続手続き（相続した預貯金の払戻し手続き）、有価証券の相続手続き（相続した有価証券の名義変更）、不動産の相続手続き（登記は司法書士が行います）の等相続手続き等とセットで承ります。<br>
          </p>
          </div>
        </Accordion>
        <hr>
      </div>

      <div :class="{fadeIn1:visible1}" v-show="visible1">
        <div class="field-content" >
          <div class="content-image">
            <img src="../assets/images/AdobeStock_201589914-min.jpeg" class="content-image-detail">
          </div>
          <div class="content-title">
            成年後見関係
            <p>(一社)コスモス成年後見サポートセンター会員</p>
          </div>
        </div>
        <Accordion>
          <div slot="title">詳しくはこちら</div>
          <div slot="close">閉じる</div>
          <div class="sp-content" slot="content">
            <p>
              成年後見関係につきましては、コスモス成年後見関係サポートセンターのホームページより詳細のご確認をお願い致します。<br><br>
              <p><a href="https://www.cosmos-sc.or.jp/"  target="_blank">(一社)コスモス成年後見サポートセンター</a></p>
            </p>
          </div>
        </Accordion>
        <hr>
      </div>

      <div :class="{fadeIn2:visible2}" v-show="visible2">
        <div class="field-content">
          <div class="content-title">
            土地関係
            <p>農地転用申請、開発許可申請など</p>
          </div>
          <div class="content-image">
            <img src="../assets/images/land.jpg" class="content-image-detail">
          </div>
        </div>
        <Accordion>
          <div slot="title">詳しくはこちら</div>
                    <div slot="close">閉じる</div>
          <div class="sp-content" slot="content">
            <p>
              <span>農地転用許可・届出</span><br>
              農地は 例え自分が所有する土地であっても自由に ・家を建てる ・駐車場にする ・売る などという行為はできません。 <br>
              しかも、農地を勝手に農地以外のものにしてしまうことは、違法行為となり、処罰の対象になります。<br>
              農地に家を建てるための手続き ・農地を駐車場にするための手続き ・農地を相続したときの届出 ・農地を売買するための許可 など、農地法の手続きの代理をします。

            </p>
          </div>
        </Accordion>
        <hr>
      </div>

      <div :class="{fadeIn3:visible3}" v-show="visible3">
        <div class="field-content" >
          <div class="content-image">
            <img src="../assets/images/construction.jpg" class="content-image-detail">
          </div>
          <div class="content-title">
            建設業関係
            <p>建設許可申請、競争入札参加資格審査申請（指名願い）など</p>
          </div>
        </div>
        <Accordion>
          <div slot="title">詳しくはこちら</div>
                    <div slot="close">閉じる</div>
          <div class="sp-content" slot="content">
            <p>
              <span>建設業許可取得を行うためには下記の5つの資格要件を満たせるかを確認します。</span><br>
                ・専任技術者がいること<br>
                ・経営業務管理責任者がいること<br>
                ・一定額の準備資金と実績<br>
                ・業務の履行性<br>
                ・欠格事由への非該当<br>
            </p>
          </div>
        </Accordion>
        <hr>
      </div>

      <div :class="{fadeIn4:visible4}" v-show="visible4">
        <div class="field-content" >
          <div class="content-title">
            産業廃棄物関係
            <p>産業廃棄物収集運搬許可申請など</p>
          </div>
          <div class="content-image">
            <img src="../assets/images/AdobeStock_295444105-min.jpeg" class="content-image-detail">
          </div>
        </div>
        <Accordion>
          <div slot="title">詳しくはこちら</div>
                    <div slot="close">閉じる</div>
          <div class="sp-content" slot="content">
            <p>
              <span>産業廃棄物収集運搬業許可について</span><br>
              産業廃棄物収集運搬業許可申請の手続きをご自身（自社）で進めようとしても、なかなか難しいとか、時間が取れないという状況も多いのではないでしょうか。<br>
              産業廃棄物収集運搬業許可申請手続きに関する判断が難しい許可要件の確認や、面倒な申請書の作成や公的書類の収集をスムーズに進めることができるので、申請手続きの時間を費やさずに済む、など様々なメリットがあります。
            </p>
          </div>
        </Accordion>
        <hr>
      </div>

      <div  :class="{fadeIn5:visible5}" v-show="visible5">
        <div class="field-content">
          <div class="content-image">
            <img src="../assets/images/foreigner.jpg" class="content-image-detail">
          </div>
          <div class="content-title">
            外国人関係
            <p>在留資格取得、変更申請、帰化申請など</p>
            <p>＊申請取次行政書士届出済</p>
          </div>
        </div>
        <Accordion>
          <div slot="title">詳しくはこちら</div>
                    <div slot="close">閉じる</div>
          <div class="sp-content" slot="content">
            <p>
              <span>外国人関係</span><br>
              小職は申請取次行政書士として届出をしております。<br>
              申請取次行政書士とは、出入国管理に関する一定の研修を修了した行政書士で、申請人に代わって申請書等を提出することが認められた行政書士です。 <br>
              申請取次行政書士に申請依頼をすると、申請人本人は出入国在留管理局への出頭が免除されるので、仕事や学業に専念することが可能です。
            </p>
          </div>
        </Accordion>
        <hr>
      </div>
    </div>


    <!-- SP -->
    <div class="sp-field-contents">
      <div class="sp-field-content" :class="{fadeIn:visible}" v-show="visible">
        <hr>
        <div class="sp-content-title">
          相続関係
        </div>
        <div class="sp-content-image">
          <img src="../assets/images/inheritance.jpg" class="sp-content-image-detail">
        </div>
        <p>遺言・遺産分割協議書作成・相続財産調査など</p>

        <Accordion>
          <div slot="title">詳しくはこちら</div>
          <div slot="close">閉じる</div>
          <div class="sp-content" slot="content">
            <p>
              <span>公正証書遺言の作成手続き</span><br>
            遺言公正証書をするためには、必要書類を収集したり、証人になってくれる人を探したりする手間が生じますが依頼により、書類の収集や証人の立会いもおこないますし、遺言者が公証役場に行くのも1回だけで十分となる場合も多いです。<br><br>

            <span>相続人調査</span><br>
            調査をしなくても親族関係を把握しているでしょうが、誰が法定相続人なのかを確定するためには、相続人調査が必要です。 <br>
            相続人調査は、被相続人の出生から死亡までのすべての戸籍謄本等（場合によっては被相続人の尊属の死亡の分かる戸籍謄本等も含みます）を収集して行います。<br>
            なお、相続人を確認するための戸籍謄本等は、相続手続きでも必要となります。相続手続き（相続財産の名義変更手続き）の前提業務として相続手続きと併せてご依頼ください。<br><br>

            <span>相続財産調査、財産目録の作成</span><br>
            相続財産の内容を把握するためには、相続財産の調査が必要です。<br> 相続財産の調査によって、思わぬ財産が見つかることや、実は莫大な借金があったことが発覚することがあります。<br>
            相続手続きの前提業務として相続手続きと併せてご依頼ください。<br><br>

            <span>遺産分割協議書の作成</span><br>
            相続人全員の遺産分割協議の結果を書面にしたものが遺産分割協議書です。<br> 遺産分割協議書の作成と合わせて、預貯金の相続手続き（相続した預貯金の払戻し手続き）、有価証券の相続手続き（相続した有価証券の名義変更）、不動産の相続手続き（登記は司法書士が行います）の等相続手続き等とセットで承ります。<br>
          </p>
          </div>
        </Accordion>
      </div>

      <div class="sp-field-content" :class="{fadeIn1:visible1}" v-show="visible1">
        <hr>
        <div class="sp-content-title">
          成年後見関係
        </div>
        <div class="sp-content-image">
          <img src="../assets/images/AdobeStock_201589914-min.jpeg" class="sp-content-image-detail">
        </div>
        <p>(一社)コスモス成年後見サポートセンター会員</p>
        <Accordion>
          <div slot="title">詳しくはこちら</div>
          <div slot="close">閉じる</div>
          <div class="sp-content" slot="content">
            <p>
              成年後見関係につきましては、<br>コスモス成年後見関係サポートセンターのホームページより詳細のご確認をお願い致します。<br><br>
              <p><a href="https://www.cosmos-sc.or.jp/"  target="_blank">(一社)コスモス成年後見サポートセンター</a></p>
            </p>
          </div>
        </Accordion>
      </div>


      <div class="sp-field-content" :class="{fadeIn2:visible2}" v-show="visible2">
        <hr>
        <div class="sp-content-title">
          土地関係
        </div>
        <div class="sp-content-image">
          <img src="../assets/images/land.jpg" class="sp-content-image-detail">
        </div>
        <p>農地転用申請、開発許可申請など</p>

        <Accordion>
          <div slot="title">詳しくはこちら</div>
          <div slot="close">閉じる</div>
          <div class="sp-content" slot="content">
            <p>
              <span>農地転用許可・届出</span><br>
              農地は 例え自分が所有する土地であっても自由に ・家を建てる ・駐車場にする ・売る などという行為はできません。 <br>
              しかも、農地を勝手に農地以外のものにしてしまうことは、違法行為となり、処罰の対象になります。<br>
              農地に家を建てるための手続き ・農地を駐車場にするための手続き ・農地を相続したときの届出 ・農地を売買するための許可 など、農地法の手続きの代理をします。

            </p>
          </div>
        </Accordion>
      </div>

      <div class="sp-field-content" :class="{fadeIn3:visible3}" v-show="visible3">
        <hr>
        <div class="sp-content-title">
          建設業関係
        </div>
        <div class="sp-content-image">
          <img src="../assets/images/construction.jpg" class="sp-content-image-detail">
        </div>
        <p>建設許可申請、競争入札参加資格審査申請<br>（指名願い）など</p>

        <Accordion>
          <div slot="title">詳しくはこちら</div>
                    <div slot="close">閉じる</div>
          <div class="sp-content" slot="content">
            <p>
              <span>建設業許可取得を行うためには下記の5つの資格要件を満たせるかを確認します。</span><br>
                ・専任技術者がいること<br>
                ・経営業務管理責任者がいること<br>
                ・一定額の準備資金と実績<br>
                ・業務の履行性<br>
                ・欠格事由への非該当<br>
            </p>
          </div>
        </Accordion>
      </div>

      <div class="sp-field-content" :class="{fadeIn4:visible4}" v-show="visible4">
        <hr>
        <div class="sp-content-title">
          産業廃棄物関係
        </div>
        <div class="sp-content-image">
          <img src="../assets/images/AdobeStock_295444105-min.jpeg" class="sp-content-image-detail">
        </div>
        <p>産業廃棄物収集運搬許可申請など</p>

        <Accordion>
          <div slot="title">詳しくはこちら</div>
                    <div slot="close">閉じる</div>
          <div class="sp-content" slot="content">
            <p>
              <span>産業廃棄物収集運搬業許可について</span><br>
              産業廃棄物収集運搬業許可申請の手続きをご自身（自社）で進めようとしても、なかなか難しいとか、時間が取れないという状況も多いのではないでしょうか。<br>
              産業廃棄物収集運搬業許可申請手続きに関する判断が難しい許可要件の確認や、面倒な申請書の作成や公的書類の収集をスムーズに進めることができるので、申請手続きの時間を費やさずに済む、など様々なメリットがあります。
            </p>
          </div>
        </Accordion>
      </div>

      <div class="sp-field-content" :class="{fadeIn5:visible5}" v-show="visible5">
        <hr>
        <div class="sp-content-title">
          外国人関係
        </div>
        <div class="sp-content-image">
          <img src="../assets/images/foreigner.jpg" class="sp-content-image-detail">
        </div>

        <p>在留資格取得、変更申請、帰化申請など</p>
        <p>＊申請取次行政書士届出済</p>

        <Accordion>
          <div slot="title">詳しくはこちら</div>
                    <div slot="close">閉じる</div>
          <div class="sp-content" slot="content">
            <p>
              <span>外国人関係</span><br>
              小職は申請取次行政書士として届出をしております。<br>
              申請取次行政書士とは、出入国管理に関する一定の研修を修了した行政書士で、申請人に代わって申請書等を提出することが認められた行政書士です。 <br>
              申請取次行政書士に申請依頼をすると、申請人本人は出入国在留管理局への出頭が免除されるので、仕事や学業に専念することが可能です。
            </p>
          </div>
        </Accordion>
      </div>
      <br><br>

    </div>

    <div :class="{fadeIn6:visible6}" v-show="visible6">
      <div class="attention-wrapper" >
        その他、<span>会社設立など各種申請（会社設立手続き、営業許可申請、内容証明作成、解約書作成）</span>なども取り扱っております。<br>
        行政書士には<span>守秘義務</span>がございますので、ご安心してお気軽にご相談ください。
      </div>

      <div class="go-price-table">
        <div class="go-price-table-a">
          <router-link  :to="'/price_table/#table'"  v-scroll-to="'#table'">
               料金表（報酬額表）はこちら
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>



<script lang="js">

import Accordion from '../components/AccordionView.vue'

export default {
  components: {
    Accordion
  },
  data() {
    return{
      visible:false,
      visible1:false,
      visible2:false,
      visible3:false,
      visible4:false,
      visible5:false,
      visible6:false,
    }
  },
  created() {
      window.addEventListener("scroll", this.handleScroll);
      window.addEventListener("scroll", this.handleScroll1);
      window.addEventListener("scroll", this.handleScroll2);
      window.addEventListener("scroll", this.handleScroll3);
      window.addEventListener("scroll", this.handleScroll4);
      window.addEventListener("scroll", this.handleScroll5);
      window.addEventListener("scroll", this.handleScroll6);
    },
    destroyed() {
      window.removeEventListener("scroll", this.handleScroll);
      window.removeEventListener("scroll", this.handleScroll1);
      window.removeEventListener("scroll", this.handleScroll2);
      window.removeEventListener("scroll", this.handleScroll3);
      window.removeEventListener("scroll", this.handleScroll4);
      window.removeEventListener("scroll", this.handleScroll5);
      window.removeEventListener("scroll", this.handleScroll6);
    },
  watch: {

    '$store.state.scrollFlag'(scrollFlag) {
      if (scrollFlag == false) {
        // console.log(scrollFlag);
        this.visible=true;
        this.visible1=true;
        this.visible2=true;
        this.visible3=true;
        this.visible4=true;
        this.visible5=true;
        this.visible6=true;
      }
    },

    scroll() {

      let hash = this.$router.hash;
      // console.log(hash);

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
          if (!this.visible1 && window.scrollY > 550) {
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
          if (!this.visible2 && window.scrollY > 950) {
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
          if (!this.visible3 && window.scrollY > 1250) {
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
        if (!this.visible4 && window.scrollY > 1650) {
          this.visible4 = true;
        }

      }else {
        // PC
        if (!this.visible4 && window.scrollY > 2100) {
          this.visible4 = true;
        }
      }
    }
  },
  handleScroll5() {

    if (this.visible5 == false) {
      if (window.innerWidth <= 800) {
        // スマートフォンの処理
        if (!this.visible5 && window.scrollY > 1950) {
          this.visible5 = true;
        }

      }else {
        // PC
        if (!this.visible5 && window.scrollY > 2500) {
          this.visible5 = true;
        }
      }
    }
  },
  handleScroll6() {

  if (this.visible6 == false) {
    if (window.innerWidth <= 800) {
      // スマートフォンの処理
      if (!this.visible6 && window.scrollY > 2250) {
        this.visible6 = true;
      }

    }else {
      // PC
      if (!this.visible6 && window.scrollY > 2900) {
        this.visible6 = true;
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
  width: 30px;
  font-weight: bold;
  color:black;
}

.field-content {
  display: flex;
  align-items: center;
  width: 1000px;
  margin: auto;
  padding: 30px 0px;
}

/* SP打ち消し */
.sp-field-contents {
  display: none;
}

.content-title {
  font-size: 25px;
  font-weight: bold;
  width: 40%;
  padding: 100px 30px;
  text-align: left;
}

.content-title p {
  font-size: 17px;
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
  font-size: 17px;
  padding: 10px;
  text-align: left;
}

.attention-wrapper span{
  font-weight: bold;
}

a {
  color: rgb(0, 0, 0);
  border-bottom: 1px solid #000000;
  padding-bottom: 4px;
  text-decoration: none;
}

a:hover {
  color: rgb(130, 130, 130);
  border-bottom: 1px solid rgb(130, 130, 130);
}
.go-price-table {
  margin-top: 80px;
  font-size: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.go-price-table-a {
}

.go-price-table a {
  color: #fff;
  background-color:#4CAF50;
  padding: 20px;
  border-radius: 20px;
  border-bottom: none;
  width: 100%;
}

.go-price-table a:hover {
  color: #fff;
  background-color:#459f48;
  padding: 20px;
  border-radius: 20px;
  border-bottom: none;
  width: 100%;
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

.fadeIn5 {
  animation: fadeIn5 1s;
}
@keyframes fadeIn5 {
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

.fadeIn6 {
  animation: fadeIn6 1s;
}
@keyframes fadeIn6 {
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

.sp-content {
    text-align: left;
    background-color: #e1e1e1;
    padding: 20px 20px;
  }

  .sp-content span{
    font-weight: bold;
    font-size: 18px;
    padding-bottom: 15px;
  }

  .sp-content p {
    margin: 0;
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
    font-size: 18px;
  }

  .sp-content-title {
    font-size: 28px;
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
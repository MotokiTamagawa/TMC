<template>
  <div class="footer-wrapper">
    <hr>
    <div class="footer-contents">

      <div class="footer-left-contents">
        <div class="header-left">
          行政書士 寺町久徳事務所
          <div class="heade-en">TERAMACHI HISANORI ADMINISTRATIVE SCRIVENER OFFICE</div>
        </div>
      </div>

      <div class="footer-right-contents">
        <div class="other-links">
          <h5>関連サイト</h5>
          <div>
            <a href="https://www.gyosei.or.jp/"  target="_blank">日本行政書士会連合</a>
          </div>
          <div>
            <a href="https://www.e-gyosei.or.jp/"  target="_blank">愛媛県行政書士会</a>
          </div>
          <div>
            <a href="https://www.cosmos-sc.or.jp/"  target="_blank">コスモス成年後見サポートセンター</a>
          </div>
          <div>
            <a href="https://www.zentaku.or.jp/"  target="_blank">全宅連</a>
          </div>
        </div>

        <br>
        <router-link :to="'/policy'" class="policy" v-scroll-to="'#policy'" >
          プライバシーポリシー
        </router-link>
      </div>
    </div>
    <div class="copyright">
      Copyright ©︎ 2023 行政書士寺町久徳事務所 All Right Reserved.
    </div>

  </div>
</template>


<style scoped>

.footer-wrapper {
  height: auto;
  padding-top: 30px;
  max-width: 1000px;
  margin: auto;
  text-align: center;
  font-size: 15px;
  color: rgb(49, 49, 49);
  font-family:serif;
}

.footer-contents {
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
}

.footer-left-contents {
  text-align: center;
  width: 500px;
  font-size: 15px;
  font-weight: bold;
}

.heade-en {
  font-size: 10px;
}

.footer-right-contents {
  text-align: center;
  width: 500px;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.other-links {
  text-align: left;
  font-size: 14px;

}

.other-links a{
  text-decoration: none;
  color: black;
}

.other-links h5 {
  margin: 0;
  padding-bottom: 10px;
  font-size: 15px;
}

.policy {
  text-decoration: none;
  color: black;
  text-align: left;
  font-size: 14px;
  border-bottom: 1px solid #979797;
}

a:hover {
  color: rgb(133, 133, 133);
}


.copyright {
  /* background-color: rgb(186, 186, 186); */
  /* color: white; */
  font-size: 10px;
  padding: 5px;
}


@media screen and (max-width: 959px) {
	/* 959px以下に適用されるCSS（タブレット用） */
}

@media screen and (max-width: 480px) {
	/* 480px以下に適用されるCSS（スマホ用） */

  .footer-wrapper {
    height: auto;
    padding-top: 30px;
    max-width: 800px;
    width: 100%;
    margin: auto;
    text-align: center;
    font-size: 15px;
    color: rgb(49, 49, 49);
    font-family:serif;
  }

  .footer-contents {
    display: block;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
  }

  .footer-left-contents {
    text-align: center;
    width: 100%;
    font-size: 15px;
    font-weight: bold;
    padding-bottom: 20px;
  }

  .heade-en {
    font-size: 10px;
  }

  .footer-right-contents {
    text-align: center;
    width: 100%;
    font-size: 15px;
    display: block;
    text-align: left;
  }

  .other-links {
    text-align: left;
    font-size: 14px;

  }

  .other-links a{
    text-decoration: none;
    color: black;
  }

  .other-links h5 {
    margin: 0;
    padding-bottom: 10px;
    font-size: 15px;
  }

  .policy {
    padding-top: 15px;
    text-decoration: none;
    color: black;
    text-align: left;
    font-size: 14px;
    border-bottom: 1px solid #979797;
  }


  a:hover {
    color: rgb(133, 133, 133);
  }


  .copyright {
    /* background-color: rgb(186, 186, 186); */
    /* color: white; */
    font-size: 10px;
    padding: 5px;
  }

}



</style>
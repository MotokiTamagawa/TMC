<template>
  <div class="footer-wrapper">
    <hr>
    <div class="footer-contents">
      <div class="footer-left-contents">
        <div>
          <a href="https://www.gyosei.or.jp/">日本行政書士会連合</a>
        </div>
        <div>
          愛媛県行政書士会
        </div>
        <div>
          コスモ成年後見サポートセンター
        </div>
        <div>
          全宅連
        </div>
      </div>
      <div class="footer-right-contents">
        <router-link :to="'policy'">プライバシーポリシー</router-link>
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
}

.footer-contents {
  display: flex;
  width: 750px;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
}

.footer-left-contents {
  text-align: left;
}

.copyright {
  /* background-color: rgb(186, 186, 186); */
  /* color: white; */
  font-size: 10px;
  padding: 5px;
}



</style>
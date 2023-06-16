<template>

  <div class="header-container">

    <div class="header-contents">
      <div class="header-left">
        <router-link :to="'/'" style="text-decoration: none;  color: black;">行政書士 寺町久徳事務所</router-link >
          <div class="heade-en">TERAMACHI HISANORI ADMINISTRATIVE SCRIVENER OFFICE</div>
      </div>

      <div class="header-right">
        <div class="header-right-content">
          <div class="en">FIELD</div>
          <div class="jp">事業内容</div>
        </div>
        <div class="header-right-content">
          <div class="en">CORPORATE</div>
          <div class="jp">事務所概要</div>
        </div>
        <div class="header-right-content">
          <div class="en">CONTACT</div>
          <div class="jp"><router-link :to="'/contact'" style="text-decoration: none;  color: black;">お問い合わせ</router-link></div>

        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

.header-container {
  padding: 20px 20px;
  background-color:#ffffff;
  color:  rgb(0, 0, 0);
  font-weight: bold;
  height: 50px;
  /* position: fixed; */
  margin: auto;
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
}

.en {
  font-size: 16px;
}

.jp {
  font-size: 12px;
}

</style>
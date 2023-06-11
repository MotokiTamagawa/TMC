<template>

  <div class="header-container">

    <di class="header-contents">
      <div class="header-left">
        <div>行政書士 寺町久徳事務所</div>
      </div>

      <div class="header-right">
        <div class="header-right-content">STATEMENT</div>
        <div class="header-right-content">事業内容</div>
        <div class="header-right-content">事務所概要</div>
        <div class="header-right-content">
          <router-link :to="'/contact'">お問い合わせ</router-link>
        </div>
      </div>
    </di>



  </div>
</template>

<style scoped>

.header-container {
  padding: 20px 20px;
  background-color: rgb(0, 183, 79);
  color: #fff;
  font-weight: bold;
}

.header-contents {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 800px;
  margin: auto;
}


.header-left {
  text-align: left;
  font-size: 22px;
}

.header-right {
  display: flex;
  justify-content: center;
  align-items: space-between;
}

.header-right-content {
  padding: 0px 20px;
}

</style>
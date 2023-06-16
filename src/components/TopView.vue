<template>

  <div class="top-container">

    <!-- <div class="fluid"></div> -->


    <div class="top-image">
      <img src="../assets/images/AdobeStock_239247699.jpeg" class='image-detail'>
      <div class="top-titles">
        <p>愛媛県今治市の行政書士事務所</p>
        <h1>行政書士 寺町久徳事務所</h1>
        <div class="en">TERAMACHI HISANORI ADMINISTRATIVE SCRIVENER OFFICE</div>
      </div>
    </div>

    <!-- https://stock.adobe.com/images/%E3%82%AA%E3%83%95%E3%82%A3%E3%82%B9/239247699?prev_url=detail -->

  </div>
</template>

<style scoped>

.top-container {
  margin: 10px;
  margin: auto;
  padding-top: 30px;
  max-width: 1000px;
  height: auto;
  font-family:serif;
}

h1 {
  font-family:serif;
  font-size: 40px;
  margin: 0;
}

p {
  margin: 0;
  font-weight: bold;
}

.en {
  font-size: 14px;
}

.top-titles {
  text-align: center;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%);
  color: rgb(0, 0, 0);
}


.top-image {
  margin: auto;
  position: relative;
  width: 1000px;
  height: auto;
}

.image-detail {
  width: 1000px;
}

/*========= 流体シェイプを動かす ===============*/
.fluid {
  width:80vh;/*横幅*/
  height: 80vh;/*縦幅*/
  margin: auto;
  background:rgb(0, 183, 79);/*背景色*/
  animation: fluidrotate 30s ease 0s infinite;/*アニメーションの設定*/
}

@keyframes fluidrotate {

0%, 100% {
    border-radius: 63% 37% 54% 46%/55% 48% 52% 45%;
}
14% {
    border-radius: 40% 60% 54% 46%/49% 60% 40% 51%;
}
28% {
    border-radius: 54% 46% 38% 62%/49% 70% 30% 51%;
}
42% {
    border-radius: 61% 39% 55% 45%/61% 38% 62% 39%;
}
56% {
    border-radius: 61% 39% 67% 33%/70% 50% 50% 30%;
}
70% {
    border-radius: 50% 50% 34% 66%/56% 68% 32% 44%;
}
84% {
    border-radius: 46% 54% 50% 50%/35% 61% 39% 65%;
}

}




</style>
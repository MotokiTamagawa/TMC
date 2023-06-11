<template>

  <div class="top-container">

    <div class="top-titles">
      <h1>行政書士 寺町久徳事務所</h1>
      <div>TERAMACHI</div>
      <div>ADMINISTRATIVE SCRIVENER OFFICE</div>
    </div>

    <div class="fluid"></div>

  </div>
</template>

<style scoped>

.top-container {
  margin: 10px;
  position: relative;
}

h1 {
  font-family:serif;
}

.top-titles {
  text-align: center;
}

/*========= 流体シェイプを動かす ===============*/
.fluid {

  width:40vh;/*横幅*/
  height: 40vh;/*縦幅*/
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
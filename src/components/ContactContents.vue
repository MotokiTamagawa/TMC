<template>
  <div class="contact-contents-container" id="contact">

    <div class="contents-title-container">
      <div class="contents-title">CONTACT</div>
      <span class="sub-title">お問合せ</span>
      <hr>
    </div>

    <div class="contact-contents">

      <!-- //SPのみ電話タグは有効 -->
      <div class="phone">
        <a href="tel:0898527661">
          <i class="fa-solid fa-phone"></i>お電話でのお問合せ<br>
          (0898-52-7661)
        </a>
      </div>

      <router-link :to="'/contact/#contactview'" v-scroll-to="'#contactview'"  class="mail" style="color: black;">
        <i class="fa-regular fa-envelope"></i>メールでのお問合せ
      </router-link>
    </div>

  </div>
</template>


<style scoped>

.contact-contents-container {
  padding-top: 120px;
  padding-bottom: 50px;
  text-align: center;
  margin: 10px;
  font-family:serif;
}

.contents-title-container {
  padding-bottom: 50px;
}

.contact-contents {
  padding-bottom: 50px;
}

.contents-title {
  font-size: 30px;
  font-weight: bold;
}

.contents-title-container hr {
  width: 30px;
  font-weight: bold;
  color:black;
}


.sub-title {
  font-size: 20px;
  font-weight: bold;
}

.contact-contents {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 700px;
}

.phone {
  border: 1px solid #000000;
  padding: 5px 80px;
  font-size: 17px;
  height: 50px;
}

.mail {
  border: 1px solid #000000;
  background-color: rgb(203, 203, 203);
  padding: 5px 80px;
  font-size: 17px;
  height: 50px;
  display: flex;
  align-items: center;
}

.mail:hover {
  border: 1px solid #000000;
  background-color: rgb(130, 130, 130);
  padding: 5px 80px;
  font-size: 17px;
  height: 50px;
  display: flex;
  align-items: center;
}

a {
  text-decoration: none;
  color: #000000;
}

a:hover{
  color: rgb(133, 133, 133);
}


@media screen and (max-width: 959px) {
	/* 959px以下に適用されるCSS（タブレット用） */
}

@media screen and (max-width: 480px) {
	/* 480px以下に適用されるCSS（スマホ用） */

  .contact-contents-container {
    padding-top: 120px;
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

  .contact-contents {
    display: block;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    width: 100%;
    text-align: center;
  }

  .phone {
    border: 1px solid #000000;
    padding: 5px 5px;
    font-size: 17px;
    height: 50px;
  }

  .mail {
    margin-top: 30px;
    border: 1px solid #000000;
    background-color: rgb(203, 203, 203);
    padding: 5px 6px;
    font-size: 17px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }


}

</style>
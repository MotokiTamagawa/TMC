<template>

  <div class="contact-complete-container" id="complete">

    <div class='complete-contents'>
      <div class="title">お問合せ完了</div>

      <div>
        この度はお問合せいただき、誠にありがとうございます。
        <br>
        お問合せいただいた内容を確認の上、入力していただきましたメールアドレス宛にご返信させていただきます。<br>

      </div>

      <div class="btn-container">
        <router-link :to="'/'" class="top-btn">TOPに戻る</router-link>
      </div>
    </div>


  </div>


</template>

<script lang="js">


export default {
  // components: {

  // },
  // data () {
  //   return {

  //   };
  // },
  // methods: {


  //   }
  // }

}



</script>

<style scoped>

.contact-complete-container {
  padding-top: 300px;
  padding-bottom: 250px;
  font-family:serif;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1000px;
}

.complete-contents {
  background-color: white;
  padding: 40px;
  font-size: 18px;
}

.title {
  font-weight: bold;
  font-size: 20px;
  padding-bottom: 13px;
}

a {
  text-decoration: none;
  color: black;
}

.btn-container {
  padding-top: 20px;
  text-align: center;
}

.top-btn {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.top-btn:hover {
  text-align: center;
  background-color: #45a049;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}


@media screen and (max-width: 800px) {
	/* 480px以下に適用されるCSS（スマホ用） */

  .contact-complete-container {
    padding-top: 200px;
    padding-bottom: 250px;
    font-family:serif;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 800px;
  }

  .complete-contents {
    background-color: white;
    padding: 60px 20px;
    font-size: 15px;
  }

  .title {
    font-weight: bold;
    font-size: 20px;
    padding-bottom: 13px;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .btn-container {
    padding-top: 20px;
    text-align: center;
  }

  .top-btn {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .top-btn:hover {
    text-align: center;
    background-color: #45a049;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }


}






</style>
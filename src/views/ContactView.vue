<template>

  <div class="contact-container" id="contactview">

    <div class="contents-title-container">
      <div class="contents-title">CONTACT</div>
      <span class="sub-title">お問合せ</span>
    </div>

    <div class="contact-contents">
      <form
        id="app"
        @submit.prevent="sendEmail"
        method="post"
        novalidate="true"
        ref="form"
      >

        <div class="input-form">
          <label for="name">お名前</label><br>
          <input
            id="name"
            v-model="name"
            type="text"
            name="name"
            style="width: 90%;"
          >
          <div class="contents-error">{{ errors.name }}</div>
        </div>

        <div class="input-form">
          <label for="number">電話番号</label><br>
          <input
            id="number"
            v-model="number"
            type="text"
            name="number"
            style="width: 90%;"
          >
          <div class="contents-error">{{ errors.number }}</div>
        </div>

        <div  class="input-form">
          <label for="email">メールアドレス<span class="annotetion">※メールアドレスの間違いにご注意ください</span></label>
          <input
            id="email"
            v-model="email"
            type="email"
            name="email"
            style="width: 90%;"
          >
          <div class="contents-error">{{ errors.email }}</div>
        </div>

        <div  class="input-form">
          <label for="item">お問合せ項目</label>
          <select
            id="item"
            v-model="item"
            name="item"
            style="width: 90%; height: 30px;"
          >
            <option>相続関係</option>
            <option>成年後見関係</option>
            <option>土地関係</option>
            <option>建設業関係</option>
            <option>産業廃棄物関係</option>
            <option>会社設立など各種申請</option>
            <option>外国人関係</option>
            <option>その他</option>
          </select>
          <div class="item-error">{{ errors.item }}</div>
        </div>

        <div class="input-form">
          <label for="message">お問合せ内容</label>
          <textarea
            id="message"
            v-model="message"
            type="text"
            name="message"
            style="  resize: none;
                      width:90%;
                      height:300px;"
          ></textarea>
          <div class="message-error">{{ errors.message }}</div>
        </div>

        <div class="errorMessage">{{ errorMessage }}</div>

        <p>
          <input
            type="submit"
            value="送信"
          >
        </p>

      </form>

      <div class="to-top">
        <router-link :to="'/'">戻る</router-link>
      </div>

    </div>


  </div>

</template>

<script lang="js">

import emailjs from '@emailjs/browser';
// import emailjs from 'emailjs-com';

export default {
  components: {

  },
  data () {
    return {
    errors: {
      name:null,
      number : null,
      email: null,
      item: null,
      message: null,
    },
    name: null,
    number : null,
    email: null,
    item: null,
    message: null,
    errorMessage: null
    };
  },
  mounted() {
   const hash = this.$route.hash
    if (hash && hash.match(/^#.+$/)) {
     this.$scrollTo(hash)
    }
  },
  methods: {
    sendEmail() {

      // 送信時は環境変数で

      // templateId = import.meta.env.VUE_APP_SERVICE_ID

      // バリデーション
      if (this.validationCheck() === false) {
        console.log('validation NG');
        this.errorMessage = '入力内容を確認してください';
        return;
      }

      console.log(this.subject);
      console.log(this.email);
      console.log(this.name);
      console.log(this.message);


      emailjs.sendForm('service_uy8kikp', 'template_rayolea', this.$refs.form,'4ZdXe1K6Ok5Ksc2P6')
        .then((result) => {
            console.log('SUCCESS!', result.text);

            this.$router.push('/contact_complete');

        }, (error) => {
            console.log('FAILED...', error.text);
        });

    },
    validationCheck() {

      let result = true;

      // 名前
      if (this.name == null) {
        this.errors.name = '入力してください';
        result = false;
      } else {
        this.errors.name = '';
      }

      // 電話番号
      if (this.number == null) {
        this.errors.number =  '入力してください';
        result = false;
      } else {
        this.errors.number =  '';
      }

      // if (this.number.match(/^[0-9]{2,4}-?[0-9]{2,4}-?[0-9]{3,4}$/)) {
      //   this.errors.number = ''
      // } else if (!this.number == '' && !this.number.match(/^[0-9]{2,4}-?[0-9]{2,4}-?[0-9]{3,4}$/)) {
      //   this.errors.number =  '入力内容を確認してください';
      //   result = false;
      // } else if (this.number == null) {
      //   this.errors.number =  '入力してください';
      //   result = false;
      // }

      // メアド

      if (this.email == null) {
        this.errors.email =  '入力してください';
        result = false;
      } else {
        this.errors.email =  '';
      }

      // お問合せ項目
      if (this.item == null) {
        this.errors.item = '選択してください';
        result = false;
      } else {
        this.errors.item = '';
      }

      // お問合せ内容
      if (this.message == null) {
        this.errors.message = '入力してください';
        result = false;
      } else {
        this.errors.message = '';
      }

      return result;

    }
  }
}

</script>

<style scoped>

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 20px 30px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.contact-container {
  text-align: center;
  padding-top: 120px;
  padding-bottom: 80px;
  font-family:serif;
  width: 1000px;
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

.annotetion {
  font-size: 12px;
  color: rgb(136, 136, 136);
}

.contact-contents {
  width: 700px;
  margin: auto;
}

.input-form {
  position: relative;
  padding: 15px 0px;
}

.input-form label {
  font-weight: bold;
}

.contents-error {
  position: absolute;
  top: 85px;
  left: 40px;
  font-size: 15px;
  color: rgb(255, 126, 126);
}

.item-error {
  position: absolute;
  top: 70px;
  left: 40px;
  font-size: 15px;
  color: rgb(255, 126, 126);
}

.message-error {
  position: absolute;
  top: 350px;
  left: 40px;
  font-size: 15px;
  color: rgb(255, 126, 126);
}

.errorMessage {
  padding: 20px;
  color: rgb(255, 126, 126);
}

.to-top{
  padding-top: 50px;
}

.to-top a{
  background-color: rgb(223, 223, 223);
  padding: 10px;
  border-radius: 20px;
  border-bottom: none;
  text-decoration: none;
  color: rgb(0, 0, 0);
}

@media screen and (max-width: 800px) {
	/* 480px以下に適用されるCSS（スマホ用） */

  label {
    float: left;
  }

  input[type=text], [type=email], textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
  }

  input[type=submit] {
    background-color: #4CAF50;
    color: white;
    padding: 20px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
  }

  input[type=submit]:hover {
    background-color: #45a049;
  }

  .contact-container {
    text-align: center;
    padding-top: 120px;
    padding-bottom: 80px;
    font-family:serif;
    width: 100%;
    max-width: 600px;
  }

  .contents-title-container {
    padding-bottom: 30px;
  }

  .contents-title {
  font-size: 30px;
  font-weight: bold;
}

.sub-title {
  font-size: 20px;
  font-weight: bold;
}

  .annotetion {
    font-size: 10px;
    color: rgb(136, 136, 136);
  }

  .contact-contents {
    width: 100%;
    margin: auto;
  }

  .input-form {
    position: relative;
    padding: 15px 10px;
  }

  .contents-error {
    position: absolute;
    top: 85px;
    left: 30px;
    font-size: 12px;
    color: rgb(255, 126, 126);
  }

  .item-error {
    position: absolute;
    top: 70px;
    left: 30px;
    font-size: 12px;
    color: rgb(255, 126, 126);
  }

  .message-error {
    position: absolute;
    top: 350px;
    left: 30px;
    font-size: 12px;
    color: rgb(255, 126, 126);
  }

  .errorMessage {
    padding: 20px;
    color: rgb(255, 126, 126);
  }

  .to-top a{
    background-color: rgb(223, 223, 223);
    padding: 10px;
    border-radius: 20px;
    border-bottom: none;
    text-decoration: none;
    color: rgb(0, 0, 0);
  }


  a:hover {
    color: rgb(130, 130, 130);
  }
}



</style>
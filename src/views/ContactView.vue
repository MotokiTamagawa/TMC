<template>

  <div class="contact-container">

    <div class="contents-title-container">
      <div class="contents-title">CONTACT</div>
      <span class="sub-title">お問合せ</span>
    </div>

    <form
      id="app"
      @submit.prevent="sendEmail"
      method="post"
      novalidate="true"
      ref="form"
    >

    <p v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
    </p>

    <p>
      <label for="name">お名前</label>
      <input
        id="name"
        v-model="name"
        type="text"
        name="name"
      >
    </p>
    <div>{{ errors.name }}</div>

    <p>
      <label for="number">電話番号</label>
      <input
        id="number"
        v-model="number"
        type="text"
        name="number"
      >
    </p>
    <div>{{ errors.number }}</div>

    <p>
      <label for="email">メールアドレス</label>
      <input
        id="email"
        v-model="email"
        type="email"
        name="email"
      >
    </p>
    <div>{{ errors.email }}</div>

     <p>
      <label for="item">お問合せ項目</label>
      <select
        id="item"
        v-model="item"
        name="item"
      >
        <option>相続関係</option>
        <option>土地関係</option>
        <option>建設業関係</option>
        <option>外国人関係</option>
        <option>その他</option>
      </select>
    </p>
    <div>{{ errors.item }}</div>

    <p>
      <label for="message">お問合せ内容</label>
      <input
        id="message"
        v-model="message"
        type="text"
        name="message"
      >
    </p>
    <div>{{ errors.message }}</div>

    <p>
      <input
        type="submit"
        value="送信"
      >
    </p>

    </form>

     <div>{{ errorMessage }}</div>

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
  methods: {
    sendEmail() {

      // 送信時は環境変数で

      // templateId = import.meta.env.VUE_APP_SERVICE_ID

      if (this.validationCheck() === false) {
        console.log('validation NG');
        this.errorMessage = '入力内容を確認してください';
        return;
      }

      console.log(this.subject);
      console.log(this.email);
      console.log(this.name);
      console.log(this.message);

      // let form = [from_name,user_name,message]

      // ここでバリデーション

      emailjs.sendForm('service_fvmdxbf', 'template_rayolea', this.$refs.form,'4ZdXe1K6Ok5Ksc2P6')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });

    },
    validationCheck() {

      let result = true;

      if (this.number.match(/^[0-9]{2,4}-?[0-9]{2,4}-?[0-9]{3,4}$/)) {
        this.errors.number = ''
      } else if (!this.number == '' && !this.number.match(/^[0-9]{2,4}-?[0-9]{2,4}-?[0-9]{3,4}$/)) {
        this.errors.number =  '入力内容を確認してください';
        result = false;
      } else if (this.number == null) {
        this.errors.number =  '入力してください';
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
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.contact-container {
  text-align: center;
  padding-top: 60px;
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

</style>
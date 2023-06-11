<template>

  <div>
    <div>
      お問合せページ
    </div>


    <div>お名前</div>
    <input type="text" v-model="name">

    <div>メールアドレス</div>
    <input type="email" v-model="from">

    <div>件名</div>
    <input type="text" v-model="subject">

    <div>お問合せ内容</div>
    <textarea type="text" v-model="body"></textarea>

    <button @click="sendEmail">送信</button>

  </div>


</template>

<script lang="js">

import Email from '../modules/smtp'

export default {
  components: {

  },
  data () {
    return {
      name: '',
      from: '',
      subject: '',
      body: ''
    };
  },
  methods: {
    sendEmail() {

      console.log(this.from);
      console.log(this.subject);
      console.log(this.name);
      console.log(this.body);

      // ここでバリデーション

      Email.send({
        SecureToken :"aace0fc8-d334-44b9-88f8-e2adc6dc2e34",
        To : 'tmgw0913@gmail.com',
        From : this.from,
        name: this.name,
        Subject : this.subject,
        Body: this.body,
      }).then(() => this.$router.push("contact_confirm"))

    }
  }

}



</script>
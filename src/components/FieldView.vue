<template>
  <div class="field-container">

    <div class="contents-title-container" id="field">
      <div class="contents-title">FIELD</div>
      <span class="sub-title">事業内容</span>
    </div>

    <div class="field-contents">

      <div class="field-content">
        <div class="content-title">
          相続関係
          <p>相続関係説明図作成、遺産分割協議書作成、遺言書の起案・作成など</p>
          <p>(一社)コスモス成年後見サポートセンター会員</p>
        </div>

        <div class="content-image">
          <img src="../assets/images/inheritance.jpg" class="content-image-detail">
        </div>
      </div>

      <div class="field-content">
        <div class="content-image">
          <img src="../assets/images/land.jpg" class="content-image-detail">
        </div>

        <div class="content-title">
          土地関係
          <p>農地転用申請、開発許可申請など</p>
        </div>

      </div>

      <div class="field-content">
        <div class="content-title">
          建設業関係
          <p>建設許可申請、競争入札参加資格審査申請（指名願い）など</p>
        </div>
        <div class="content-image">
          <img src="../assets/images/construction.jpg" class="content-image-detail">
        </div>
      </div>

      <div class="field-content">
        <div class="content-image">
          <img src="../assets/images/foreigner.jpg" class="content-image-detail">
        </div>
        <div class="content-title">
          外国人関係
          <p>当職は申請取次行政書士として届出をしております。<br>
          (申請人ご本人様の入国管理局への出頭が免除されます。)</p>
        </div>
      </div>
    </div>

    <div class="attention-wrapper">
      その他、営業許可申請、内容証明作成、契約書作成、会社設立なども取り扱っております。<br>
      行政書士には守秘義務がございますので、ご安心してお気軽にご相談ください。
    </div>

  </div>
</template>



<script lang="js">
import router from '../router';


export default {
  watch: {
    scroll() {

      let hash = this.$router.hash;
      console.log(hash);

      if (hash == 'field') {
        this.$router.push('./#field')
      }

    }
  }
}

</script>

<style scoped>

.field-container {
  padding-top: 100px;
  padding-bottom: 50px;
  text-align: center;
  margin: 10px;
  font-family:serif;
}

.contents-title-container {
  padding-top: 100px;
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

.field-content {
  display: flex;
  width: 1000px;
  margin: auto;
  padding: 30px 0px;
}

.content-title {
  font-size: 24px;
  font-weight: bold;
  width: 40%;
  padding: 100px 30px;
  text-align: left;
}

.content-title p {
  font-size: 15px;
  font-weight: normal;
}

.content-image {
  width: 60%;
}

.content-image-detail {
  width: 100%;
}

.attention-wrapper {
  background-color: rgb(229, 229, 229);
  border-radius: 30px;
  font-weight: 25px;
}




</style>
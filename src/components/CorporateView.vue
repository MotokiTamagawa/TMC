<template>
  <div class="corporate-container" id="corporate">

    <div class="contents-title-container" :class="{fadeIn:visible}" v-show="visible">
      <div class="contents-title">CORPORATE</div>
      <span class="sub-title">事務所概要</span>
      <hr>
    </div>

    <div class="corporate-contents" :class="{fadeIn1:visible}" v-show="visible1">
      <div class="corporate-name">行政書士 寺町久徳事務所</div>

      <table>
        <tbody>
          <tr>
            <th>所長</th>
            <td>寺町久徳</td>
          </tr>

          <tr>
            <th>所在地</th>
            <td>
              〒799-1505<br>
              愛媛県今治市東村甲387番地1
            </td>
          </tr>

          <tr>
            <th>TEL</th>
            <td>0898-52-7661</td>
          </tr>

          <tr>
            <th>FAX</th>
            <td>0898-52-7662</td>
          </tr>

          <tr>
            <th>MAIL</th>
            <td>h-teramachi@tempo.ocn.ne.jp</td>
          </tr>

          <tr>
            <th>関連会社</th>
            <td>愛雷株式会社(代表取締役 寺町久徳)</td>
          </tr>
        </tbody>
      </table>

      <div class="googlemap">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.223525796237!2d133.0179445774691!3d34.03813687316234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35503077c884ec2d%3A0xf8af590b0ac7b1fa!2z5a-655S6IOihjOaUv-abuOWjq-S6i-WLmeaJgA!5e0!3m2!1sja!2sjp!4v1686464999228!5m2!1sja!2sjp" width="500" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div class="sp-googlemap">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.223525796237!2d133.0179445774691!3d34.03813687316234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35503077c884ec2d%3A0xf8af590b0ac7b1fa!2z5a-655S6IOihjOaUv-abuOWjq-S6i-WLmeaJgA!5e0!3m2!1sja!2sjp!4v1686464999228!5m2!1sja!2sjp" width="90%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>

      <div class="open-googlemap">
        <a href="https://goo.gl/maps/DHEi34pqRnDFENSD9" target="_blank">
          Google Mapで開く
        </a>
      </div>

    </div>

  </div>
</template>

<script lang="js">
  export default {
    data() {
      return {
        visible: false,
        visible1: false
      };
    },
    created() {
      window.addEventListener("scroll", this.handleScroll);
      window.addEventListener("scroll", this.handleScroll1);
    },
    destroyed() {
      window.removeEventListener("scroll", this.handleScroll);
      window.removeEventListener("scroll", this.handleScroll1);
    },
    methods: {
      handleScroll() {
        if (!this.visible) {
          this.visible = window.scrollY > 2000;
        }else if(window.scrollY < 1990){
          this.visible = !this.visible;
        }
      },
      handleScroll1() {
        if (!this.visible1) {
          this.visible1 = window.scrollY > 1200;
        }else if(window.scrollY < 1190){
          this.visible1 = !this.visible;
        }
      }
    }
  }
</script>

<style scoped>

.corporate-container {
  padding-top: 90px;
  padding-bottom: 50px;
  text-align: center;
  margin: 10px;
  font-family:serif;
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

.contents-title-container hr {
  width: 30px;
  font-weight: bold;
  color:black;
}

.corporate-name {
  font-size: 20px;
  font-weight: bold;
}

table {
  margin: auto;
  width: 500px;
  padding: 30px;
  letter-spacing: 0.09em;
  line-height: 2;
}

tbody  {
  box-sizing: border-box;
}

tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}

th {
  text-align: left;
  vertical-align: baseline;
}

td {
  font: inherit;
  vertical-align: baseline;
  text-align: left;
  padding-left: 70px;
}

.sp-googlemap {
  display: none;
}

/* フェードイン */
.fadeIn {
  animation: fadeIn 2s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(300px);
    transition-duration:.9s;
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
    transition-duration:.7s;
  }
}
.fadeIn1 {
  animation: fadeIn1 2s;
}
@keyframes fadeIn1 {
  0% {
    opacity: 0;
    transform: translateY(200px);
    transition-duration:.7s;
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
    transition-duration:.7s;
  }
}

a{
  text-decoration: none;
  color: black;
}

a:hover{
  color: rgb(133, 133, 133);
}

.open-googlemap {
  padding: 20px;
  font-size: 18px;
}



@media screen and (max-width: 800px) {
	/* 480px以下に適用されるCSS（スマホ用） */

  .corporate-container {
    padding-top: 80px;
    padding-bottom: 50px;
    text-align: center;
    margin: 10px;
    font-family:serif;
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

  .contents-title-container hr {
    width: 30px;
    font-weight: bold;
    color:black;
  }

  .corporate-name {
    font-size: 15px;
    font-weight: bold;
  }

  table {
    margin: auto;
    width: 100%;
    padding: 1px;
    letter-spacing: 0.09em;
    line-height: 2;
    font-size: 14px;
  }

  tbody  {
    box-sizing: border-box;
  }

  tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }

  th {
    text-align: left;
    vertical-align: baseline;
  }

  td {
    font: inherit;
    vertical-align: baseline;
    text-align: left;
    padding-left: 30px;
  }

  .googlemap {
    display: none;
  }

  .sp-googlemap {
    display: block;
    padding: 20px 0px ;
  }

}



</style>
<template>
  <div class="price-table-container" id="table">
    <div class="contents-title-container">
      <div class="contents-title">PRICE</div>
      <span class="sub-title">料金表（報酬額表）</span>
    </div>

    <div class="anotaition">
      <span>行政書士報酬等料金について</span><br>
      ・報酬等は依頼内容により多少の増減があります。<br>
      ・ご相談内容により見積書を提示させていただきます。
      <br>※掲載金額には消費税を含めております。
    </div>

    <div class="price-title">相続関係</div>
    <table>
      <thead>
        <tr>
          <th>項目</th>
          <th>料金（円）</th>
          <th>備考</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>財産調査</td>
            <td>55,000～</td>
            <td>財産額、件数により異なる</td>
          </tr>
          <tr>
            <td>相続人調査</td>
            <td>55,000～</td>
            <td>法定相続人数により異なる</td>
          </tr>
          <tr>
            <td>遺産分割協議書作成</td>
            <td>33,000～</td>
            <td>財産調査・相続人調査は含まれない</td>
          </tr>
          <tr>
            <td>相続関係図作成</td>
            <td>22,000～</td>
            <td>相続人調査・法定相続情報一覧図作成は含まれない</td>
          </tr>
          <tr>
            <td>遺言書作成指導</td>
            <td>55,000～</td>
            <td>-</td>
          </tr>
          <tr>
            <td>公正証書遺言作成</td>
            <td>55,000～</td>
            <td>公証人への手数料等は別途</td>
          </tr>
      </tbody>
    </table>
    <br>
    <br>
    <hr>

    <div class="price-title">成年後見関係</div>
    <table>
      <thead>
        <tr>
          <th>項目</th>
          <th>料金（円）</th>
          <th>備考</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>成年後見制度に関する相談</td>
          <td>無料</td>
          <td>初回(30分程度)</td>
        </tr>
        <tr>
          <td>任意後見契約書の起案</td>
          <td>77,000～</td>
          <td>公正証書作成・公証人への手数料等は別途</td>
        </tr>
        <tr>
          <td>成年後見制度利用支援</td>
          <td>33,000～</td>
          <td>各種公的書類取得等</td>
        </tr>
      </tbody>
    </table>
    <br>
    <br>
    <hr>

    <div class="price-title">土地関係</div>
    <table>
      <thead>
        <tr>
          <th>項目</th>
          <th>料金（円）</th>
          <th>備考</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>農地法３条許可申請</td>
          <td>77,000～</td>
          <td>-</td>
        </tr>
        <tr>
          <td>農地法４条許可申請</td>
          <td>110,000～</td>
          <td>-</td>
        </tr>
        <tr>
          <td>農地法５条許可申請</td>
          <td>143,000～</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
    <br>
    <br>
    <hr>

    <div class="price-title">建設業関係</div>
    <table>
      <thead>
        <tr>
          <th>項目</th>
          <th>料金（円）</th>
          <th>備考</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>知事許可・新規（法人・個人）</td>
          <td>143,000</td>
          <td>許可手数料90,000円</td>
        </tr>
        <tr>
          <td>知事許可・更新</td>
          <td>77,000</td>
          <td>許可手数料50,000円</td>
        </tr>
        <tr>
          <td>知事許可・決算変更届</td>
          <td>44,000</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
    <br>
    <br>
    <hr>

    <div class="price-title">産業廃棄物関係</div>
    <table>
      <thead>
        <tr>
          <th>項目</th>
          <th>料金（円）</th>
          <th>備考</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>産廃収集運搬・県新規</td>
          <td>110,000</td>
          <td>許可手数料81,000円</td>
        </tr>
        <tr>
          <td>産廃収集運搬・県更新</td>
          <td>77,000</td>
          <td>許可手数料73,000円</td>
        </tr>
      </tbody>
    </table>
    <br>
    <br>
    <hr>

    <div class="price-title">会社設立等各種申請<br>(登記申請・司法書士依頼別途)</div>
    <table>
      <thead>
        <tr>
          <th>項目</th>
          <th>料金（円）</th>
          <th>備考</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>株式会社設立業務</td>
          <td>110,000</td>
          <td>定款認証費用50,000円<br>印紙40,000円<br>登録免許税150,000円</td>
        </tr>
        <tr>
          <td>契約書作成</td>
          <td>33,000～</td>
          <td>内容・枚数により変動する</td>
        </tr>
        <tr>
          <td>内容証明作成代理</td>
          <td>22,000～</td>
          <td>郵便代等別途</td>
        </tr>
      </tbody>
    </table>

    <div class="to-contact">
      <router-link :to="'/contact/#contactview'" v-scroll-to="'#contactview'">問い合わせる</router-link>
    </div>

    <div class="to-top">
      <router-link :to="'/'">戻る</router-link>
    </div>

  </div>

</template>

<script lang="js">

export default {
mounted() {
  const hash = this.$route.hash
    if (hash && hash.match(/^#.+$/)) {
     this.$scrollTo(hash)
    }
}
}
</script>


<style scoped>

#price_table {
  margin: 0 20px;
}

.price-table-container {
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

.anotaition {
  line-height: 35px;
}

.anotaition span {
  font-weight: bold;
  font-size: 19px;
}

.price-title {
  font-size: 20px;
  font-weight: bold;
  padding-top: 40px;
  padding-bottom: 20px;
  text-align: left;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead th {
  font-weight: normal;
}

th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
  width: 33%;
}

thead {
  background-color: #e0e0e0;
}

tbody tr:nth-child(even) {
  background-color: #f2f2f2;
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

a:hover {
  color: rgb(130, 130, 130);
}

.to-contact {
    padding-top: 50px;
    font-weight: bold;
  }

  .to-contact a{
    background-color: #4CAF50;
    padding: 20px;
    border-radius: 20px;
    border-bottom: none;
    text-decoration: none;
    color: rgb(255, 255, 255);
  }

  .to-contact a:hover{
    background-color: #429044;
    padding: 20px;
    border-radius: 20px;
    border-bottom: none;
    text-decoration: none;
    color: rgb(255, 255, 255);
  }


@media screen and (max-width: 800px) {
	/* 480px以下に適用されるCSS（スマホ用） */

  #price_table {
    margin: 0 20px;
  }

  .price-table-container {
    text-align: center;
    padding-top: 120px;
    padding-bottom: 80px;
    font-family:serif;
    width:90%;
    margin: auto;
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

  .anotaition {
    line-height: 30px;
    font-size: 14px;
  }

  .anotaition span {
    font-weight: bold;
    font-size: 18px;
  }

  .price-title {
    font-size: 20px;
    font-weight: bold;
    padding-top: 40px;
    padding-bottom: 20px;
    text-align: left;
    font-size: 20px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 15px;
  }

  thead th {
    font-weight: normal;
  }

  th, td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
    width: 33%;
  }

  thead {
    background-color: #e0e0e0;
  }

  tbody tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  .to-contact {
    padding-top: 50px;
    font-weight: bold;
  }

  .to-contact a{
    background-color: #4CAF50;
    padding: 10px;
    border-radius: 20px;
    border-bottom: none;
    text-decoration: none;
    color: rgb(255, 255, 255);
  }

  .to-contact a:hover{
    background-color: #429044;
    padding: 10px;
    border-radius: 20px;
    border-bottom: none;
    text-decoration: none;
    color: rgb(255, 255, 255);
  }

  .to-top{
    padding-top: 50px;
    font-weight: bold;
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
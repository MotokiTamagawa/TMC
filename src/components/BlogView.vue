<template>
  <div class="blog-container">
    <div class="contents-title-container">
      <div class="contents-title">NEWS/BLOG</div>
      <span class="sub-title">お知らせ/ブログ</span>
      <hr>
    </div>

    <div class="news-contents">
      <iframe class="note-embed" src="https://note.com/embed/notes/na9643ea61187" style="border: 0; display: block; max-width: 99%; width: 700px; padding: 0px; margin: 20px auto; position: static; visibility: visible;" height="auto"></iframe>
      <iframe class="note-embed" src="https://note.com/embed/notes/n42ccadfcd516" style="border: 0; display: block; max-width: 99%; width: 700px; padding: 0px; margin: 20px auto; position: static; visibility: visible;" height="auto"></iframe>
      <div v-if="!this.more" @click="showMore" style="margin: 30px 0px ;"><span class="btn">他の記事も見る</span></div>

      <div v-if="this.more">
        <iframe class="note-embed" src="https://note.com/embed/notes/ne5f514b38a99" style="border: 0; display: block; max-width: 99%; width: 700px; padding: 0px; margin: 20px auto; position: static; visibility: visible;" height="auto"></iframe>
        <iframe class="note-embed" src="https://note.com/embed/notes/n318a6a4c142e" style="border: 0; display: block; max-width: 99%; width: 700px; padding: 0px; margin: 20px auto; position: static; visibility: visible;" height="auto"></iframe>
        <br>
        <div @click="showMore"><spna class="btn" style="margin: 60px 0px;">閉じる</spna></div>
      </div>
      <br>
      <hr>
    </div>

    <div class="sp-news-contents">
      <iframe class="note-embed" src="https://note.com/embed/notes/na9643ea61187" style="border: 0; display: block; max-width: 100%; width: 100%; padding: 0px; margin: auto; position: static; visibility: visible;" height="200"></iframe>
      <iframe class="note-embed" src="https://note.com/embed/notes/n42ccadfcd516" style="border: 0; display: block; max-width: 100%; width: 100%; padding: 0px; margin: auto; position: static; visibility: visible;" height="200"></iframe>


      <div v-if="!this.more" @click="showMore" style="margin: 30px 0px ;"><span class="btn">他の記事も見る</span></div>
      <div v-if="this.more">
        <iframe class="note-embed" src="https://note.com/embed/notes/ne5f514b38a99" style="border: 0; display: block; max-width: 100%; width: 100%; padding: 0px; margin: auto; position: static; visibility: visible;" height="200"></iframe>
        <iframe class="note-embed" src="https://note.com/embed/notes/n318a6a4c142e" style="border: 0; display: block; max-width: 100%; width: 100%; padding: 0px; margin: auto; position: static; visibility: visible;" height="200"></iframe>
        <br>
        <div @click="showMore"><spna class="btn" style="margin: 60px 0px;">閉じる</spna></div>
      </div>
      <br>
      <hr>
    </div>

  </div>
</template>


<script>

export default {
  data() {
    return{
      more: false
    }
  },
  methods: {
    showMore () {
      this.more = !this.more
    }
  }
}

</script>


<style scoped>

.blog-container {
  padding-top: 100px;
  padding-bottom: 0px;
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
.news-contents {
  margin: auto;
  text-align: center;
  width: 1000px;
}

.btn {
  background-color: rgb(223, 223, 223);
  padding: 10px;
  border-radius: 20px;
  font-size: 20px;
  cursor: pointer;
}

.btn:hover {
  color: rgb(133, 133, 133);
}

.p-noteEmbed  {
  margin: 0;
}

.sp-news-contents {
  display: none;
}

@media screen and (max-width: 800px) {
	/* 480px以下に適用されるCSS（スマホ用） */

  .news-contents {
    display: none;
  }

  .sp-news-contents {
    display: block;
  }



}


</style>
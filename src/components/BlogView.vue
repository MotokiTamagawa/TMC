<template>
  <div class="blog-container">
    <div class="contents-title-container">
      <div class="contents-title">NEWS/BLOG</div>
      <span class="sub-title">お知らせ/ブログ</span>
      <hr>
    </div>

    <div class="news-contents">
      <iframe class="note-embed" src="https://note.com/embed/notes/n318a6a4c142e" style="border: 0; display: block; max-width: 99%; width: 700px; padding: 0px; margin: auto; position: static; visibility: visible;" height="250"></iframe>
      <hr>
    </div>

    <div class="sp-news-contents">
      <iframe class="note-embed" src="https://note.com/embed/notes/n318a6a4c142e" style="border: 0; display: block; max-width: 100%%; width: 100%; padding: 0px; margin: auto; position: static; visibility: visible;" height="200"></iframe>
      <hr>
    </div>

  </div>
</template>


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
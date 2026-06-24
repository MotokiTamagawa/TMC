<template>
  <div class="blog-container">
    <div class="contents-title-container">
      <div class="contents-title">NEWS/BLOG</div>
      <span class="sub-title">お知らせ/ブログ</span>
      <hr>
    </div>
    <!-- ローディング表示 -->
    <div v-if="loading" class="loading">読み込み中...</div>
    <div v-else class="article-grid">
      <div v-for="article in articles" :key="article.id" class="article-card">
        <!-- 💡 画像の表示 (eyecatchがある場合のみ) -->
        <div class="thumbnail-wrapper" v-if="article.eyecatch">
          <img :src="article.eyecatch" :alt="article.name" class="thumbnail" />
        </div>

        <div class="content">
          <h3>
            <a :target="'_blank'" :href="article.noteUrl">{{ article.name }}</a>
          </h3>
          <p class="date">公開日: {{ formatDate(article.publishAt) }}</p>
        </div>
      </div>
    </div>

    <div v-if="!loading && !error" class="more-button-container">
      <a
        href="https://note.com/teramachi_office/all"
        target="_blank"
        rel="noopener noreferrer"
        class="more-button"
      >
        全ての記事を見る
      </a>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
const articles = ref([]);
const loading = ref(true);
const error = ref(null);
const fetchNoteArticles = async () => {
  try {
    // 💡 自分のドメイン（/api-note）に向けてリクエストを投げる
    const response = await fetch('/api-note/api/v2/creators/teramachi_office/contents?kind=note&page=1');
    if (!response.ok) {
      throw new Error('データの取得に失敗しました');
    }
    const json = await response.json();
    articles.value = json.data.contents;
  } catch (err) {
    error.value = err.message;
    console.log(error.value)
  } finally {
    loading.value = false;
  }
};
// 日付のフォーマットを整える便利関数
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ja-JP');
};
onMounted(() => {
  fetchNoteArticles();
});
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


.note-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: sans-serif;
}
.article-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
.article-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
}
.thumbnail-wrapper {
  width: 100%;
  height: 150px;
  overflow: hidden;
}
.thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 縦横比を維持して枠いっぱいに表示 */
}
.content {
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.content h3 {
  margin: 0 0 10px 0;
  font-size: 1.1rem;
}
.content a {
  color: #333;
  text-decoration: none;
}
.content a:hover {
  text-decoration: underline;
}
.date, .likes {
  font-size: 0.85rem;
  color: #666;
  margin: 5px 0 0 0;
}
.loading, .error {
  text-align: center;
  padding: 40px;
  font-size: 1.2rem;
}
.error { color: red; }



.more-button-container {
  margin-top: 40px;
  text-align: center;
}

.more-button {
  display: inline-block;
  padding: 12px 32px;
  border: 1px solid #000;
  color: #000;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.1em;
  transition: all 0.3s ease;
}

.more-button:hover {
  background-color: #000;
  color: #fff;
}

</style>
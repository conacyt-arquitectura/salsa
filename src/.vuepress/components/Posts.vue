<template>
  <div class="posts" v-if="posts.length">
    <div class="post" v-for="post in posts">
      <div class="post-img">
        <initials :username="post.frontmatter.title"></initials>
      </div>
      <div class="post-desc">
        <router-link :to="post.path">
          <h4>{{ post.frontmatter.title }}</h4>
        </router-link>
        <p>{{ post.frontmatter.description }}</p>
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">
          <em>publicado {{ post.frontmatter.date | timeElapsed }}</em>
          <em>por {{ post.frontmatter.author }}</em>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["page"],
  computed: {
    posts() {
      let currentPage = this.page ? this.page : this.$page.path;
      let posts = this.$site.pages
        .filter((x) => {
          return x.path.match(new RegExp(`(${currentPage})(?=.*html)`));
        })
        .sort((a, b) => {
          return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
        });
      return posts;
    },
  },
};
</script>
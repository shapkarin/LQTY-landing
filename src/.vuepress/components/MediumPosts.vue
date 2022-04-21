<template>
  <div>
    <h2 class="mt-10">{{ title }}</h2>
    <a
      v-for="(post, index) in posts"
      :href="post.link"
      target="_blank"
    >
      <img
        height="250"
        :src="post.thumbnail"
      />
      <h2 class="hide-text">{{ post.title }}</h2>
    </a>
  </div>
</template>

<script>
export default {
  name: 'MediumPosts',

  data () {
    return {
      posts: []
    }
  },
  
  props: {
    length: {
      required: true,
      type: Number,
    },
    title: {
      required: true,
      type: String,
    }
  },

  beforeMount() {
    this.getPosts();
  },

  methods: {
    async getPosts () {
      const tag = 'aeternity'; // change to other tag
      const url = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Ftag%2F${tag}`;
      let { items } = await (await fetch(url)).json();
      items = items.filter(({ author }) => author === 'æternity').slice(0, this.length);
      this.posts = items;
    },
  }
}
</script>

<style lang="stylus" scoped>
.hide-text {
  width: 257px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
}
</style>

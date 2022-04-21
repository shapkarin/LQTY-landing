<template>
  <div>
    <h2 class="mt-10">{{ title }}</h2>
    <div class="grid">
      <a
        class="item"
        v-for="(post, index) in posts"
        :href="post.link"
        target="_blank"
      >
        <div class="crop">
          <img
            height="250"
            :src="post.thumbnail"
            class="blog-grid-item-image"
          />
        </div>
        <h2 class="title">{{ post.title }}</h2>
      </a>
    </div>
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
      // items = items.filter(({ author }) => author === 'æternity').slice(0, this.length);
      this.posts = items;
    },
  }
}
</script>

<style lang="stylus" scoped>
.hide-text 
  width 257px
  display inline-block
  white-space nowrap
  overflow hidden !important
  text-overflow ellipsis

.grid
  display flex
  flex-wrap wrap
  flex-direction row
  align-items auto
  align-content start
  justify-content space-between

  
  @media (max-width 800px)
    flex-direction column

  .item
    display block
    margin-bottom 1.2rem
    flex 0 1 32%
    border 1px solid #eaecef

    .title
      font-size 20px
      max-width 240px
      padding 0
      margin 0
      display block
      white-space nowrap
      overflow hidden !important
      text-overflow ellipsis
      color $accentColor
      padding 0.5rem 0.3rem

    .blog-grid-item-image
      width 100%
      height auto

    .crop
      border-bottom 1px solid #eaecef
      @media (min-width 800px)
          height 135px
          overflow hidden

  .title
    display block
    border-bottom none

</style>

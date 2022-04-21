<template>
  <div class="faq">
    <h2 class="title">{{title}}</h2>
    <Item v-for="(item, i) in data" :key="'faq_' + i" :item="item" />
  </div>
</template>

<script>
import Item from './Item.vue'

export default {
  name: 'Home',
  components: { Item },
  props: {
    data: {
      required: true,
    }
  },
  data () {
    return {
      open: false,
    }
  },
  computed: {
    title () {
      return this.$page.frontmatter.FAQTitle
    },
  },
  methods: {
    toggle (value) {
      this.open = !this.open;
    },
  }
}
</script>

<style lang="stylus" scoped>
.faq
  max-width 38rem
  margin 4rem auto

  .title
    font-size 2.4rem
    margin-bottom 1.2rem
    text-align center
</style>
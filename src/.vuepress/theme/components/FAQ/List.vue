<template>
  <div class="FAQ">
    <h2>{{title}}</h2>
    <Item v-for="(item, i) in data" :key="'faq_' + i" :item="item" />
  </div>
</template>

<script>
import Item from '@theme/components/FAQ/Item.vue'

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
.FAQ
  width 500px
  margin 0 auto
</style>
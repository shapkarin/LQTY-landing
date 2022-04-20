<template>
  <div>
    <h2>Recent updates</h2>
   
  </div>
</template>

<script>
export default {
  name: 'DropdownTransition',

  data () {
    return {
      posts: []
    }
  },

  mounted() {
    this.getPosts();
  },

  methods: {
    async getPosts () {
      // https://medium.com/tag/aeternity-lqty/latest
      const tag = 'aeternity';
      const url = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Ftag%2F${tag}`;
      let { items } = await (await fetch(url)).json();
      items = items.filter(({ author }) => author === 'æternity');
      this.data = items;
    },
  }
}
</script>

<style lang="stylus">
.dropdown-enter, .dropdown-leave-to
  height 0 !important

</style>

<template>
  <section>
    <h3 @click="toggle" class="title">
      {{item.title}}
      <img :src="$withBase('/plus.svg')" v-bind:class="{ iconActive: isOpen, icon: true }"/>
    </h3>
    <article v-show="isOpen" class="details">{{item.details}}</article>
  </section>
</template>

<script>
// todo: add icons
export default {
  name: 'Home',
  props: {
    item: {
      required: true,
    }
  },
  data () {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggle (value) {
      this.isOpen = !this.isOpen;
    },
  }
}
</script>

<style lang="stylus" scoped>
.title
  font-size 1.4rem
  border-bottom 1px solid #b9b9b9
  display flex
  cursor pointer
  padding-top 1.2rem
  padding-bottom 1.4rem
  user-select none
  line-height 1rem
  font-weight 300
  line-height 1
  margin 0

.icon
  margin-left auto
  width 1.2rem

.iconActive
  transform rotate(45deg)

.details
  margin 1rem 0
</style>
<template>
  <div>
    <div @click="toggle" class="title">
      {{item.title}}
      <img :src="$withBase('/plus.svg')" v-bind:class="{ iconActive: isOpen, icon: true }"/>
    </div>
    <div v-show="isOpen" class="details">{{item.details}}</div>
  </div>
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
  margin 0 0 1.2rem 0
  padding-bottom 1.4rem
  user-select none

.icon
  margin-left auto
  width 18px

.iconActive
  transform rotate(45deg)

.details
  margin-bottom 2rem
</style>
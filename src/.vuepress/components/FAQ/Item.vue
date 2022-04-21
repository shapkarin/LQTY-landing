<template>
  <div>
    <div @click="toggle" class="title">
      {{item.title}}
      <div v-bind:class="{ iconActive: isOpen, icon: true }">+</div>
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
  margin 0 0 0.8rem 0
  padding-bottom 0.3rem

.icon
  margin-left auto

.iconActive
  transform rotate(45deg)

.details
  margin-bottom 1rem
</style>
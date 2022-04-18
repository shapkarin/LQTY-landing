<template>
  <div>
    <div @click="toggle" class="title">
      {{item.title}}
      <div v-bind:class="{ iconActive: isOpen, icon: true }">+</div>
    </div>
    <div v-show="isOpen">{{item.details}}</div>
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
  font-size 27px;
  cursor pointer
  border-bottom 1px solid gray
  display flex

.icon
  margin-left auto

.iconActive
  transform rotate(45deg)
</style>

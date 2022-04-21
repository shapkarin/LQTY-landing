---
title: Features
description: Features
lang: en-US
---
<template>
<div>
  <div class="features-hero">
    <h1>Features</h1>
    <span>Some text</span>
  </div>
  <div class="banner">
    <div
      slot="icon"
      color="deep-purple accent-4"
      size="40"
    >
      <div
        color="white"
      >
        mdi-lock
      </div>
    </div>
    Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.
  </div>
  <div>
    <div
      v-model="tab"
      align-with-title
    >
      <div color="blue"></div>
      <div
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </div>
    </div>
    <div v-model="tab">
      <div
        v-for="item in items"
        :key="item"
        eager
      >
        <div flat>
          <div v-text="text"></div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    data () {
      return {
        tab: null,
        items: [
          'Feature1', 'Feature2', 'Feature3', 'Feature4', 'Feature5',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>

<style lang="stylus" scoped>
.features-hero
  display flex
  width auto
  height auto
  margin-top 220px
  margin-bottom 104px
  flex-direction column
  text-align center

  h1
    font-size 71px

.banner
  display flex
  padding-top 60px
  border-top 1px solid #b6b6b6
  border-bottom 1px solid #b6b6b6
  justify-content center
  align-self center

</script>
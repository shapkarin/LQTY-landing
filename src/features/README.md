---
title: Features
description: Features
lang: en-US
---
<template>
  <div class="feature-page-intro">
    <Hero title="Lorem ipsum dolor" description="Nulla felis nunc, commodo ut condimentum non, hendrerit eu elit." >
      <NavLink
        class="promo-button"
        :item="{
          link: '/docs/',
          text: 'Documentation',
          rel: 'canonical'
        }"
      />
    </Hero>
  <div class="banner">
    <h2>
      Duis malesuada malesuada
    </h2>
    <div>
      Mauris imperdiet justo vitae maximus venenatis. In hac habitasse platea dictumst. Aliquam erat nibh, imperdiet eu aliquam in, faucibus quis ex. Mauris aliquam ornare mi, non viverra nibh lacinia id. Nulla luctus mi eget diam venenatis, vel pulvinar purus pharetra. Nam accumsan malesuada elementum.
    </div>
  </div>
  </div>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue';

export default {
  components: {
    NavLink
  }
}
</script>

<style lang="stylus" scoped>
.banner
  display flex
  flex-direction column
  justify-content center
  align-self center
  margin 6rem 0
  padding-bottom 2rem

.feature-page-intro
  padding $navbarHeight 2rem 0
</style>
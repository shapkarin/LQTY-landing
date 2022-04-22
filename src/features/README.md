---
title: Features
description: Features
lang: en-US
---
<template>
  <div class="padding">
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
      Morbi viverra congue libero, eget ultricies odio congue eget. Ut vitae urna sit amet purus congue sollicitudin molestie vel lectus. Quisque accumsan ante sit amet commodo sagittis. Cras tempor lorem a gravida elementum.
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

<style lang="stylus" socped>
.banner
  display flex
  flex-direction column
  justify-content center
  align-self center
  margin 6rem 0
  padding-bottom 2rem

.padding
  padding $navbarHeight 2rem 0
</style>
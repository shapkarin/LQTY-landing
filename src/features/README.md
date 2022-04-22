---
title: Features
description: Features
lang: en-US
---
<template>
  <div class="home">
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

<style scoped>
/* todo: styles does not work in vuepress .md file  */
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

.padding
  padding $navbarHeight 2rem 0
</script>
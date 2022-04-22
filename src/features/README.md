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
    <section class="tabs">
      <nav role="tablist">
        <h3></h3>
      </nav>
      <section role="region">
        <article>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor urna velit, efficitur ultricies leo convallis sit amet. Mauris eleifend facilisis ex et ultrices. Pellentesque at ullamcorper augue. Quisque gravida velit et tristique lacinia. Aenean varius nunc scelerisque purus mattis, vitae iaculis erat elementum. Quisque maximus felis vestibulum nibh condimentum, ut sodales mauris lacinia.
        </article>
        <article>
          Fusce lacinia nisl nisi. Cras vitae tellus quis tellus mollis commodo consequat quis diam. Fusce lobortis varius diam a volutpat. Nunc id venenatis urna. Donec libero orci, blandit et quam pharetra, rutrum eleifend neque. Fusce elit ex, tincidunt a dignissim quis, pellentesque ut nunc.
        </article>
        <article>
          Quisque dui augue, ultrices eget lacinia non, pellentesque vitae enim. Nunc pharetra ut ex et dapibus. Mauris ligula tortor, viverra nec tortor et, finibus feugiat enim. Vivamus ipsum nulla, imperdiet et tincidunt et, semper ut nulla. Donec ultricies mauris non scelerisque consequat.
        </article>
        <article>
          Fusce et nisi sit amet urna eleifend egestas et et lorem. Morbi varius, sapien sollicitudin tempus placerat, elit orci imperdiet lorem, ut vulputate turpis purus nec purus. Morbi viverra in lacus at euismod. Aliquam sit amet mauris turpis.
        </article>
      </section>
    </section>
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
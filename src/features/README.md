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
    <section>
      <h2>Suspendisse ultrices</h2>
      <section class="tabs">
        <section class="tabs-links">
          <a href="#lorem" class="tabs-link" @click="selectTab">Lorem ipsum dolor</a>
          <a href="#fusce" class="tabs-link" @click="selectTab">Fusce lacinia nisl</a>
          <a href="#quisque" class="tabs-link" @click="selectTab">Quisque dui</a>
          <a href="#nisi" class="tabs-link" @click="selectTab">Fusce et nisi</a>
          <a href="#aliquam" class="tabs-link" @click="selectTab">Aliquam sit</a>
        </section>
        <section class="tabs-content">
          <article id="lorem" v-show="tab === 'lorem'">
            <h3>Lorem ipsum</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor urna velit, efficitur ultricies leo convallis sit amet. Mauris eleifend facilisis ex et ultrices. Pellentesque at ullamcorper augue. Quisque gravida velit et tristique lacinia. Aenean varius nunc scelerisque purus mattis, vitae iaculis erat elementum. Quisque maximus felis vestibulum nibh condimentum, ut sodales mauris lacinia.
          </article>
          <article id="fusce" v-show="tab === 'fusce'">
            <h3>Fusce lacinia nisl</h3>
            Fusce lacinia nisl nisi. Cras vitae tellus quis tellus mollis commodo consequat quis diam. Fusce lobortis varius diam a volutpat. Nunc id venenatis urna. Donec libero orci, blandit et quam pharetra, rutrum eleifend neque. Fusce elit ex, tincidunt a dignissim quis, pellentesque ut nunc.
          </article>
          <article id="quisque" v-show="tab === 'quisque'">
            <h3>Quisque dui</h3>
            Quisque dui augue, ultrices eget lacinia non, pellentesque vitae enim. Nunc pharetra ut ex et dapibus. Mauris ligula tortor, viverra nec tortor et, finibus feugiat enim. Vivamus ipsum nulla, imperdiet et tincidunt et, semper ut nulla. Donec ultricies mauris non scelerisque consequat.
          </article>
          <article id="nisi" v-show="tab === 'nisi'">
            <h3>Fusce et nisi</h3>
            Fusce et nisi sit amet urna eleifend egestas et et lorem. Morbi varius, sapien sollicitudin tempus placerat, elit orci imperdiet lorem, ut vulputate turpis purus nec purus. Morbi viverra in lacus at euismod. Aliquam sit amet mauris turpis.
          </article>
          <article id="aliquam" v-show="tab === 'aliquam'">
            <h3>Aliquam sit</h3>
            Etiam lacus felis, eleifend vel mauris eu, porttitor porta dolor. Suspendisse ut ultricies neque. Vestibulum posuere augue leo, nec iaculis leo molestie nec. Sed convallis turpis arcu, interdum dictum tellus porta nec. Proin lobortis condimentum ligula, id tempus est laoreet in. Quisque massa enim, tempus vitae mattis vel, rhoncus a purus.
          </article>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue';

export default {
  components: {
    NavLink
  },
  data() {
    return {
      tab: 'lorem',
    }
  },

  methods: {
    selectTab(event) {
      event.preventDefault();
      this.tab = event.target.href.split("#").pop();
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  display flex
  flex-direction column
  justify-content center
  align-self center
  margin 6rem 0 3rem
  padding-bottom 2rem

.feature-page-intro
  padding $navbarHeight 2rem 0

.tabs
  display flex

  .tabs-links
    display block
    width 20%

  .tabs-link
    display block
    margin-bottom 1rem

  .tabs-content
    width 80%

    > article > h3
      margin 0 0 1rem
</style>
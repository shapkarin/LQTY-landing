<template>
  <div class="hero">
    <h1
      v-if="title !== null"
      id="main-title"
    >
      {{ title }}
    </h1>

    <p
      v-if="description !== null"
      class="description"
    >
      {{ description }}
    </p>

    <p
      class="action"
    >
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
  }
}
</script>


<style lang="stylus" socped>
.hero
  text-align center
  img
    max-width: 100%
    max-height 280px
    display block
    margin 3rem auto 1.5rem
  h1
    font-size 3rem
  h1, .description, .action
    margin 1.8rem auto
  .description
    max-width 35rem
    font-size 1.6rem
    line-height 1.3
    color lighten($textColor, 40%)

.hero h1
  margin 3.7rem auto 1.8rem !important

.hero img
  max-width 450px!important
</style>
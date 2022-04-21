<template>
  <a
    href="https://aeternity.us15.list-manage.com/subscribe/post?u=83a504836fa768f10619d053c&amp;id=c2d8c3ba71"
    target="_blank"
    class="action-button"
  >
    Subscribe
  </a>
</template>
<style lang="stylus" socped>
.action-button
  display inline-block
  font-size 1.2rem
  color #fff
  background-color $accentColor
  padding 0.8rem 1.6rem
  border-radius 8px
  transition background-color .1s ease
  box-sizing border-box
  border-bottom 1px solid darken($accentColor, 10%)
  outline none
  border-top none
  border-right none
  border-left none
  cursor pointer
  &:hover
    background-color lighten($accentColor, 10%)

@media (max-width: $MQMobileNarrow)
  .action-button
    font-size 1rem
    padding 0.6rem 1.2rem
</style>
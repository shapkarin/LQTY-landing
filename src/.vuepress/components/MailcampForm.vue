<template>
  <div class="form">
    <input type="text" class="input" />
    <button class="action-button">
      Subscribe
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
    }
  },
  beforeMount(){
    window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='MMERGE1';ftypes[1]='text';fnames[2]='MMERGE2';ftypes[2]='text';
  },
  methods: {
    send(){
      const url = 'https://aeternity.us15.list-manage.com/subscribe/post?u=83a504836fa768f10619d053c&amp;id=c2d8c3ba71'

    }
  }
}
</script>

<style lang="stylus" socped>
.form
  display flex
  align-items center
  justify-content center

.input
  outline-color #bfbfbf !important
  font-size 1.2rem
  padding 0.768rem 1rem
  width 12rem
  border-top-left-radius 8px
  border-bottom-left-radius 8px
  outline 1px solid #eaecef
  :focused
    outline none

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
  border-top-left-radius 0
  border-bottom-left-radius 0

  &:hover
    background-color lighten($accentColor, 10%)

@media (max-width: $MQMobileNarrow)
  .input
    width 9rem
</style>
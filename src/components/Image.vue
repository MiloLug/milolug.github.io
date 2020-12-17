<template>
  <div class="Image" :class={clickable}>
    <img :src="src" @click="redirect">
  </div>
</template>

<script>
export default {
  name: "Image",
  props: {
    src: String,
    originalLink: String,
    clickable: {
      default: true,
      type: Boolean
    }
  },
  methods: {
    redirect(){
      if(!this.clickable) return;
      window.open(this.original_link || this.src, "_blank");
    }
  }
}
</script>

<style lang="scss" scoped>
.Image{
  &.clickable img{
    cursor: pointer;
  }
  img{
    width: 100%;
    box-shadow:
      0 20px 60px 0 transparentize($primary_color, .9),
      0 16px 36px 0 transparentize($primary_dark_color, .9),
      -8px -8px 1px transparentize($primary_color, .2),
      8px 8px 1px transparentize($primary_dark_color, .5);
      

    transition: box-shadow .2s, transform .1s;

    &:hover{
      box-shadow:
        0 20px 60px 0 transparentize($primary_color, .9),
        0 16px 36px 0 transparentize($primary_dark_color, .9),
        -7px -10px 1px $primary_color,
        2px 2px 5px $primary_dark_color;

      transform: translate(1px, 1px);
    }
  }
}
</style>
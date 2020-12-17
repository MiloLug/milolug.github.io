<template>
  <div class="Link" :class="{inline}" @click="redirect">
    <div class="description" v-if="description">
      {{description}}
    </div>
    <div class="itself">
      {{text ? text : href}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Link",
  props: {
    inline: {
      default: true,
      type: Boolean
    },
    useRouter: Boolean,
    description: String,
    href: String,
    text: String
  },
  methods: {
    redirect(){
      if(this.useRouter){
        this.$router.push({path: this.href});
      }else{
        window.open(this.href, "_blank");
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.Link, .description, .itself{
  color: inherit;
  display: inline-block;
  width: auto;
  cursor: pointer;
}
.Link{
  &.inline{
    .itself{
      border-bottom: 2px solid black;
      background: transparent;
      transition: background-color .2s, box-shadow;
      &:hover{
        //border-bottom: 2px dotted black;
        background: $primary_color;
      }
    }
  }
  &:not(.inline){
    margin: 10px;
    padding: 5px 10px;

    .description{
      margin-right: 5px;
      border-left: 2px solid black;
      padding: 0px 5px;
      
      background: $primary_color;
      transition: border-width .2s;
    }

    &:hover{
      //outline: 2px dashed black;
      .description{
        border-left-width: 5px;
      }
    }
  }
}
</style>
<template>
  <h2 class="ActiveTitle" :class="[name]" @click="goToBlock('.'+name)">
    {{text}}
  </h2>
</template>

<script>
export default {
  name: "ActiveTitle",
  props: {
    name: Boolean,
    text: String
  },
  methods: {
    goToBlock(selector) {
			document.querySelector(selector).scrollIntoView({ behavior: 'smooth', block: 'start'});
    }
  }
}
</script>

<style lang="scss" scoped>
.ActiveTitle{
  display: inline-flex;
  padding: 4px 7px;
  margin: 10px 0px;
  align-items: center;
  justify-content: center;
  
  cursor: pointer;
  
  font-weight: normal;
  text-transform: uppercase;
  text-align: center;
  font-size: 15px;
  
  color: $highlighted_text_color;
  background: $highlighted_bg;

  box-shadow: 0px 0px 0px transparent;
  transition: box-shadow 1s;

  &:hover{
    box-shadow: 4px 4px 0px $primary_color;

    transition: box-shadow .5s;
  }
}
</style>
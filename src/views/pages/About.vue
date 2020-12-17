<template>
  <div id="about">
    <h1>Hi! I'm Michael and you are on my page.</h1>
    <div class="info-block">
      <ActiveTitle name="whoiam" text="Who I am?" />
      <br>
      I am young software engineer now, but during my 5-years practice (only 3 - with real clients), I have been involved in a large number of interesting projects.
      <br>
      <br>
      There are <b>web</b> applications as well as <b>mobile</b> or simple <b>desktop</b> applications, bots, CRM and some utilities among the projects I weorked on.
      <br>
      <br>
      Most of the time I use <b class="marked">JavaScript</b> with it's environment: such technologies as <b class="marked">Node JS</b>, <b class="marked">Vue</b> and <b class="marked">React</b>.
    </div>

    <div class="info-block">
      <ActiveTitle name="myskills" text="My skills and aducations!" />
      <br>
      In fact, programming is not only my source of income, but also a hobby and what I learn and practice every day.
      <br>
      Now I'm just a third year student at a college - Rocket-and-Space Engineering College of DNU. But I can thank it for the skills I got: <b class="marked">C/C++</b>, <b class="marked">Assembler Language</b> and other low-level things, because now I able to see, how some things work and how to do my work bettet. And, probably, I would not got it with Web engineering.
      <br>
      <br>
      During the time on freelance, I have been working with projects of different sizes and structures, desktop and web applications.
      To do the work, I use such technologies as Vue, React, NodeJS and Wordpress.
      <br>
      Also, when developing something with a PHP back-end, I often use Red Bean for access the DB.
      <br>
      <br>
      For for my non-web projects were been used such languages as:
      <br>
      - <b class="marked">C++</b> (GLFW and GLEW libraries) - building a GUI framework.
      <br>
      - <b class="marked">Kotlin, Java</b> - a small bootstrapper for the applications, written with web technologies.
      <br>
      - <b class="marked">Assembler Language</b> - a system bootloader with some kind of a text interface.
      <br>
      Ofcourse I do not claim to know all the languages perfect. You can say even that I'm beginner in Kotlin and Java. But in critical situations, anything is possible...
      <br>
      <br>
      You can view all these on the main page (<Link href="/" text="works" :use-router="true" @click="goToBlock('header')"/>).
    </div>

    <div class="info-block">
      <ActiveTitle name="my-philosophy" text="Philosophy" />
      <br>
      It's easy: the developer must be able to do what he has to do.
    </div>
  </div>
</template>

<script>
import Link from '@/components/Link.vue';
import ActiveTitle from '@/components/ActiveTitle.vue';

export default {
  name: "About",
  components: {
    Link,
    ActiveTitle
  },

  methods: {
    goToBlock(selector) {
			document.querySelector(selector).scrollIntoView({ behavior: 'smooth', block: 'start'});
    },
    withBrTags(str) {
      return str.replace(/(\r)*\n/g, '<br>')
    }
  },
  created(){
    window.gg = this.$router;
  }
}
</script>

<style lang="scss" scoped>
#about{
  padding: 20px 70px;
  min-width: 100%;

  .marked{
    display: inline-block;
    padding: 2px 3px;
    margin: 0px 3px;

    color: $primary_dark_color;
    background: $primary_color;
    box-shadow: 2px 2px 2px transparent;

    transition: box-shadow 1s;

    &:hover{
      box-shadow: 2px 2px 2px black;

      transition: box-shadow 5s;
    }
  }

  .info-block{
    margin: 20px 0px;
    margin-bottom: 60px;
  }
}

@media screen and (max-width: 950px){
  #about{
    padding: 20px 40px;
    
  }
}

</style>
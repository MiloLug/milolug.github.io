<template>
  <div id="Contacts">
    <h1>My contacts:</h1>
    <div class="info-block">
      <ActiveTitle name="main-contacts" text="Main" />
      <br>
      If you want to contact, just write in Telegram or call me:
      <br>
      <br>
      <address>
        <Link 
          :inline="false"
          description="Phone"
          href="tel:+380661623589"
          text="+380 (66) 162-35-89"
        />
        <br>
        <Link 
          :inline="false"
          description="Telegram"
          href="https://t.me/dedepere"
          text="@dedepere"
        />
      </address>
    </div>

    <div class="info-block">
      <ActiveTitle name="add-contacts" text="Additional" />
      <br>
      Also you can use the next contacts:
      <br>
      <br>
      <address>
        <Link 
          :inline="false"
          description="Phone"
          href="tel:+380631642397"
          text="+380 (63) 164-23-97"
        />
        <br>
        <Link 
          :inline="false"
          description="E-mail"
          href="mailto:work.michael.gonchar@gmail.com"
          text="work.michael.gonchar@gmail.com"
        />
      </address>
    </div>
  </div>
</template>

<script>
import Link from '@/components/Link.vue';
import ActiveTitle from '@/components/ActiveTitle.vue';

export default {
  name: "Contacts",
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
#Contacts{
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
  #Contacts{
    padding: 20px 40px;
    
  }
}

</style>
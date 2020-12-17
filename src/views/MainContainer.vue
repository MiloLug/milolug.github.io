<template>
    <div id="main-container">
      <div class="container" :class="{'out-content': $route.path === '/'}">
        <header>
          <nav>
            <router-link to="/">Works</router-link>
            <router-link to="/about">About</router-link><br>
            <router-link to="/contacts">Contacts</router-link><br>
          </nav>
        </header>
        <router-view />
      </div>
    </div>
</template>

<script>
export default {
  name: "MainContainer"
}
</script>

<style lang="scss">
address{
  color: inherit;
  text-decoration: none;
  font-style: inherit;
}


$rounding_small: 5px;

#main-container{
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;

  align-items: center;
  flex-direction: column;
  overflow: auto;

  &>.container{
    position: absolute;
    width: 50%;
    left: 25%;
    max-width: 900px;
    min-width: 800px;
    margin: 20px 0px;
    min-height: 50%;

    background: $plane_bg;
    border-radius: $rounding_small;
    box-shadow: 0 20px 60px 0 rgba(186,200,227,.1),0 16px 36px 0 rgba(186,200,227,.3);
    
    transition: left .3s;

    header {
      widows: 100%;
      height: 100px;
      display: flex;
      align-items: flex-end;

      border-radius: $rounding_small $rounding_small 0px 0px;
      background: $header_bg;

      nav{
        min-width: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;

        a{
          color: inherit;
          text-decoration: none;
          padding: 5px 10px;
          text-transform: uppercase;
          border-bottom: 2px solid $highlighted_bg;
          margin: 0px 5px;
          transition: border-width .2s;
          
          &:hover:not(.router-link-exact-active){
            border-bottom-width: 5px;
          }
          &.router-link-exact-active{
            background: $highlighted_bg;
            color: $highlighted_text_color;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 1800px){
  #main-container > .container:not(.out-content){
    left: calc((100% - 900px)/2);
  }
}
@media screen and (max-width: 1600px){
  #main-container > .container:not(.out-content){
    left: calc((100% - 800px)/2);
  }
}

@media screen and (max-width: 1580px){
  #main-container > .container.out-content{
    left: 20%;
  }
}
@media screen and (max-width: 1495px){
  #main-container > .container.out-content{
    left: 15%;
  }
}
@media screen and (max-width: 1400px){
  #main-container > .container.out-content{
    left: 10%;
  }
}
@media screen and (max-width: 1400px){
  #main-container > .container.out-content{
    left: 10%;
  }
}

@media screen and (max-width: 1320px){
  #main-container > .container, #main-container > .container.out-content{
    min-width: 900px;
    left: calc((100% - 900px)/2) !important;
  }
}

@media screen and (max-width: 950px){
  #main-container > .container, #main-container > .container.out-content{
    min-width: 100%;
    border-radius: 0;
    margin: 0;
    left: 0 !important;

    header{
      border-radius: 0;
    }
  }
}
</style>
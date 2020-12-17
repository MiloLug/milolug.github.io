<template>
  <div id="works">
    <div class="work" v-for="(work, i) in works" v-bind:key="work.title">
      <ActiveTitle :name="'work-'+i" :text="work.title"/>
      <div class="work-row">
        <div class="description" :class="{full: !work.img}">
          <p v-html="withBrTags(work.description)"></p>
          <div v-for="link in work.links" :key="link[1]">
            <Link
              :inline="false"
              :description="link[0]"
              :href="link[1]"
            />
            <br>
          </div>
        </div>
        <Image :src="work.img" />
      </div>
    </div>
  </div>
</template>

<script>
import Link from '@/components/Link.vue';
import ActiveTitle from '@/components/ActiveTitle.vue';
import Image from '@/components/Image.vue';

export default {
  name: "Works",
  components: {
    Link,
    ActiveTitle,
    Image
  },

  data: ()=>({
    works: [
      {
        title: "Bitrix API connector",
        description: `The task was to synchronize the list of leads between <a target="_blank" href="https://horoshop.ua/">Horoshop</a> and <a target="_blank" href="https://www.bitrix24.ua/">CRM Bitrix24</a>.
At first apex <a target="_blank" href="https://apix-drive.com/">Apix Drive</a> was used, but later it was decided to write our own solution on PHP.

Technologies used: Bitrix24, PHP (API connector)`,
        links: [
          ['The site', 'https://t2-tv.com.ua/']
        ],
        img: require('@/assets/img/work_t2_tv.png'),
      },
      {
        title: "Payment service",
        description: `In the process of working with this order, a real-time payment system was created from scratch. It has the ability to freely provide the use of the payment gateway API to several sites

Technologies used: Wordpress (back-end, routing, administrating), VueJS (UI)`,
        links: [
          ['Target site', 'https://portatil-shop.club/']
        ],
        img: require('@/assets/img/work_sabadell.png'),
      },
      {
        title: "Product catalog (stone)",
        description: `Catalog of goods and works for one company dealing with stone products.

Technologies used: Wordpress`,
        links: [
          ['Link to the site', 'https://portatil-shop.club/']
        ],
        img: require('@/assets/img/work_luxurystone.png'),
      },
      {
        title: "referral system integration",
        description: `In this project, I had to implement a referral system and integrate it with the existing business logic and CRM

Technologies used: PHP (site by itself and CRM)`,
        links: [
          ['The site', 'https://memorylight.net/']
        ],
        img: require('@/assets/img/work_memorylight.png'),
      },
      {
        title: "School journal app",
        description: `Homework-management application. Currently the app is unfinished.

Technologies used: Kotlin (UI bootstrapper), VueJS (UI of the app, with SCSS), NodeJS (Fastify, back-end)`,
        links: [
          ['Github', 'https://github.com/MiloLug/EasyDiary']
        ],
        img: require('@/assets/img/work_easydiary.png'),
      },
      {
        title: "Classic ukrainian literature",
        description: `This site can provide access to a large database of school (and not only) Ukrainian literature. Upon completion of the application above, it is planned as part of its additional services.
        
Technologies used: PHP (back-end, routing), VueJS (partially)`,
        links: [
          ['Github', 'https://github.com/MiloLug/literaturea']
        ],
        img: require('@/assets/img/work_literaturea.png'),
      }
    ]
  }),
  methods: {
    goToBlock(selector) {
			document.querySelector(selector).scrollIntoView({ behavior: 'smooth', block: 'start'});
    },
    withBrTags(str) {
      return str.replace(/(\r)*\n/g, '<br>')
    }
  },
  created(){
    
  }
}
</script>


<style lang="scss" scoped>

#works{
  padding: 20px 70px;
  min-width: 150%;

  .work{
    margin: 20px 0px;
    margin-bottom: 60px;

    .work-row{
      display: flex;
      min-width: calc(100% + 140px);
      
      .description{
        max-width: calc(66.666% - 80px);
        min-width: calc(66.666% - 80px);
      }

      .Image{
        width: calc(33.333% - 50px);
        margin-left: 30px;
        min-width: 265px;
      }
    }
  }
}

@media screen and (max-width: 1320px){
  #works{
    min-width: 100%;

    .description.full{
      max-width: calc(100% - 80px) !important;
      min-width: calc(100% - 80px) !important;
    }
  }
}

@media screen and (max-width: 950px){
  #works{
    padding: 20px 40px;
    .work-row{
      min-width: calc(100% + 20px) !important;

      .description{
        max-width: unset !important;
        min-width: unset !important;
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: 750px){
  #works{
    .work{
      .work-row{
        min-width: calc(100% - 80px) !important;
        flex-wrap: wrap;

        .description{
          max-width: 100% !important;
          min-width: 100% !important;
          margin-bottom: 30px;
        }
      }
    }
  }
}

</style>
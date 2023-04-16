<template>
  <div class="container">
    <div class="content-with-padding-xl">
      <h2 class="section-heading">
        Amazing
        <div class="highlighted-text">services.</div>
      </h2>
      <div
        class="mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto"
      >
        <div
          class="column lg:w-1/3 max-w-xs"
          v-for="(card, i) in cards"
          :key="i"
        >
          <a href="#" class="card">
            <span class="imageContainer !p-2">
              <img :src="card.imageSrc" alt="" class="!w-20 !h-20" />
            </span>
            <span class="title">{{ card.title }}</span>
            <p class="description">{{ card.description }}</p>
            <span class="link">
              <span>Learn More</span>
              <ArrowRightIcon class="icon" />
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import chefIconImageSrc from 'images/chef-icon.svg?url'
  import celebrationIconImageSrc from 'images/celebration-icon.svg?url'
  import shopIconImageSrc from 'images/shop-icon.svg?url'
  import ArrowRightIcon from 'images/arrow-right-icon.svg?component'
  import { IFeature } from 'type'

  export default defineComponent({
    props: {
      cards: {
        type: Object as PropType<IFeature[]>,
        default: [
          {
            imageSrc: shopIconImageSrc,
            title: '230+ Locations',
            description: 'Lorem ipsum donor amet siti ceali placeholder text',
            url: 'https://google.com',
          },
          {
            imageSrc: chefIconImageSrc,
            title: 'Professional Chefs',
            description: 'Lorem ipsum donor amet siti ceali placeholder text',
            url: 'https://timerse.com',
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: 'Birthday Catering',
            description: 'Lorem ipsum donor amet siti ceali placeholder text',
            url: 'https://reddit.com',
          },
        ],
      },
    },
    components: { ArrowRightIcon },
    setup() {},
  })
</script>

<style lang="scss" scoped>
  .card {
    @apply flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105;
  }
  .card .title {
    @apply mt-4 font-bold text-xl leading-none;
  }
  .card .description {
    @apply mt-4 text-sm font-medium text-secondary-300;
  }
  .card .link {
    @apply mt-auto inline-flex items-center pt-5 text-sm font-bold text-primary-300 leading-none focus:text-primary-900 transition duration-300;
  }
  .card .link .icon {
    @apply ml-2 w-4;
  }
  .card .imageContainer {
    @apply text-center rounded-full p-4 bg-gray-100;
  }
  .card .imageContainer img {
    @apply w-8 h-8;
  }
</style>

<template>
  <div class="container bg-gray-900 -mx-8">
    <div class="content-with-padding-xl">
      <div
        class="row px-8 flex items-center relative z-10 flex-col lg:flex-row text-center lg:text-left justify-center"
      >
        <div class="column-container text-container">
          <div class="sub-heading text-yellow-500 mb-4 tracking-wider">
            Download App
          </div>
          <h2
            class="section-heading text text-gray-100 lg:text-left max-w-none text-3xl leading-snug"
          >
            People around you are ordering delicious meals using the
            <span
              class="bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block"
              >Treact App.</span
            >
          </h2>
          <div
            class="links-container mt-8 lg:mt-16 flex flex-col items-center sm:block"
          >
            <a href="http://apple.com" class="link">
              <img :src="AppStore" alt="" />
              <span>App Store</span>
            </a>
            <a href="http://play.google.com" class="link">
              <img :src="GooglePlay" alt="" />
              <span>Google Play</span>
            </a>
          </div>
        </div>
        <div class="column-container mt-16 lg:mt-0 lg:ml-16 flex justify-end">
          <img :src="AppMockup" alt="" class="w-64" />
        </div>
      </div>
      <div class="absolute inset-0 overflow-hidden rounded-lg">
        <DecoratorBlob1
          class="absolute bottom-0 left-0 w-80 h-80 transform -translate-x-20 translate-y-32 text-gray-800 opacity-50"
        />
        <DecoratorBlob1
          class="absolute top-0 right-0 w-80 h-80 transform translate-x-20 -translate-y-64 text-gray-800 opacity-50"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import DecoratorBlob1 from 'images/svg-decorator-blob-9.svg?component'
  import AppStore from 'images/apple-icon.png'
  import GooglePlay from 'images/google-play-icon.png'
  import AppMockup from 'images/app-mockup.png'

  export default defineComponent({
    components: {
      DecoratorBlob1,
    },
    setup() {
      return {
        AppStore,
        GooglePlay,
        AppMockup,
      }
    },
  })
</script>

<style lang="scss" scoped>
  .column-container {
    @apply max-w-2xl;
  }
  .link {
    @apply w-56 p-3 sm:p-4 text-sm sm:text-base font-bold uppercase tracking-wider rounded-full inline-flex justify-center items-center mt-6 first:mt-0 sm:mt-0 sm:ml-8 first:ml-0 bg-gray-100 focus:bg-gray-300 text-gray-900 focus:text-gray-900 shadow hover:shadow-lg focus:shadow-outline focus:outline-none transition duration-300;
  }
  .link img {
    @apply inline-block h-8 mr-3;
  }
  .link span {
    @apply leading-none inline-block;
  }
</style>

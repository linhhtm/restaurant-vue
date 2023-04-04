<template>
  <div class="container">
    <div
      class="two-column flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24"
    >
      <div
        class="column image-column md:w-6/12 lg:w-5/12 flex-shrink-0 h-80 md:h-auto"
      >
        <div
          class="rounded bg-cover bg-center h-full"
          :style="{
            backgroundImage: `url('${data.imageSrc}')`,
          }"
        ></div>
      </div>
      <div
        class="text-column column md:w-6/12 mt-8 md:mt-0 md:ml-8 lg:ml-16 md:order-last"
      >
        <div class="text-content lg:py-8">
          <div
            class="section-heading text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight"
          >
            {{ data.title }}
          </div>
          <p
            class="description text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-4"
          >
            {{ data.description }}
          </p>
          <div class="statistics mt-6 lg:mt-8 xl:mt-16 flex flex-wrap">
            <div
              class="statistic text-lg sm:text-2xl lg:text-3xl w-1/2 mt-4 lg:mt-10 text-center md:text-left"
              v-for="item in statistics"
              :key="item.key"
            >
              <div class="value font-bold text-primary-500">
                {{ item.value }}
              </div>
              <div class="key font-medium text-gray-700">{{ item.key }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ThreeColSimpleWithImage :data="posts" />
  </div>
</template>
<script lang="ts">
  import { ThreeColSimpleWithImage } from 'components'
  import { posts } from 'mockData'
  import { defineComponent } from 'vue'

  export default defineComponent({
    setup() {
      return {
        posts,
        data: posts[1],
        statistics: [
          {
            key: 'People like this',
            value: Math.floor(Math.random() * 10000) + 1,
          },
        ],
      }
    },
    components: { ThreeColSimpleWithImage },
  })
</script>

<style lang="scss">
  .column {
    @apply w-full max-w-md mx-auto md:max-w-none md:mx-0;
  }
</style>

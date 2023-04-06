<template>
  <div class="container">
    <div class="content max-w-screen-xl mx-auto py-20 lg:py-24">
      <div class="heading-info-container flex flex-col items-center">
        <h2 class="heading-title section-heading">Popular Blog Posts</h2>
        <div
          class="heading-description mt-4 font-medium text-gray-600 text-center max-w-sm"
        >
          Some amazing blog posts that are written by even more amazing people.
        </div>
      </div>
      <div
        class="three-column flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap"
      >
        <div class="column mt-24 lg:w-1/3" v-for="item in data" :key="item.id">
          <div class="card lg:mx-4 xl:mx-8 max-w-sm lg:max-w-xs">
            <div
              class="bg-cover bg-center h-80 lg:h-64 rounded"
              :style="{ backgroundImage: `url('${item.imageSrc}')` }"
            ></div>
            <div class="category mt-4 text-secondary-100 font-bold text-sm">
              {{ item.categoryTitle }}
            </div>
            <h4 class="title mt-2 leading-relaxed font-bold text-lg">
              {{ item.title }}
            </h4>
            <router-link :to="`/posts/${item.id}`"> Read Post </router-link>
          </div>
        </div>
      </div>
    </div>
    <DecoratorBlob1
      class="-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25"
    />
    <DecoratorBlob2
      class="-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25"
    />
  </div>
</template>
<script lang="ts">
  import DecoratorBlob1 from 'assets/images/svg-decorator-blob-1.svg?component'
  import DecoratorBlob2 from 'assets/images/svg-decorator-blob-3.svg?component'
  import { IPost } from 'components/post'
  import { defineComponent } from 'vue'

  export default defineComponent({
    props: {
      data: Object as () => IPost[],
    },
    components: {
      DecoratorBlob1,
      DecoratorBlob2,
    },
  })
</script>

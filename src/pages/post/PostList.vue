<template>
  <div class="container">
    <div class="content-with-padding-xl">
      <div class="heading-row flex">
        <div class="heading section-heading text-gray-900">Blog Posts</div>
      </div>
      <div class="posts mt-6 sm:-mr-8 flex flex-wrap">
        <div
          v-for="item in state.data?.slice(0, visible)"
          :class="{
            'post-container': true,
            featured: item.featured,
          }"
          :key="item.id"
        >
          <router-link :to="`${PATHS.POSTS}/${item.id}`">
            <div
              class="post group cursor-pointer flex flex-col bg-gray-100 rounded-lg"
            >
              <div
                :style="{ backgroundImage: `url('${item.imageSrc}')` }"
                class="image h-64 w-full bg-cover bg-center rounded-t-lg"
              ></div>
              <div
                class="info p-8 border-2 border-t-0 rounded-lg rounded-t-none"
              >
                <div
                  class="category uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8"
                >
                  {{ item.categoryTitle }}
                </div>
                <div
                  class="creation-date mt-4 uppercase text-gray-600 italic font-semibold text-xs"
                >
                  {{ item.date }}
                </div>
                <div
                  class="title mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300"
                >
                  {{ item.title }}
                </div>
                <div
                  v-if="item.featured && item.description"
                  class="description"
                >
                  {{ item.description }}
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div
        v-if="visible < state.total"
        class="button-container flex justify-center"
      >
        <div
          class="btn-load-more btn-primary mt-16 mx-auto"
          @click="onLoadMoreClick"
        >
          Load More
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { IPost } from 'components'
  import { posts } from 'mockData'
  import { storeToRefs } from 'pinia'
  import { usePost } from 'stores/usePost'
  import { onBeforeMount, reactive, ref } from 'vue'
  import { PATHS } from 'appConstants'

  const props = withDefaults(
    defineProps<{
      data: IPost[]
    }>(),
    {
      data: () => posts,
    }
  )

  const state = reactive<any>({ data: undefined })
  const visible = ref(6)

  const storePost = usePost()

  const onLoadMoreClick = () => {
    visible.value += visible.value
    storePost.getList({ size: visible.value })
  }

  onBeforeMount(() => {
    storePost.getList({ size: visible.value })
    const { list, total } = storeToRefs(storePost)
    console.log(list, list?.value)
    state.data = list || props.data
    state.total = total
  })
</script>
<style lang="scss" scoped>
  .post-container {
    @apply mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8;
    &.featured {
      @apply w-full #{!important};
      .post {
        @apply h-full sm:pr-4 sm:flex-row;
      }
      .image {
        @apply sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg;
      }
      .info {
        @apply sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0;
      }
      .description {
        @apply text-sm mt-3 leading-loose text-gray-600 font-medium;
      }
    }
  }
</style>

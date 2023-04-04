<template>
  <div class="container">
    <div class="content-with-padding-xl">
      <div class="row flex flex-col lg:flex-row -mb-10">
        <div class="popular-posts-container lg:w-2/3">
          <h2 class="heading section-heading">Table talks</h2>
          <div class="posts-container">
            <router-link
              :key="i"
              :to="'/posts/' + post.id"
              v-for="(post, i) in popularPosts"
            >
              <div class="post group">
                <div
                  :style="{ backgroundImage: `url('${post.imageSrc}')` }"
                  class="image"
                ></div>
                <h5 class="title line-clamp-2">
                  {{ post.title }}
                </h5>
                <p
                  class="line-clamp-3 mt-2 font-medium text-secondary-100 leading-loose text-sm"
                >
                  {{ post.description }}
                </p>
                <div class="author-info mt-6 flex items-center">
                  <img
                    class="author-image w-12 h-12 rounded-full"
                    :src="post.author?.imageSrc"
                  />
                  <div class="author-name-and-profession ml-4">
                    <h6 class="author-name font-semibold text-lg">
                      {{ post.author?.name }}
                    </h6>
                    <p class="author-profile text-secondary-100 text-sm">
                      {{ post.author?.profile }}
                    </p>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="recent-posts-container">
          <h2 class="heading section-heading">Recent Posts</h2>
          <div class="posts-container">
            <router-link
              :key="i"
              :to="`/posts/${post.id}`"
              v-for="(post, i) in recentPosts"
            >
              <div class="post group">
                <div class="post-text-container">
                  <h5 class="title line-clamp-2">{{ post.title }}</h5>
                  <div class="author-name">{{ post.author?.name }}</div>
                </div>
                <div
                  class="image"
                  :style="{ backgroundImage: `url('${post.imageSrc}')` }"
                ></div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { IPost } from 'components'
  import { posts } from 'mockData'
  import { defineComponent } from 'vue'

  export default defineComponent({
    props: {
      popularPosts: {
        type: Array<IPost>,
        default: posts.slice(0, 2),
      },
      recentPosts: {
        type: Array<IPost>,
        default: posts.slice(0, 5),
      },
    },
  })
</script>

<style lang="scss" scoped>
  .heading {
    @apply text-left lg:text-4xl xl:text-5xl;
  }
  .posts-container {
    @apply mt-12 flex flex-col sm:flex-row sm:justify-between lg:justify-start;
  }
  .post {
    @apply block sm:max-w-sm cursor-pointer mb-16 last:mb-0 sm:mb-0 sm:odd:mr-8 lg:mr-8 xl:mr-16;
  }
  .title {
    @apply mt-6 text-xl font-bold transition duration-300 group-hover:text-primary-500;
  }
  .image {
    @apply h-64 bg-cover bg-center rounded;
  }
  .recent-posts-container {
    @apply mt-24 lg:mt-0 lg:w-1/3;
    .posts-container {
      @apply flex flex-wrap lg:flex-col;
    }
    .post {
      @apply flex justify-between mb-10 max-w-none w-full sm:w-1/2 lg:w-auto sm:odd:pr-12 lg:odd:pr-0 mr-0;
    }
    .title {
      @apply text-base xl:text-lg mt-0 mr-4 lg:max-w-xs;
    }
    .author-name {
      @apply mt-3 text-sm text-secondary-100 font-normal leading-none;
    }
    .image {
      @apply h-20 w-20 flex-shrink-0;
    }
  }
</style>

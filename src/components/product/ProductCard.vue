<template>
  <div
    class="card-container mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12"
  >
    <router-link
      :to="`/products/${data.id}`"
      class="group bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0 relative"
    >
      <div
        class="card-image-container h-56 xl:h-64 bg-center bg-cover relative rounded-t"
        :style="{
          backgroundImage: `url('${data.imageSrc}')`,
        }"
      >
        <div
          class="card-rating-container leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end"
        >
          <div class="card-rating mr-1 text-sm font-bold flex items-end">
            <vue-feather
              type="star"
              fill="#f6ad55"
              class="w-4 h-4 text-orange-400 mr-1"
            />
            {{ data.rating }}
          </div>
          <div class="card-review font-medium text-xs text-gray-600">
            {{ data.reviews }}
          </div>
        </div>
        <div
          class="card-hover-overlay absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 duration-300"
          style="background-color: rgba(255, 255, 255, 0.5)"
        >
          <button class="card-button btn-primary text-sm">Buy Now</button>
        </div>
      </div>
      <div
        class="card-heart-container cursor-pointer leading-none absolute inline-flex bg-gray-100 top-[20px] left-0 ml-4 mb-4 rounded-full px-1 py-1 items-end"
      >
        <div
          :class="[{ liked: favoriteObj[data.id] }, 'card-heart']"
          @click.prevent="toFavoriteList(data)"
        >
          <vue-feather
            type="heart"
            fill="currentColor"
            :style="{
              color: 'rgba(203, 213, 224, var(--tw-text-opacity)',
            }"
          />
        </div>
      </div>
      <div class="card-text p-4 text-gray-900">
        <h5 class="text-lg font-semibold group-hover:text-primary-500">
          {{ data.title }}
        </h5>
        <p class="mt-1 text-sm font-medium text-gray-600">
          {{ data.content }}
        </p>
        <p class="mt-4 text-xl font-bold">{{ data.price }}</p>
      </div>
    </router-link>
  </div>
</template>
<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import { IProduct } from './Product.type'
  import { useProduct } from 'stores'

  export default defineComponent({
    props: {
      data: {
        type: Object as PropType<IProduct>,
        default: {},
      },
    },
    setup() {
      const storeProduct = useProduct()

      const toFavoriteList = (data: IProduct) => {
        storeProduct.updateFavoriteObj(data)
      }

      return {
        favoriteObj: storeProduct.favoriteObj,
        toFavoriteList,
      }
    },
  })
</script>
<style lang="scss">
  .card-heart {
    @apply text-sm font-bold flex items-end;
  }
  .card-heart svg {
    @apply w-6 h-6 fill-current text-gray-400;
  }
  .card-heart.liked svg {
    @apply text-red-600;
  }
</style>

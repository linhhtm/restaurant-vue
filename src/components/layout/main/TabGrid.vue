<template>
  <div class="container" v-if="tabsKeys">
    <div class="content-with-padding-xl">
      <div
        class="header-row flex justify-between items-center flex-col xl:flex-row"
      >
        <div class="header section-heading">Checkout the Menu</div>
        <div
          class="tabs-control flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0"
        >
          <div
            v-for="(_item, key) in tabs"
            :key="key"
            @click="activeTab = key"
            :class="{ 'tab-control': true, active: activeTab === key }"
          >
            {{ key }}
          </div>
        </div>
      </div>
      <div
        class="tab-content mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12"
        v-for="(tabKey, index) in tabsKeys"
        :key="index"
        :style="{ display: tabKey === activeTab ? 'flex' : 'none' }"
      >
        <ProductCard
          v-for="(card, index) in tabs[tabKey]"
          :key="index"
          :data="card"
        />
      </div>
    </div>
    <DecoratorBlob1
      class="pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400"
    />
    <DecoratorBlob2
      class="pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import StarIcon from 'images/star-icon.svg?component'
  import DecoratorBlob1 from 'images/svg-decorator-blob-5.svg?component'
  import DecoratorBlob2 from 'images/svg-decorator-blob-7.svg?component'
  import { IProduct, ProductCard } from 'components/product'
  import { products } from 'mockData'

  const getRandomCards = () => {
    // Shuffle array
    return [...products].sort(() => Math.random() - 0.5)
  }

  export default defineComponent({
    props: {
      tabs: {
        type: Object as () => Record<string, IProduct[]>,
        default: {
          Starters: getRandomCards(),
          Main: getRandomCards(),
          Soup: getRandomCards(),
          Desserts: getRandomCards(),
        },
        required: true,
      },
    },
    setup(props: any) {
      const tabsKeys = ref(Object.keys(props.tabs))
      const activeTab = ref(tabsKeys.value[0])
      return {
        tabsKeys: tabsKeys.value,
        activeTab,
      }
    },
    components: {
      StarIcon,
      DecoratorBlob1,
      DecoratorBlob2,
      ProductCard,
    },
  })
</script>
<style lang="scss">
  .tab-control {
    @apply cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center
    hover:bg-gray-300 hover:text-gray-700;
  }
  .tab-control.active {
    @apply bg-primary-500 text-gray-100;
  }
</style>

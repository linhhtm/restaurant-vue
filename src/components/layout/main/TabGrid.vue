<template>
  <div class="container">
    <div class="content-with-padding-xl">
      <div
        class="header-row flex justify-between items-center flex-col xl:flex-row"
      >
        <h2 class="header section-heading">Checkout the Menu</h2>
        <div
          v-if="state.tabsKeys?.length"
          class="tabs-control flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0"
        >
          <div
            v-for="(_item, key) in state.tabs"
            :key="key"
            @click="activeTab = key"
            :class="{ 'tab-control': true, active: activeTab === key }"
          >
            {{ key }}
          </div>
        </div>
        <Empty v-else />
      </div>
      <div
        class="tab-content mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12"
        v-for="(tabKey, index) in state.tabsKeys"
        :key="index"
        :style="{ display: tabKey === activeTab ? 'flex' : 'none' }"
      >
        <ProductCard
          v-for="(card, index) in state.tabs?.[tabKey]"
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
<script setup lang="ts">
  import { ref, reactive, watch } from 'vue'
  import DecoratorBlob1 from 'images/svg-decorator-blob-5.svg?component'
  import DecoratorBlob2 from 'images/svg-decorator-blob-7.svg?component'
  import { IProduct, ProductCard, Empty } from 'components'

  interface PropTabGrid {
    tabs?: Record<string, IProduct[]>
    tabsKeys?: string[]
  }
  const props = withDefaults(
    defineProps<{
      data: IProduct[] | null
    }>(),
    {
      data: null,
    }
  )

  const state = reactive<PropTabGrid>({
    tabs: undefined,
    tabsKeys: undefined,
  })
  const activeTab = ref<string>('')

  watch(
    () => props.data,
    (next, prev) => {
      const obj = {}
      if (next?.length) {
        next.forEach((el: IProduct) => {
          const key = el.strCategory as keyof typeof obj
          const array: IProduct[] = obj[key] || []
          array.push(el)
          Object.assign(obj, {
            [key]: array,
          })
        })
      }
      state.tabsKeys = Object.keys(obj)
      activeTab.value = Object.keys(obj)?.[0]
      state.tabs = obj
    }
  )
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

<template>
  <Hero />
  <MainFeature />
  <TabGrid :data="storeProduct.list" />
  <Features />
  <MainFeature2 />
  <Testimonial />
  <PopularAndRecentPosts />
  <DownloadApp />
</template>
<script setup lang="ts">
  import {
    MainFeature,
    Hero,
    TabGrid,
    Features,
    MainFeature2,
    Testimonial,
    DownloadApp,
    PopularAndRecentPosts,
  } from 'components'
  import { reactive } from 'vue'
  import { useProduct, useLoading, LOADING_PRODUCT } from 'stores'

  const state: any = reactive({
    products: [],
  })
  const storeProduct = useProduct()
  const storeLoading = useLoading()

  storeLoading.loadingwrapper(
    () => storeProduct.getList(),
    LOADING_PRODUCT.PRODUCT_LIST
  )
</script>

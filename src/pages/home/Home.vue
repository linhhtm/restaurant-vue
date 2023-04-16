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
  import { useProduct } from 'stores'

  const storeProduct = useProduct()
  storeProduct.getList()
</script>

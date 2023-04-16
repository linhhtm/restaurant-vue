<template>
  <TwoColSingleFeatureWithStats :data="detail" />
  <ThreeColSimpleWithImage :data="list" />
</template>
<script setup lang="ts">
  import {
    TwoColSingleFeatureWithStats,
    ThreeColSimpleWithImage,
  } from 'components'
  import { watch } from 'vue'
  import { storeToRefs } from 'pinia'
  import { usePost } from 'stores'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const storePost = usePost()

  const { list, detail } = storeToRefs(storePost)

  watch(
    () => route.params?.id,
    (newVal) => {
      storePost.getList({ size: 3 })
      storePost.getDetail(newVal as string)
      window.scrollTo(0, 0)
    },
    {
      immediate: true,
    }
  )
</script>

<template>
  <TabGrid :data="data" />
</template>
<script lang="ts">
  import { TabGrid } from 'components'
  import { storeToRefs } from 'pinia'
  import { useProduct } from 'stores'
  import { defineComponent, watch } from 'vue'
  import { useRoute } from 'vue-router'

  export default defineComponent({
    setup() {
      const route = useRoute()
      const storeProduct = useProduct()
      const { list } = storeToRefs(storeProduct)
      watch(
        () => route,
        (newRoute) => {
          const query = newRoute.query?.s as string
          storeProduct.getList({ search: query })
        },
        {
          deep: true,
          immediate: true,
        }
      )
      return {
        data: list,
      }
    },
    components: { TabGrid },
  })
</script>

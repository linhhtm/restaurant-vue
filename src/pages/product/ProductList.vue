<template>
  <TabGrid :data="data" />
</template>
<script lang="ts">
  import { TabGrid } from 'components'
  import { products } from 'mockData'
  import { defineComponent } from 'vue'

  export default defineComponent({
    setup() {
      return {
        data: products,
      }
    },
    components: { TabGrid },
  })
</script>

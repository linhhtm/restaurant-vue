<template>
  <div class="flex items-center flex-col my-6 border rounded-md py-5 px-24">
    <vue-feather type="inbox" size="5rem" />
    <div class="text-2xl">{{ message }}</div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    props: {
      message: {
        type: String,
        default: 'Menu is empty',
      },
    },
  })
</script>

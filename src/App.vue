<template>
  <div
    class="App font-display min-h-screen text-secondary-500 p-8 overflow-hidden"
  >
    <LoadingWrapper />
    <Header />
    <router-view></router-view>
    <Footer />
    <Toast />
  </div>
</template>
<script lang="ts">
  import { Header, Footer, LoadingWrapper, Toast } from 'components'
  import { defineComponent } from 'vue'
  export default defineComponent({
    components: {
      Header,
      Footer,
      LoadingWrapper,
      Toast,
    },
  })
</script>

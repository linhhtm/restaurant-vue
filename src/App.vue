<template>
  <div class="App font-display min-h-screen text-secondary-500 p-8 overflow-hidden">
    <Header />
    <router-view></router-view>
    <Footer/>
  </div>
</template>
<script lang="ts">
import { Header, Footer } from 'components';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    Header, Footer
  }
})
</script>

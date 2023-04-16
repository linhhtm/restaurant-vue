<template>
  <div class="error-page">
    <div>
      <img :src="notFoundImg" alt="404" />
      <h1>404</h1>
      <h2 className="h4 mt-4 mb-4">Page not found</h2>
      <Button class="btn-primary" @click="backToHome">Back to Home</Button>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import notFoundImg from 'images/file-searching.svg?url'
  import { useRouter } from 'vue-router'
  import { PATHS } from 'appConstants'

  export default defineComponent({
    setup() {
      const router = useRouter()
      const backToHome = () => {
        router.push({ name: PATHS.HOME })
      }
      return {
        notFoundImg,
        backToHome,
      }
    },
  })
</script>
<style lang="scss" scope>
  .error-page {
    min-height: calc(100vh - 164px);
    text-align: center;
    @apply flex items-center justify-center py-24;
    img {
      height: 90px;
      margin: auto;
    }
    h1 {
      color: #727cf5;
      text-shadow: rgba(114, 124, 245, 0.3) 5px 1px,
        rgba(114, 124, 245, 0.2) 10px 3px;
      font-size: 5.25rem;
      line-height: 5.625rem;
    }
    h4 {
      text-transform: uppercase;
    }
  }
</style>

<template>
  <div class="wrap" v-if="storeLoading.isLoading">
    <div class="spinner"></div>
  </div>
</template>
<script setup lang="ts">
  import { useLoading } from 'stores'
  const storeLoading = useLoading()
</script>
<style lang="scss" scoped>
  .wrap {
    top: 0;
    left: 0;
    position: fixed;
    right: 0;
    bottom: 0;
    background-color: #3a3a3a;
    box-shadow: 0px 40px 60px -20px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    opacity: 0.7;
  }

  /* SPINER */
  .spinner {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    // border: 4px solid var(--tw-primary);
    border-left: 4px solid #e3e4e7;
    animation: spinner 1.5s linear infinite;
    margin: 100px;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>

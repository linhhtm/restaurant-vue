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
    position: fixed;
    right: 30px;
    bottom: 30px;
    background-color: #3a3a3a;
    box-shadow: 0px 40px 60px -20px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
    opacity: 1;
  }

  /* SPINER */
  .spinner {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 4px solid #e3e4e7;
    border-left: 4px solid var(--color-primary);
    animation: spinner 1.5s linear infinite;
    margin: 24px;
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

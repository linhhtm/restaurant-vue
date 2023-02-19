<template>
  <div id="container" class="hidden lg:flex flex-1 justify-between items-center">
    <div class="header__logo">
      <router-link to="/" class="flex align-center">
        <img class="w-10 h-10 mr-3" src="logo.svg" alt="logo" />
        <h1 class="text-3xl font-bold">
          Treact
        </h1>
      </router-link>
    </div>
    <HelloWorld msg='sd' />
    <div class="inline-block">
      <router-link class="header__navlink" to="/about">About</router-link>
      <router-link class="header__navlink" to="/blog">Blog</router-link>
      <router-link class="header__navlink" to="/pricing">Pricing</router-link>
      <router-link class="header__navlink" to="/contact-us">Contact Us</router-link>
      <router-link class="header__navlink lg:!ml-12" to="/login">Login</router-link>
      <router-link class="header__navlink btn-primary" to="/">
        Sign up
      </router-link>
    </div>
  </div>
</template>
<script setup lang="tsx">
import { reactive, defineComponent } from 'vue'
const HelloWorld = defineComponent({
  props: ['msg'],
  render() { return <div>{this.msg}</div> }
})

const state = reactive({ count: 0 })

function increment() {
  state.count++
};

</script>
<style scoped>
.header__navlink {
  /* @apply text-lg my-2 lg: text-sm lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-primary-500 focus:text-primary-500 */
}
</style>

<template>
  <nav class="lg:hidden flex flex-1 items-center justify-between">
    <div class="header__logo">
      <logo />
    </div>
    <div class="header__mobile-nav">
      <div class="header__mobile-navlinks">
        <router-link
          :key="item.path"
          v-for="item in MENU_ITEMS"
          class="header__mobile-navlink header__navlink"
          :to="item.path"
          >{{ item.label }}</router-link
        >
        <router-link
          class="header__mobile-navlink header__navlink lg:!ml-12"
          to="/login"
          >Login</router-link
        >
        <router-link
          class="header__mobile-navlink header__navlink btn-primary"
          to="/"
        >
          Sign up
        </router-link>
      </div>
    </div>
    <button
      @click="toggleNavbar"
      :class="[
        'lg:hidden z-20 focus:outline-none focus:text-primary-500 transition duration-300',
        showNavLinks ? 'open' : 'closed',
      ]"
    >
    
      <vue-feather type="x" class="w-6 h-6" v-if="showNavLinks"></vue-feather>
      <vue-feather type="menu" class="w-6 h-6" v-else></vue-feather>
    </button>
  </nav>
</template>

<script setup lang="tsx">
import { ref } from 'vue'
import MENU_ITEMS from './MenuItem'
const showNavLinks = ref(false)
const toggleNavbar = () => (showNavLinks.value = !showNavLinks.value)
</script>

<style lang="scss" scoped>
.header__mobile-nav {
  @apply lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white;
  .header__mobile-navlinks {
    @apply flex flex-col items-center;
  }
}
</style>

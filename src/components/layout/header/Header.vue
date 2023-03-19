<template>
  <header class="flex justify-between items-center max-w-screen-xl mx-auto">
    <DesktopNavLinks>
      <div class="header__logo">
        <Logo />
      </div>
      <div class="inline-block">
        <router-link
          :key="item.path"
          v-for="item in MENU_ITEMS"
          class="header__navlink"
          :to="item.path"
          >{{ item.label }}</router-link
        >
        <router-link class="header__navlink lg:!ml-12" to="/login"
          >Login</router-link
        >
        <router-link class="header__navlink btn-primary lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hover:bg-primary-700 hover:text-gray-200 focus:shadow-outline
  border-b-0" to="/">
          Sign up
        </router-link>
      </div>
    </DesktopNavLinks>
    <mobile-header />
  </header>
</template>

<script setup lang="tsx">
import MENU_ITEMS from './MenuItem'
import Logo from './Logo.vue'
import { MobileHeader } from '.';
import { defineComponent } from 'vue'

const DesktopNavLinks = defineComponent({
  render(c: any) {
    return (
      <nav class="hidden lg:flex flex-1 justify-between items-center">
        {c?.$slots?.default?.()}
      </nav>
    )
  },
})

</script>

<style lang="scss">
.header__navlink {
  @apply text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 focus:text-primary-500;
}
</style>

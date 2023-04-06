<template>
  <header class="flex justify-between items-center max-w-screen-xl mx-auto">
    <DesktopNavLinks>
      <div class="header__logo w-40">
        <Logo />
      </div>
      <div class="flex">
        <input
          class="hover:border-primary-100 mr-3 border-2 border-solid p-2 rounded border-gray-300"
          @keyup="searchRecipe"
          v-model="inputValue"
          id="name-input"
          type="text"
          name="name"
          placeholder="Search recipe"
        />
        <div class="flex items-center">
          <router-link
            :key="item.path"
            v-for="item in MENU_ITEMS"
            class="header__navlink"
            :to="item.path"
            >{{ item.label }}
          </router-link>
          <div class="header__navlink cursor-pointer" @click="toggleModal">
            <vue-feather type="heart" class="inline" />
          </div>
          <router-link class="header__navlink xl:!ml-12" to="/login"
            >Login</router-link
          >
          <router-link
            class="header__navlink btn-primary lg:mx-0 lg:px-4 xl:px-8 py-3 rounded bg-primary-500 text-gray-100 hover:bg-primary-700 hover:text-gray-200 focus:shadow-outline border-b-0"
            to="/"
          >
            Sign up
          </router-link>
        </div>
      </div>
    </DesktopNavLinks>
    <MobileHeader />
    <Modal title="Favorite list" :show="showModal" :onClose="toggleModal">
      <ProductCard v-for="data in favoriteList" :key="data.id" :data="data" />
    </Modal>
  </header>
</template>

<script setup lang="tsx">
  import MENU_ITEMS from './MenuItem'
  import Logo from './Logo.vue'
  import { MobileHeader } from '.'
  import { defineComponent, ref } from 'vue'
  import { Modal, ProductCard } from 'components'
  import { useProduct } from 'stores'
  import { storeToRefs } from 'pinia'
  import { useRouter } from 'vue-router'

  const DesktopNavLinks = defineComponent({
    render(c: any) {
      return (
        <nav class="hidden lg:flex flex-1 justify-between items-center">
          {c?.$slots?.default?.()}
        </nav>
      )
    },
  })

  const router = useRouter()
  const showModal = ref(false)
  const inputValue = ref(null)

  const storeProduct = useProduct()
  const { favoriteList } = storeToRefs(storeProduct)
  const toggleModal = () => {
    showModal.value = !showModal.value
  }
  const searchRecipe = async (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (inputValue?.value.value?.trim() === '') {
        router.push({
          name: 'products',
        })
      } else
        router.push({
          name: 'search',
          query: {
            s: inputValue?.value.value,
          },
        })
    }
  }
</script>

<style lang="scss">
  .header__navlink {
    @apply text-lg my-2 lg:text-sm lg:mx-5 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-primary-500 focus:text-primary-500;
  }

  .header__navlink i svg {
    display: inline;
  }
</style>

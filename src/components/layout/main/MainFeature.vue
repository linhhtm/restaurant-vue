<template>
  <div class="container">
    <div
      class="two-column flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center"
    >
      <div class="image-column md:!w-6/12 flex-shrink-0 relative">
        <img
          class="rounded-4xl"
          src="https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        />
        <DecoratorBlob
          class="w-20 h-20 absolute right-0 bottom-0 transform translate-y-1/2 fill-current text-primary-500 -z-10 left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25 "
        />
      </div>
      <div
        class="text-column md:w-6/12 mt-16 md:mt-0 md:ml-12 lg:ml-16 md:order-last"
      >
        <div class="lg:py-8 text-center md:text-left">
          <h1 class="sub-heading text-center md:text-left">
            <span class="tracking-wider text-sm font-medium"
              >Established Since 2014</span
            >
          </h1>
          <h2
            class="section-heading !leading-tight mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl md:text-left"
          >
            We've been serving for
            <wbr />
            <div class="highlighted-text">over 5 years.</div>
          </h2>
          <div
            class="description mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100"
          >
            <span class="inline-block mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />
              <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </span>
          </div>
          <button class="btn-primary mt-8 text-sm inline-block mx-auto" href="#">
            Latest Offers
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import DecoratorBlob from 'images/dot-pattern.svg?component'

export default defineComponent({
  setup() {},
  components: { DecoratorBlob },
})
</script>
<style lang="scss" scoped>
.column {
  @apply w-full max-w-md mx-auto md:max-w-none md:mx-0;
}
</style>

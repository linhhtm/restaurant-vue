<template>
  <div class="container">
    <div
      class="two-column flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24"
    >
      <div
        class="left-column relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left"
      >
        <h1
          class="heading font-black text-3xl md:text-5xl !leading-snug max-w-3xl"
        >
          Delicious & Affordable
          <span class="highlighted-text">Meals Near You.</span>
        </h1>
        <p
          class="paragraph my-5 lg:my-8 text-sm lg:text-base font-medium text-gray-600 max-w-lg mx-auto lg:mx-0"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
        </p>
        <div
          class="actions flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-8"
        >
          <button class="btn-primary" as="a" :href="link">
            {{ btnText }}
          </button>
          <button class="btn-watch-video" @click="toggleModal">
            <span className="play-icon-container">
              <vue-feather type="play" class="w-6 h-6 play-icon"></vue-feather>
            </span>
            <span className="play-text">Meet The Chefs</span>
          </button>
        </div>
      </div>
      <div class="right-column relative mt-12 lg:mt-0 flex flex-col justify-center">
        <div class="illustration-container flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none">
          <img class="rounded-4xl" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80" alt="Hero"/>
          <DecoratorBlob class="pointer-events-none fill-current text-primary-500 opacity-25 absolute w-32 h-32 right-0 bottom-0 transform translate-x-10 translate-y-10 -z-10" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="tsx">
import { defineComponent, ref } from 'vue'
import DecoratorBlob from 'images/dot-pattern.svg?component'
export default defineComponent({
    props: {
        link: {
            type: String,
            default: "#",
        },
        btnText: {
            type: String,
            default: "Order Now",
        },
    },
    setup() {
        const modalIsOpen = ref(false);
        const toggleModal = () => {
            modalIsOpen.value = !modalIsOpen.value;
        };
        return {
            toggleModal,
        };
    },
    components: { DecoratorBlob }
})
</script>
<style lang="scss" scoped>
.btn-watch-video{
  @apply mt-4 sm:mt-0 sm:ml-8 flex items-center text-secondary-300 transition duration-300 hover:text-primary-400 focus:outline-none
}
.btn-watch-video .play-icon {
  @apply stroke-1 w-12 h-12
}
.btn-watch-video .play-text {
  @apply ml-2 font-medium
}
</style>
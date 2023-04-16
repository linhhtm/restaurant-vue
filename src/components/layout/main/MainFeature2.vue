<template>
  <div class="container">
    <div
      class="two-column flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24"
    >
      <div
        class="column image-column flex-shrink-0 md:h-auto relative md:w-1/2 h-auto"
      >
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ&auto=format&fit=crop&w=768&q=80"
          class="bg-cover rounded-4xl"
          alt=""
        />
        <DecoratorBlob
          class="w-20 h-20 absolute right-0 bottom-0 transform translate-y-1/2 fill-current text-primary-500 -z-10 left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25"
        />
      </div>
      <div
        class="column text-column md:w-7/12 mt-16 md:mt-0 md:mr-12 lg:mr-16 md:order-first"
      >
        <div class="text-content lg:py-8 text-center md:text-left">
          <div class="sub-heading text-center md:text-left">
            <span class="tracking-wider text-sm font-medium">
              A Reputed Brand
            </span>
          </div>
          <h2
            class="section-heading mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl md:text-left leading-tight"
          >
            Why
            <div class="highlighted-text">Choose Us ?</div>
          </h2>
          <div
            class="description mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <div
            class="statistics flex flex-col items-center sm:block text-center md:text-left mt-4"
          >
            <div
              class="statistic text-left sm:inline-block sm:mr-12 last:mr-0 mt-4"
              v-for="(statistic, i) in statistics"
              :key="i"
            >
              <div
                class="value font-bold text-lg sm:text-xl lg:text-2xl text-secondary-500 tracking-wide"
              >
                {{ statistic.value }}
              </div>
              <div class="key font-medium text-primary-700">
                {{ statistic.key }}
              </div>
            </div>
          </div>
          <button
            class="btn-primary mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import DecoratorBlob from 'images/dot-pattern.svg?component'

  export default defineComponent({
    props: {
      statistics: {
        type: Object as PropType<Record<string, string>[]>,
        default: [
          {
            key: 'Orders',
            value: '94000+',
          },
          {
            key: 'Customers',
            value: '11000+',
          },
          {
            key: 'Chefs',
            value: '1500+',
          },
        ],
      },
    },
    components: {
      DecoratorBlob,
    },
  })
</script>

<style lang="scss">
  .column {
    @apply max-w-md mx-auto md:max-w-none md:mx-0;
  }
</style>

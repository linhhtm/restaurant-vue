<template>
  <div class="container">
    <div class="content-with-padding-xl">
      <div class="heading section-heading">
        Customers
        <div class="highlighted-text">Love Us.</div>
      </div>
      <div
        class="testimonials flex flex-col lg:flex-row items-center lg:items-stretch"
      >
        <div
          class="testimonial-container mt-16 lg:w-1/3"
          v-for="(testimonial, i) in testimonials"
          :key="i"
        >
          <div
            class="testimonial px-4 text-center max-w-xs mx-auto flex flex-col items-center"
          >
            <img
              class="image w-20 h-20 rounded-full"
              :src="testimonial.imageSrc"
              alt=""
            />
            <blockquote class="mt-5 text-gray-600 font-medium leading-loose">
              "{{ testimonial.quote }}"
            </blockquote>
            <p
              class="mt-5 text-gray-900 font-semibold uppercase text-sm tracking-wide"
            >
              - {{ testimonial.customerName }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <DecoratorBlob1 class="pointer-events-none -z-20 absolute left-0 top-0 h-56 w-56 opacity-15 transform -translate-x-2/3 -translate-y-12 text-teal-400" />
    <DecoratorBlob2 class="pointer-events-none -z-20 absolute right-0 bottom-0 h-64 w-64 opacity-15 transform translate-x-2/3 text-yellow-500" />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import DecoratorBlob1 from 'images/svg-decorator-blob-7.svg?component'
import DecoratorBlob2 from 'images/svg-decorator-blob-8.svg?component'

export default defineComponent({
  props: {
    testimonials: {
      type: Object as PropType<Record<string, string>[]>,
      default: [
        {
          imageSrc:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80',
          quote:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
          customerName: 'Charlotte Hale',
        },
        {
          imageSrc:
            'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80',
          quote:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
          customerName: 'Adam Cuppy',
        },
        {
          imageSrc:
            'https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4.25&w=512&h=512&q=80',
          quote:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
          customerName: 'Steven Marcetti',
        },
      ],
    },
  },
  components: {
    DecoratorBlob1,
    DecoratorBlob2,
  },
})
</script>

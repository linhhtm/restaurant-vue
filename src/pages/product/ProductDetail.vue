<template>
  <div class="container">
    <div class="single-column max-w-screen-xl mx-auto pt-20 lg:pt-24">
      <div class="heading-info-container">
        <h2 class="section-heading heading-title">{strMeal}</h2>
        <div
          class="heading-description mt-4 font-medium text-gray-600 text-center"
        >
          {strInstructions}
        </div>
      </div>

      <div class="card mb-10 mt-24 md:flex justify-center items-center">
        <div
          :style="{
            backgroundImage: `url('${`props.imageSrc`}')`,
          }"
          class="rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8"
        ></div>
      </div>
      <div class="heading-info-container">
        <h2 class="section-heading heading-title">Ingredients</h2>
        <div
          class="content"
          :key="i"
          v-for="(item, i) in [{ title: 1, measure: 1 }]"
        >
          <div class="subtitle flex items-center text-gray-900 tracking-wide">
            {{ item.title }}: {{ item.measure }}
          </div>
        </div>
      </div>
    </div>
    <ThreeColSimpleWithImage :data="posts" />
    <SvgDotPatternIcon
      class="absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24"
    />
    <SvgDotPatternIcon
      class="absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24"
    />
    <SvgDotPatternIcon
      class="absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24"
    />
    <SvgDotPatternIcon
      class="absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24"
    />
  </div>
</template>
<script lang="ts">
  import SvgDotPatternIcon from 'assets/images/dot-pattern.svg?component'
  import { defineComponent } from 'vue'
  import { ThreeColSimpleWithImage } from 'components'
  import { posts } from 'mockData'

  export default defineComponent({
    setup() {
      return {
        posts,
      }
    },
    components: {
      ThreeColSimpleWithImage,
      SvgDotPatternIcon,
    },
  })
</script>

<style lang="scss" scoped>
  .heading-info-container {
    @apply flex flex-col items-center;
  }
</style>

<template>
  <div class="container">
    <div class="content-with-padding-xl">
      <div
        class="header-row flex justify-between items-center flex-col xl:flex-row"
      >
        <div class="header section-heading">Checkout the Menu</div>
        <div
          class="tabs-control flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0"
        >
          <div
            v-for="(_item, key) in tabs"
            :key="key"
            @click="activeTab = key"
            :class="{ 'tab-control': true, active: activeTab === key }"
          >
            {{ key }}
          </div>
        </div>
      </div>
      <div
        class="tab-content mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12"
        v-for="(tabKey, index) in tabsKeys"
        :key="index"
        :style="{ display: tabKey === activeTab ? 'flex' : 'none' }"
      >
        <div
          v-for="(card, index) in tabs[tabKey]"
          :key="index"
          class="card-container mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12"
        >
          <a
            :href="card.url"
            class="group bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0"
          >
            <div
              class="card-image-container h-56 xl:h-64 bg-center bg-cover relative rounded-t"
              :style="{
                'background-image': `url('${card.imageSrc}')`,
              }"
            >
              <div
                class="card-rating-container leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end"
              >
                <div class="card-rating mr-1 text-sm font-bold flex items-end">
                  <StarIcon class="w-4 h-4 fill-current text-orange-400 mr-1" />
                  {{ card.rating }}
                </div>
                <div class="card-review font-medium text-xs text-gray-600">
                  {{ card.reviews }}
                </div>
              </div>
              <div
                class="card-hover-overlay absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 duration-300"
                style="background-color: rgba(255, 255, 255, 0.5)"
              >
                <button
                  class="card-button btn-primary text-sm"
                >
                  Buy Now
                </button>
              </div>
            </div>
            <div class="card-text p-4 text-gray-900">
              <h5 class="text-lg font-semibold group-hover:text-primary-500">
                {{ card.title }}
              </h5>
              <p class="mt-1 text-sm font-medium text-gray-600">
                {{ card.content }}
              </p>
              <p class="mt-4 text-xl font-bold">{{ card.price }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <DecoratorBlob1
      class="pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400"
    />
    <DecoratorBlob2
      class="pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import StarIcon from 'images/star-icon.svg?component'
import DecoratorBlob1 from 'images/svg-decorator-blob-5.svg?component'
import DecoratorBlob2 from 'images/svg-decorator-blob-7.svg?component'
import { IProduct } from 'components/product'

const getRandomCards = () => {
  const cards = [
    {
      imageSrc:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
      title: 'Chicken Chilled',
      content: 'Chicken Main Course',
      price: '$5.99',
      rating: '5.0',
      reviews: '87',
      url: '#',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1582254465498-6bc70419b607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
      title: 'Samsa Beef',
      content: 'Fried Mexican Beef',
      price: '$3.99',
      rating: '4.5',
      reviews: '34',
      url: '#',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1565310022184-f23a884f29da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
      title: 'Carnet Nachos',
      content: 'Chilli Crispy Nachos',
      price: '$3.99',
      rating: '3.9',
      reviews: '26',
      url: '#',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
      title: 'Guacamole Mex',
      content: 'Mexican Chilli',
      price: '$3.99',
      rating: '4.2',
      reviews: '95',
      url: '#',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
      title: 'Chillie Cake',
      content: 'Deepfried Chicken',
      price: '$2.99',
      rating: '5.0',
      reviews: '61',
      url: '#',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
      title: 'Nelli',
      content: 'Hamburger & Fries',
      price: '$7.99',
      rating: '4.9',
      reviews: '89',
      url: '#',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
      title: 'Jalapeno Poppers',
      content: 'Crispy Soyabeans',
      price: '$8.99',
      rating: '4.6',
      reviews: '12',
      url: '#',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
      title: 'Cajun Chicken',
      content: 'Roasted Chicken & Egg',
      price: '$7.99',
      rating: '4.2',
      reviews: '19',
      url: '#',
    },
  ]

  // Shuffle array
  return cards.sort(() => Math.random() - 0.5)
}

export default defineComponent({
  props: {
    tabs: {
      type: Object as () => Record<string, IProduct[]>,
      default: {
        Starters: getRandomCards(),
        Main: getRandomCards(),
        Soup: getRandomCards(),
        Desserts: getRandomCards(),
      },
      required: true,
    },
  },
  setup(props: any) {
    const tabsKeys = ref(Object.keys(props.tabs))
    const activeTab = ref(tabsKeys.value[0])
    return {
      tabsKeys: tabsKeys.value,
      activeTab,
    }
  },
  components: { StarIcon, DecoratorBlob1, DecoratorBlob2 },
})
</script>
<style lang="scss">
.tab-control {
  @apply cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center
    hover:bg-gray-300 hover:text-gray-700;
}
.tab-control.active {
  @apply bg-primary-500 text-gray-100;
}
</style>
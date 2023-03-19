<template>
  <div
    class="relative bg-gray-200 text-gray-700 -mb-8 -mx-8 px-8 py-20 lg:py-24"
  >
    <div class="content max-w-screen-xl mx-auto relative z-10">
      <div
        class="six-columns flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12"
      >
        <div
          class="column px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12"
          v-for="(section, key) in sections"
          :key="key"
        >
          <h5 class="column-heading uppercase font-bold">{{ section.name }}</h5>
          <ul class="mt-6 text-sm font-medium">
            <li class="mt-3" v-for="(link, i) in section.links" :key="i">
              <a
                :href="link.url"
                class="border-b-2 border-transparent hover:border-gray-700 pb-1 transition duration-300"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>
        <div
          class="subscribe-news-letter-column px-4 sm:px-0 sm:w-1/4 md:w-auto text-center lg:text-left w-full! lg:w-auto! mt-20 lg:mt-12"
        >
          <div
            class="subscribe-news-letters-container max-w-sm mx-auto lg:mx-0"
          >
            <h5 class="uppercase font-bold">Subscribe to our Newsletter</h5>
            <p
              class="subscribe-text mt-2 lg:mt-6 text-sm font-medium text-gray-600"
            >
              We deliver high quality blog posts written by professionals
              weekly. And we promise no spam.
            </p>
            <div
              class="mt-4 lg:mt-6 text-sm sm:flex max-w-xs sm:max-w-none mx-auto sm:mx-0"
            >
              <input
                placeholder="Your Email Address"
                class="bg-gray-300 px-6 py-3 rounded sm:rounded-r-none border-2 sm:border-r-0 border-gray-400 hover:border-primary-500 focus:outline-none transition duration-300 w-full"
              />
              <button
                class="btn-primary mt-4 sm:mt-0 w-full sm:w-auto rounded sm:rounded-l-none px-8 py-3"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="divider my-16 border-b-2 border-gray-300 w-full"></div>
      <div
        class="three-col-row flex flex-col md:flex-row items-center justify-between"
      >
        <div
          class="logo-container flex items-center justify-center md:justify-start"
        >
          <img class="logo-img w-8" src="logo.svg" alt="" />
          <h5 class="ml-2 text-xl font-black tracking-wider text-gray-800">
            Treact Inc.
          </h5>
        </div>
        <p
          class="copywright-notice text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-500"
        >
          &copy; {{new Date().getFullYear()}} Treact Inc. All Rights Reserved.
        </p>
        <div class="social-links-container mt-8 md:mt-0 flex">
          <a
            class="social-link"
            :href="social.url"
            v-for="(social, i) in socials"
            :key="i"
          >
          <component :is="social.icon" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import FacebookIcon from 'images/facebook-icon.svg?component'
import TwitterIcon from 'images/twitter-icon.svg?component'
import YoutubeIcon from 'images/youtube-icon.svg?component'

interface IFooterLink {
  url: string
  name: string
}

interface IFooter {
  name: string
  links: IFooterLink[]
}

export default defineComponent({
  props: {
    sections: {
      type: Object as PropType<Record<string, IFooter>>,
      default: {
        main: {
          name: 'Main',
          links: [
            {
              url: '#',
              name: 'Blog',
            },
            {
              url: '#',
              name: 'FAQs',
            },
            {
              url: '#',
              name: 'Support',
            },
            {
              url: '#',
              name: 'About Us',
            },
          ],
        },
        product: {
          name: 'Product',
          links: [
            {
              url: '#',
              name: 'Log In',
            },
            {
              url: '#',
              name: 'Personal',
            },
            {
              url: '#',
              name: 'Business',
            },
            {
              url: '#',
              name: 'Team',
            },
          ],
        },
        press: {
          name: 'Press',
          links: [
            {
              url: '#',
              name: 'Logos',
            },
            {
              url: '#',
              name: 'Events',
            },
            {
              url: '#',
              name: 'Stories',
            },
            {
              url: '#',
              name: 'Office',
            },
          ],
        },
        legal: {
          name: 'Legal',
          links: [
            {
              url: '#',
              name: 'GDPR',
            },
            {
              url: '#',
              name: 'Privacy Policy',
            },
            {
              url: '#',
              name: 'Terms of Service',
            },
            {
              url: '#',
              name: 'Disclaimer',
            },
          ],
        },
      },
    },
    socials: {
      type: Object as PropType<Array<Record<string, string>>>,
      default: [
        {
          url: 'https://facebook.com',
          icon: FacebookIcon,
        },
        {
          url: 'https://facebook.com',
          icon: TwitterIcon,
        },
        {
          url: 'https://facebook.com',
          icon: YoutubeIcon,
        },
      ],
    },
  },
})
</script>

<style lang="scss" scoped>
.social-link {
  @apply cursor-pointer p-2 rounded-full bg-gray-900 text-gray-100 hover:bg-gray-700 transition duration-300 mr-4 last:mr-0;
}
.social-link svg {
  @apply w-4 h-4;
}
</style>

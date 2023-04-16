<template>
  <div v-if="storeToast.toasts?.length">
    <div
      v-for="(item, i) in storeToast.toasts"
      :key="i"
      :id="`toast-${item.type}`"
      class="z-50 fixed bottom-0 right-5 flex items-center w-full max-w-xs p-4 mb-4 text-gray-900 bg-gray-400 rounded-lg shadow"
      role="alert"
      :style="{
        bottom: `${80 * i}px`,
      }"
    >
      <div
        v-if="item.type === 'danger'"
        class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg text-red-500 bg-red-100"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="sr-only">{{ item.type }} icon</span>
      </div>
      <div
        v-else-if="item.type === 'success'"
        class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg text-green-500 bg-green-100"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="sr-only">Check icon</span>
      </div>
      <div
        v-else
        class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg text-orange-500 bg-orange-100"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="sr-only">Warning icon</span>
      </div>
      <div class="ml-3 text-sm font-normal">{{ item.message }}</div>
      <button
        type="button"
        class="items-center justify-center ml-auto -mx-1.5 -my-1.5 bg-white text-gray-700 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8"
        :data-dismiss-target="`#toast-${item.type}`"
        aria-label="Close"
        @click="storeToast.deleteToast(i)"
      >
        <span class="sr-only">Close</span>
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>
<script lang="ts">
  import { IToast, useToast } from 'stores'
  import { defineComponent, ref, watch } from 'vue'
  import { TToast } from './misc.type'
  import { TOAST_COLOR } from 'appConstants'

  export default defineComponent({
    props: {
      type: {
        type: Object as () => TToast,
        default: 'danger',
      },
      message: String,
    },
    setup(props) {
      const storeToast = useToast()
      const toastColor = ref(TOAST_COLOR[props.type])

      watch(
        () => storeToast.toasts,
        (newValue: IToast[], oldValue: IToast[]) => {
          if (newValue.length && newValue.length === oldValue.length - 1) {
            storeToast.autoDeleteToast()
          }
        }
      )
      return {
        toastColor,
        storeToast,
      }
    },
    mounted() {
      const storeToast = useToast()
      storeToast.autoDeleteToast()
    },
  })
</script>
<style lang="scss" scoped></style>

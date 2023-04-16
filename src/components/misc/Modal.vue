<template>
  <div v-if="showModal">
    <div
      class="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4"
    >
      <div class="w-full relative">
        <div
          class="h-[500px] overflow-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
        >
          <div
            class="flex items-start justify-between px-5 py-2 border-b border-solid border-gray-300 rounded-t"
          >
            <h3 class="text-xl">{{ title }}</h3>
            <button
              class="bg-transparent border-0 text-black float-right"
              @click="onClose"
            >
              <span
                class="text-black opacity-75 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full"
              >
                <vue-feather type="x-circle" class="w-6 h-6" />
              </span>
            </button>
          </div>
          <div class="relative p-6 flex flex-wrap">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-black/50 fixed inset-0 z-20" @click="onClose"></div>
  </div>
</template>
<script setup lang="ts">
  import { ref, watch } from 'vue'
  const props = withDefaults(
    defineProps<{
      show: boolean | undefined
      onClose: () => void
      title: string
    }>(),
    {
      title: 'List',
    }
  )
  const showModal = ref<boolean | undefined>(false)

  watch(
    () => props.show,
    (second) => {
      showModal.value = second
    }
  )
</script>

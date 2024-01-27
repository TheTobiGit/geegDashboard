<template>
  <section
    class="flex flex-col items-center pb-4 bg-[#F7F8FA] h-svh border dark:border-[#2A2A2A] border-r border-l-0 border-t-0 border-y-0 w-[5vw] 2xl:w-[3vw] hover:w-[10vw] 2xl:hover:w-[7vw] transition-all duration-200 group dark:bg-[#1D1D1D]"
  >
    <NuxtLink to="/" class="h-[10vh] flex items-center justify-center">
      <img src="/vector.svg" alt="" />
    </NuxtLink>
    <div class="flex flex-col gap-[20px] mb-[20px] items-center">
      <button class="flex gap-2 transition-all duration-300 group-hover:self-start hover:scale-110 dark:text-[#737373] dark:hover:text-[#35CAA5] text-[#B2AAAB] hover:text-inherit">
        <Icon name="bxs:category" size="1.5rem" class="" />
        <p class="hidden overflow-hidden group-hover:block">category</p>
      </button>
      <button class="flex gap-2 transition-all duration-300 group-hover:self-start hover:scale-110 dark:text-[#737373] dark:hover:text-[#35CAA5] text-[#B2AAAB] hover:text-inherit">
        <Icon name="solar:graph-up-broken" size="1.5rem" class=""/>
        <p class="hidden overflow-hidden group-hover:block group-visited:block">trends</p>
      </button>
      <NuxtLink class="flex gap-2 transition-all duration-300 group-hover:self-start hover:scale-110 dark:text-[#737373] dark:hover:text-[#35CAA5] text-[#B2AAAB] hover:text-inherit" >
        <Icon name="solar:users-group-rounded-broken" size="1.5rem" class="" />
        <p class="hidden overflow-hidden group-hover:block">profiles</p>
      </NuxtLink>
      <button class="flex gap-2 transition-all duration-300 group-hover:self-start hover:scale-110 dark:text-[#737373] dark:hover:text-[#35CAA5] text-[#B2AAAB] hover:text-inherit">
        <Icon name="solar:box-broken" size="1.5rem" class=""/>
        <p class="hidden overflow-hidden group-hover:block">boxes</p>
      </button>
      <button class="flex gap-2 transition-all duration-300 group-hover:self-start hover:scale-110 dark:text-[#737373] dark:hover:text-[#35CAA5] text-[#B2AAAB] hover:text-inherit">
        <Icon name="circum:discount-1" size="1.5rem" class=""/>
        <p class="hidden overflow-hidden group-hover:block">discount</p>
      </button>
      <button class="flex gap-2 transition-all duration-300 group-hover:self-start hover:scale-110 dark:text-[#737373] dark:hover:text-[#35CAA5] text-[#B2AAAB] hover:text-inherit">
        <Icon name="solar:info-circle-broken" size="1.5rem" class=""/>
        <p class="hidden overflow-hidden group-hover:block">info</p>
      </button>
    </div>


    <div
      class="rounded-full flex flex-col items-center justify-center gap-3 p-2 bg-white dark:bg-[#181818]"
    >
      <button @click="isLight" class="bg-[#35CAA5] rounded-full p-1 dark:rounded-none dark:bg-transparent text-white dark:text-[#A3A3A3]">
        <Icon name="ic:baseline-wb-sunny" size="1.5rem" />
      </button>
      <button @click="isDark" class="dark:rounded-full p-1 dark:bg-[#35CAA5] text-[#B2AAAB] dark:text-white">
        <Icon name="material-symbols:nights-stay" size="1.5rem" />
      </button>
    </div>

    <div class="flex flex-col gap-[20px] items-center py-4 mt-auto">
      <button class="flex gap-2 transition-all duration-300 group-hover:self-start hover:scale-110 dark:text-[#737373] dark:hover:text-[#35CAA5] text-[#B2AAAB] hover:text-inherit">
        <Icon name="solar:round-arrow-right-broken" size="1.5rem" class=""/>
        <p class="hidden overflow-hidden group-hover:block">utils</p>
      </button>
      <button class="flex gap-2 transition-all duration-300 group-hover:self-start hover:scale-110 dark:text-[#737373] dark:hover:text-[#35CAA5] text-[#B2AAAB] hover:text-inherit">
        <Icon name="solar:settings-broken" size="1.5rem" class=""/>
        <p class="hidden overflow-hidden group-hover:block">settings</p>
      </button>
      <button class="flex gap-2 transition-all duration-300 group-hover:self-start hover:scale-110 dark:text-[#737373] hover:text-red-500 dark:hover:text-red-500 text-[#B2AAAB]">
        <Icon name="solar:logout-broken" size="1.5rem" class="rotate-180 hover:text-red-500"  />
        <p class="hidden overflow-hidden group-hover:block">logout</p>
      </button>
    </div>
  </section>
</template>

<script setup>
const colorMode = useColorMode();

function isLight() {
  colorMode.preference = "light";
}

function isDark() {
  colorMode.preference = "dark";
}

</script>

<style >

</style>


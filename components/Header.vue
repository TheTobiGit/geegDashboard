<template>
  <section
    class="h-[10vh] flex items-center border border-b dark:border-[#1D2D44] border-x-0 border-t-0 px-5 bg-[#FAFAFA] dark:bg-[#0B2447] dark:shadow-md"
  >
    <button class="flex lg:hidden">
      <Icon name="heroicons:bars-3-bottom-left-16-solid" size="1.5rem" />
    </button>
    <p class="hidden text-xl font-semibold lg:flex">Dashboard</p>

    <div class="flex items-center gap-5 ml-auto">
      <div class="relative items-center hidden lg:flex">
        <input
          type="search"
          name="search"
          id="search"
          class="w-[200px] xl:w-[350px] rounded-full px-4 py-3 pl-10 focus:outline-none mr-4 border-2 dark:bg-[#19376D] dark:border-none"
          placeholder="Search..."
        />
        <!-- <img src="../assets/search.svg" alt=""  /> -->
        <Icon name="ph:magnifying-glass" size="1.2rem" class="absolute translate-x-4" />
      </div>

      <div class="flex gap-3 mr-2">
        <Icon name="solar:calendar-line-duotone" size="1.5rem" />
        <p class="cursor-pointer">{{ formattedDate }}</p>
      </div>

      <button
        class="flex items-center justify-center p-3 border-2 rounded-full dark:border-none"
      >
        <Icon name="mdi:bell-outline" size="1.5rem" />
      </button>

      <div class="relative flex flex-col">
        <div
        @click="accountDrop"  
        class="items-center hidden gap-3 px-2 py-1 border-2 rounded-full cursor-pointer lg:flex justify-evenly dark:border-none dark:shadow-md "
        >
          <div class="w-[38px] h-[38px] border border-transparent rounded-full">
            <img
              src="../assets/avatar.jpg"
              alt=""
              class="w-full h-full rounded-full"
            />
          </div>
          <div class="flex-col hidden text-right xl:flex">
            <p class="text-base">Gideon Sarfo</p>
            <p class="text-sm text-[#787486] dark:text-[#A5D7E8]">
              aemonsarfo@outlook.com
            </p>
          </div>
          <Icon name="ph:caret-down-light" />
        </div>
        <div
        :class="{'lg:flex': accountDropdown, '!hidden': !accountDropdown}"
          class="absolute p-2 lg:-translate-x-10 lg:translate-y-[4rem] xl:translate-x-0 rounded-lg bg-white dark:bg-[#1D2D44] w-max h-max flex-col gap-3 shadow hidden"
        >
          <button class="flex gap-3 p-3 text-left rounded-lg hover:bg-gray-200 dark:hover:bg-[#19376D]">
            <Icon name="material-symbols:account-circle" size="1.5rem" />
            Account
          </button>
          <button class="flex gap-3 p-3 text-left rounded-lg hover:bg-gray-200 dark:hover:bg-[#19376D]">
            <Icon name="icon-park-outline:sales-report" size="1.5rem" />
            Sales</button>
          <button class="flex gap-3 p-3 text-left text-red-500 rounded-lg hover:bg-red-200">
            <Icon name="solar:logout-broken" size="1.5rem" color="red" class="rotate-180"/>
            Logout
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
let rawDate = ref("");

let formattedDate = ref(null);

let accountDropdown = ref(false);

function accountDrop() {
  accountDropdown.value = !accountDropdown.value
}

const temp = new Date().toLocaleDateString("en-US", {
  day: "numeric",
  year: "numeric",
  month: "long",
});

watchEffect(() => {
  updateFormattedDate();
});

function updateFormattedDate() {
  formattedDate = computed(() => {
    return rawDate.value ? formatDate(rawDate.value) : temp;
  });
}
</script>

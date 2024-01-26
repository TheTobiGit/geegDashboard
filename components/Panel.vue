<template>
  <section
    class="flex flex-col items-center pb-4 bg-[#F7F8FA] h-svh border border-r border-l-0 border-t-0 border-y-0 w-[5vw] 2xl:w-[3vw] hover:w-[10vw] 2xl:hover:w-[7vw] transition-all duration-700 group "
  >
    <NuxtLink to="/" class="h-[10vh] flex items-center justify-center">
      <img src="../assets/vector.svg" alt="" />
    </NuxtLink>
    <div class="flex flex-col gap-[20px] mb-[20px] items-center">
      <button class="flex group-hover:self-start gap-2">
        <img src="../assets/category.svg" alt=""  />
        <p class="hidden group-hover:block overflow-hidden">category</p>
      </button>
      <button class="flex group-hover:self-start gap-2">
        <img src="../assets/trend-up.svg" alt="" />
        <p class="hidden group-hover:block group-visited:block overflow-hidden">trends</p>
      </button>
      <NuxtLink class="flex group-hover:self-start gap-2" to="/home/profile">
        <img src="../assets/profile-2user.svg" alt="" />
        <p class="hidden group-hover:block overflow-hidden">profiles</p>
      </NuxtLink>
      <button class="flex group-hover:self-start gap-2">
        <img src="../assets/box.svg" alt="" />
        <p class="hidden group-hover:block overflow-hidden">boxes</p>
      </button>
      <button class="flex group-hover:self-start gap-2">
        <img src="../assets/discount-shape.svg" alt="" />
        <p class="hidden group-hover:block overflow-hidden">discount</p>
      </button>
      <button class="flex group-hover:self-start gap-2">
        <img src="../assets/info-circle.svg" alt="" />
        <p class="hidden group-hover:block overflow-hidden">info</p>
      </button>
    </div>

    <div
      class="rounded-full flex flex-col items-center justify-center gap-4 p-1 xl:p-2 bg-white"
    >
      <button>
        <img
          src="../assets/sun.svg"
          alt=""
          class="bg-[#35CAA5] rounded-full p-1"
        />
      </button>
      <button>
        <img src="../assets/moon.svg" alt="" />
      </button>
    </div>

    <div class="flex flex-col gap-[20px] items-center py-4 mt-auto">
      <button>
        <img src="../assets/arrow-right.svg" alt="" />
      </button>
      <button>
        <img src="../assets/setting.svg" alt="" />
      </button>
      <button>
        <img src="../assets/logout.svg" alt="" />
      </button>
    </div>
  </section>
</template>

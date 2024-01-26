<template>
  <section
    class="flex flex-col items-center pb-4 bg-[#F7F8FA] h-svh border border-r border-l-0 border-t-0 border-y-0 w-[5vw] hover:w-[10vw] transition-all duration-700 "
  >
    <div class="h-[10vh] flex items-center justify-center">
      <img src="../assets/vector.svg" alt="" />
    </div>
    <div class="flex flex-col gap-[20px] mb-[20px] items-center">
      <button class="flex">
        <img src="../assets/category.svg" alt=""  />
        <p class="hidden">category</p>
      </button>
      <button>
        <img src="../assets/trend-up.svg" alt="" />
      </button>
      <button>
        <img src="../assets/profile-2user.svg" alt="" />
      </button>
      <button>
        <img src="../assets/box.svg" alt="" />
      </button>
      <button>
        <img src="../assets/discount-shape.svg" alt="" />
      </button>
      <button>
        <img src="../assets/info-circle.svg" alt="" />
      </button>
    </div>

    <div
      class="rounded-full flex flex-col items-center justify-center gap-4 p-1 xl:p-2 bg-white"
    >
      <button>
        <img
          src="../assets/sun.svg"
          alt=""
          class="bg-[#35CAA5] rounded-full p-1 xl:p-2"
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

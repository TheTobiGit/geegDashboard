<template>
  <section
    class="h-[10vh] flex items-center border border-b border-x-0 border-t-0 w-[95vw] px-5"
  >
    <p class="text-xl font-semibold">Dashboard</p>

    <div class="ml-auto flex gap-5 items-center">
      <div class="flex relative items-center">
        <input
          type="search"
          name="search"
          id="search"
          class="w-[350px] rounded-full px-4 py-3 pl-10 focus:outline-none mr-4 border-2"
          placeholder="Search..."
        />
        <img src="../assets/search.svg" alt="" class="absolute translate-x-4" />
      </div>

      <div class="flex gap-3 mr-2">
        <input
          type="date"
          name="date"
          id="date"
          class="w-[22px]"
          v-model="rawDate"
          @change="updateFormattedDate"
        />
        <p>{{ formattedDate }}</p>
      </div>

      <button class="p-3 border rounded-full flex justify-center items-center ">
        <img src="../assets/bell.svg" alt="" />
      </button>

      <div class="rounded-full py-1 px-2 flex justify-evenly items-center gap-3 border-2">
        <div class=" w-[38px] h-[38px] border border-transparent rounded-full">
          <img src="../assets/avatar.jpg" alt="" class=" h-full w-full rounded-full">
        </div>
        <div class=" flex flex-col text-right">
         <p class=" text-base">Gideon Sarfo</p>
         <p class=" text-sm text-[#787486]">gideonsarfo@gmail.com</p>
        </div>
        <button><img src="../assets/arrow-down.svg" alt=""></button>
      </div>
    </div>
  </section>
</template>

<script setup>
let rawDate = ref("");

let formattedDate = ref(null);

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
    console.log(formattedDate);
    return rawDate.value ? formatDate(rawDate.value) : temp;
  });

  function formatDate(dateStr) {
    const [year, month, day] = dateStr.split("-");
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      year: "numeric",
      month: "long",
    });
  }
}
</script>

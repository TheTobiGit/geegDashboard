<template>
  <section
    class="h-[374px] border border-[#E5EAEF] p-4 rounded-2xl bg-[#FFFFFF] dark:bg-[#1D1D1D] grow dark:border-[#2A2A2A]"
  >
    <div class="flex items-center justify-between">
      <p class="text-lg font-semibold ">Sales Trends</p>
      <div class="relative flex items-center gap-3 ">
        <p>Short by :</p>
        <select name="range" id="range" class=" border-2 rounded-full appearance-none pl-3 pr-5 py-2 text-sm dark:bg-[#181818] dark:border-[#2A2A2A] dark:text-[#A3A3A3] focus:outline-none">
          
            <option value="Daily">Daily</option>
            <option value="Weekly" selected>Weekly</option>
            <option value="Monthly">Monthly</option>
      
        </select>
        <Icon name="ph:caret-down-light" class="absolute right-0 -translate-x-2 dark:text-[#A3A3A3]" />
      </div>
    </div>
  </section>
</template>

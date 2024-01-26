<template>
  <section
    class="h-[374px] border border-[#E5EAEF] p-4 rounded-2xl bg-[#FFFFFF] dark:bg-[#19376D] grow dark:border-none"
  >
    <div class="flex items-center justify-between">
      <p class="text-lg font-semibold ">Sales Trends</p>
      <div class="relative flex items-center gap-3 ">
        <p>Short by :</p>
        <select name="range" id="range" class=" border-2 rounded-full appearance-none pl-3 pr-5 py-2 text-sm dark:bg-[#1D2D44]">
          <optgroup class="">
            <option value="Daily">Daily</option>
            <option value="Weekly" selected>Weekly</option>
            <option value="Monthly">Monthly</option>
          </optgroup>
        </select>
        <Icon name="ph:caret-down-light" class="absolute right-0 -translate-x-2 " />
      </div>
    </div>
  </section>
</template>

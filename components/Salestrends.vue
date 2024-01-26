<template>
  <section
    class="h-[374px] border border-[#E5EAEF] p-4 rounded-2xl bg-[#FFFFFF] grow"
  >
    <div class="flex justify-between items-center">
      <p class=" text-lg font-semibold">Sales Trends</p>
      <div class=" flex gap-3 items-center relative">
        <p>Short by :</p>
        <select name="range" id="range" class=" border-2 rounded-full appearance-none pl-3 pr-5  py-2 text-sm">
          <optgroup>
            <option value="Daily">Daily</option>
            <option value="Weekly" selected>Weekly</option>
            <option value="Monthly">Monthly</option>
          </optgroup>
        </select>
        <img src="../assets/arrow-down.svg" alt="" class=" absolute right-0 -translate-x-2">
      </div>
    </div>
  </section>
</template>

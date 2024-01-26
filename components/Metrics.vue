<template>
  <section class="flex flex-col justify-between gap-5 w-full xl:w-max">
    <div class="flex flex-col md:flex-row gap-5">
      <div
        class="border-2 border-[#E5EAEF] dark:border-none rounded-2xl flex flex-col p-4 gap-3 bg-[#FFFFFF] dark:bg-[#19376D]  grow"
      >
        <div class="flex justify-between">
          <img
            src="../assets/box-tick.svg"
            alt=""
            class="p-2 border rounded-full h-10 w-10"
          />
          <img src="../assets/greenmetrics.svg" alt="" />
        </div>
        <p class="text-[#898989] dark:text-[#A5D7E8] text-lg leading-none">Total Order</p>
        <p class="font-semibold text-2xl leading-none">350</p>
        <div class="flex gap-2">
          <div
            class="rounded-full bg-[#b3d7ce] dark:bg-[#65c87a9c] flex px-2 py-1 gap-2 items-center"
          >
            <img src="../assets/profit.svg" alt="" />
            <p class="text-[#41a869] dark:text-[#82ea98] text-xs">23,5%</p>
          </div>
          <p class="text-[#606060] dark:text-[#A5D7E8] text-sm">vs. previous month</p>
        </div>
      </div>

      <div
        class="border-2 border-[#E5EAEF] dark:border-none rounded-2xl flex flex-col p-4 gap-3 bg-[#FFFFFF] dark:bg-[#19376D]  grow"
      >
        <div class="flex justify-between">
          <img
            src="../assets/3d-rotate.svg"
            alt=""
            class="p-2 border rounded-full h-10 w-10"
          />
          <img src="../assets/redmetrics.svg" alt="" />
        </div>
        <p class="text-[#898989] dark:text-[#A5D7E8] text-lg leading-none">Total Refund</p>
        <p class="font-semibold text-2xl leading-none">270</p>
        <div class="flex gap-2">
          <div
            class="rounded-full bg-[#e55b48] dark:bg-[#f5a5a5dc] flex px-2 py-1 gap-2 items-center"
          >
            <img src="../assets/loss.svg" alt="" />
            <p class="text-[#ED544E] dark:text-[#a75b59] text-xs">23,5%</p>
          </div>
          <p class="text-[#606060] dark:text-[#A5D7E8] text-sm">vs. previous month</p>
        </div>
      </div>
    </div>

    <div class=" flex flex-col-reverse md:flex-row gap-5">
      <div
        class="border-2 border-[#E5EAEF] dark:border-none rounded-2xl flex flex-col p-4 gap-3 bg-[#FFFFFF] dark:bg-[#19376D] grow"
      >
        <div class="flex justify-between">
          <img
            src="../assets/shopping-cart.svg"
            alt=""
            class="p-2 border rounded-full h-10 w-10"
          />
          <img src="../assets/redmetrics.svg" alt="" />
        </div>
        <p class="text-[#898989] dark:text-[#A5D7E8] text-lg leading-none">Average Sales</p>
        <p class="font-semibold text-2xl leading-none">1567</p>
        <div class="flex gap-2">
          <div
            class="rounded-full bg-[#e55b48] dark:bg-[#f5a5a5dc]  flex px-2 py-1 gap-2 items-center"
          >
            <img src="../assets/loss.svg" alt="" />
            <p class="text-[#ED544E] dark:text-[#ED544E] text-xs">23,5%</p>
          </div>
          <p class="text-[#606060] dark:text-[#A5D7E8] text-sm">vs. previous month</p>
        </div>
      </div>

      <div
        class="border-2 border-[#E5EAEF] dark:border-none rounded-2xl flex flex-col p-4 gap-3 bg-[#FFFFFF] dark:bg-[#19376D]  grow"
      >
        <div class="flex justify-between">
          <img
            src="../assets/coin.svg"
            alt=""
            class="p-2 border rounded-full h-10 w-10"
          />
          <img src="../assets/greenmetrics.svg" alt="" />
        </div>
        <p class="text-[#898989] dark:text-[#A5D7E8] text-lg leading-none">Total Income</p>
        <p class="font-semibold text-2xl leading-none">$350.000</p>
        <div class="flex gap-2">
          <div
            class="rounded-full bg-[#b3d7ce] dark:bg-[#65c87a9c] flex px-2 py-1 gap-2 items-center"
          >
            <img src="../assets/profit.svg" alt="" />
            <p class="text-[#41a869] dark:text-[#82ea98] text-xs">23,5%</p>
          </div>
          <p class="text-[#606060] dark:text-[#A5D7E8] text-sm">vs. previous month</p>
        </div>
      </div>
    </div>
  </section>
</template>

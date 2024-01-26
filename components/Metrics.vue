<template>
  <section class="flex flex-col justify-between w-full gap-5 xl:w-max">
    <div class="flex flex-col gap-5 md:flex-row">
      <div
        class="border-2 border-[#E5EAEF] dark:border-none rounded-2xl flex flex-col p-4 gap-3 bg-[#FFFFFF] dark:bg-[#19376D]  grow"
      >
        <div class="flex justify-between">
          <img
            src="../assets/box-tick.svg"
            alt=""
            class="w-10 h-10 p-2 border rounded-full"
          />
          <img src="../assets/greenmetrics.svg" alt="" />
        </div>
        <p class="text-[#898989] dark:text-[#A5D7E8] text-lg leading-none">Total Order</p>
        <p class="text-2xl font-semibold leading-none">350</p>
        <div class="flex gap-2">
          <div
            class="rounded-full bg-[#E6F9F4] dark:bg-[#65c87a9c] flex px-2 py-1 gap-2 items-center"
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
            class="w-10 h-10 p-2 border rounded-full"
          />
          <img src="../assets/redmetrics.svg" alt="" />
        </div>
        <p class="text-[#898989] dark:text-[#A5D7E8] text-lg leading-none">Total Refund</p>
        <p class="text-2xl font-semibold leading-none">270</p>
        <div class="flex gap-2">
          <div
            class="rounded-full bg-[#FDEAEA] dark:bg-[#f5a5a5dc] flex px-2 py-1 gap-2 items-center"
          >
            <img src="../assets/loss.svg" alt="" />
            <p class="text-[#ED544E] dark:text-[#a75b59] text-xs">23,5%</p>
          </div>
          <p class="text-[#606060] dark:text-[#A5D7E8] text-sm">vs. previous month</p>
        </div>
      </div>
    </div>

    <div class="flex flex-col-reverse gap-5 md:flex-row">
      <div
        class="border-2 border-[#E5EAEF] dark:border-none rounded-2xl flex flex-col p-4 gap-3 bg-[#FFFFFF] dark:bg-[#19376D] grow"
      >
        <div class="flex justify-between">
          <img
            src="../assets/shopping-cart.svg"
            alt=""
            class="w-10 h-10 p-2 border rounded-full"
          />
          <img src="../assets/redmetrics.svg" alt="" />
        </div>
        <p class="text-[#898989] dark:text-[#A5D7E8] text-lg leading-none">Average Sales</p>
        <p class="text-2xl font-semibold leading-none">1567</p>
        <div class="flex gap-2">
          <div
            class="rounded-full bg-[#FDEAEA] dark:bg-[#f5a5a5dc]  flex px-2 py-1 gap-2 items-center"
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
            class="w-10 h-10 p-2 border rounded-full"
          />
          <img src="../assets/greenmetrics.svg" alt="" />
        </div>
        <p class="text-[#898989] dark:text-[#A5D7E8] text-lg leading-none">Total Income</p>
        <p class="text-2xl font-semibold leading-none">$350.000</p>
        <div class="flex gap-2">
          <div
            class="rounded-full bg-[#E6F9F4] dark:bg-[#65c87a9c] flex px-2 py-1 gap-2 items-center"
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

<template>
  <section class="flex flex-col gap-5">
    <div class="flex flex-col gap-5 xl:flex-row">
      <Salestrends /> 
      <Metrics />
    </div>
    <div class="flex flex-col gap-5 xl:flex-row">
      <Lastorders /> 
      <Topplatform />
    </div>
  </section>
  <NuxtPage />
</template>

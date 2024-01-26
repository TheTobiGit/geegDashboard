<template>
  <section class="flex gap-5 flex-col relative">
    <div class="flex gap-5 flex-col xl:flex-row">
      <Salestrends /> 
      <Metrics />
    </div>
    <div class="flex gap-5 flex-col xl:flex-row">
      <Lastorders /> 
      <Topplatform />
    </div>
    <NuxtPage />
  </section>
</template>

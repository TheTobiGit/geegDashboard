<template>
<section class=" w-screen flex">

    <div class=" hidden h-screen sticky top-0 lg:block">
        <Panel />
    </div>

    <div class=" grow">
        <div class=" sticky z-50 top-0">
            <Header />
        </div>
        <div class="md:p-5 p-3 bg-[#FAFAFA] dark:bg-[#0B2447]">
            <slot />
        </div>
    </div>

</section>
</template>

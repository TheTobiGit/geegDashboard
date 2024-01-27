<template>
<section class="flex w-screen ">

    <div class="sticky top-0 hidden h-screen  lg:block">
        <Panel />
    </div>

    <div class=" grow">
        <div class="sticky top-0 z-50 ">
            <Header />
        </div>
        <div class="md:p-5 p-3 bg-[#FAFAFA] dark:bg-[#181818]">
            <slot />
        </div>
    </div>

</section>
</template>

<template>
<section class=" w-screen flex">

    <div class="w-[5vw] hidden lg:block">
        <Panel />
    </div>

    <div class=" w-full">
        <div>
            <Header />
        </div>
        <div class="p-5 bg-[#FAFAFA]">
            <slot />
        </div>
    </div>

</section>
</template>

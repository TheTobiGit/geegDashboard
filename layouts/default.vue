<template>
<section class=" w-screen flex">

    <div class=" hidden h-screen sticky top-0 lg:block">
        <Panel />
    </div>

    <div class=" grow">
        <div>
            <Header />
        </div>
        <div class="md:p-5 p-3 bg-[#FAFAFA]">
            <slot />
        </div>
    </div>

</section>
</template>

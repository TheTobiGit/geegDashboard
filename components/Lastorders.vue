<template>
<section class="h-max border border-[#E5EAEF] p-4 rounded-2xl bg-[#FFFFFF] w-full flex flex-col gap-2 xl:w-[63.4%] dark:bg-[#1D1D1D] dark:border-[#2A2A2A] ">
    <div class="flex items-center justify-between">
        <p class="text-lg font-semibold ">Last Order</p>
        <button class=" text-[#35CAA5]">See All</button>
    </div>

    <div class="flex ">
        <div class="lg:w-[30%] md:w-[30%] w-[37%] flex flex-col gap-3">
            <p class="text-[#9CA4AB] dark:text-[#737373]">Name</p>
            <div v-for="user in users" :key="user.id" class="flex items-center gap-2 pt-2 border dark:border-[#2A2A2A] border-t border-b-0 border-x-0">
              <div :style="{ backgroundImage: 'url(' + user.img + ')'}" class="hidden w-6 h-6 bg-center bg-no-repeat bg-cover rounded-full md:block"></div>
                <p class="font-medium truncate ">{{ user.name }}</p>
            </div>
        </div>
        <div class="lg:w-[20%] md:w-[25%] w-[32%] flex flex-col gap-3">
            <p class="text-[#9CA4AB] dark:text-[#737373]">Date</p>
            <p v-for="user in users" :key="user.id" class=" border border-x-0 border-b-0 border-t pt-2 text-[#737373] dark:text-[#A3A3A3] dark:border-[#2A2A2A]">{{ user.date }}</p>
        </div>
        <div class="lg:-w-[20%] md:w-[25%] w-[31%] flex flex-col gap-3">
            <p class="text-[#9CA4AB] dark:text-[#737373]">Amount</p>
            <p v-for="user in users" :key="user.id" class="pt-2 font-medium border border-t border-b-0 border-x-0 dark:border-[#2A2A2A]">{{ user.amount }}</p>
        </div>
        <div class="w-[20%] hidden md:flex flex-col gap-3">
            <p class="text-[#9CA4AB] dark:text-[#737373]">Status</p>
            <p v-for="user in users" :key="user.id" class="pt-2 border border-t border-b-0 border-x-0 dark:border-[#2A2A2A]" :class="{'text-[#35CAA5]': user.status == 'Paid', 'text-[#ED544E]': user.status == 'Refund'}">{{ user.status }}</p>
        </div>
        <div class="w-[10%] hidden lg:flex flex-col gap-3">
            <p class="text-[#9CA4AB] dark:text-[#737373]">Invoice</p>
            <button v-for="user in users" :key="user.id" class="flex items-center gap-1 pt-2 border border-t border-b-0 border-x-0 dark:border-[#2A2A2A]">
                <Icon name="iconamoon:invoice" size="1rem" />
                <p class="font-normal ">{{ user.invoice }}</p>
            </button>
        </div>
    </div>
</section>
</template>

<script setup>
const users = ref([{
        id: 1,
        img: "https://img.freepik.com/free-photo/worldface-ugandan-man-white-background_53876-30388.jpg?w=826&t=st=1706251385~exp=1706251985~hmac=1cf42b853bb8db9253548fac561250b132c2bfcd520fb7ab8ade5d839dbacf2b",
        name: 'Zerebel Tanu',
        date: '27 Nov, 2024',
        amount: 'GHC 80,000',
        status: 'Paid',
        invoice: 'View'
    },
    {
        id: 2,
        img: "https://img.freepik.com/free-photo/front-view-handsome-man_23-2148467201.jpg?t=st=1706252814~exp=1706253414~hmac=d2672dd01703295432ea76766dc6d282e1bbc2e266f18fa262f5c1ff4d1f6eb2",
        name: 'Alex Gyekye',
        date: '22 Nov, 2024',
        amount: 'GHC 50,000',
        status: 'Refund',
        invoice: 'View'
    },
    {
        id: 3,
        img: "https://img.freepik.com/free-photo/portrait-expressive-young-man_273609-5310.jpg?w=826&t=st=1706252832~exp=1706253432~hmac=ff0cb972e49de8508396d9941190fcee62521eb861652d0c5f8342988cd578d4",
        name: 'Joseph Kotey',
        date: '20 Nov, 2024',
        amount: 'GHC 42,000',
        status: 'Paid',
        invoice: 'View'
    },
    {
        id: 4,
        img: "https://img.freepik.com/free-photo/close-up-portrait-dark-skinned-adult-man-with-thick-bristle-smiles-toothy-wears-big-optical-glasses-striped-jumper-glad-meet-friend_273609-38587.jpg?w=826&t=st=1706252790~exp=1706253390~hmac=330efb6476907851523a8f4d9bc013b2cf63d0f49cf3636c66460bac7cce037c",
        name: 'Peter Yevu',
        date: '17 Oct, 2024',
        amount: 'GHC 12,000',
        status: 'Paid',
        invoice: 'View'
    },
    {
        id: 5,
        img: "https://s3-alpha-sig.figma.com/img/f9e6/5870/a9caf38791170e945adeacba41c1437d?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HdksHQxHM~tb8Nnxekxp8FA-Emwqld7ZqMiyMkrVTy1n4Ad75A-ltzWCZqKKhP~VYr04R471eq6GvGG68UmlCshQ6HbyM-BPMQWJ9lwnm5qXYR6RHZBWfzfM9wrxc1uGUZSzDsdh1nSHzPJKK6kKOGeaBP14dgTdow2N5sMs1cc5ZfVOfZWUeXPKh2vjZ0i3hKTWU6OyiQ7OI2dH49XcNYZKOFYcws-JAWL8-EVFuIwanVMnJaxUQkxZQizEI3Q7Yr~HbXnI~YxHUNQWjOEe5lXQ8Xvhp~G2PRKc07vFPJDR-HIXuGNmJ9cOnt1A~6RXtHAI13xCWjnkXuuT87EHSw__",
        name: 'Kwame Derez',
        date: '16 Oct, 2024',
        amount: 'GHC 3,000',
        status: 'Refund',
        invoice: 'View'
    },
])
</script>

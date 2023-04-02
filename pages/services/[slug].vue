<script lang="ts" setup>
const { data } = useFetch('/');
</script>
<template lang="pug">
SectionAside(alignment="left")
    template(#sidebar)

        NuxtLink.px-4( to="/" ) Go back
    
        SectionHeader Cleaning Roof
    
        .service-feratures.px-4.space-y-8
            .feature
                .text-xl.mb-2.font-medium We Brush your roof
                p.text-sm We clean Solar Roof an thats it more that enough inforamtion for you
            .feature
                .text-xl.mb-2.font-medium We can wash your car
                p.text-sms We clean Solar Roof an thats it more that enough inforamtion for you
            .feature
                .text-xl.mb-2.font-medium We can wash your car
                p.text-sms We clean Solar Roof an thats it more that enough inforamtion for you
        .cta.px-4
            ButtonGhost(label="Order Now" link="/order") OrderNow
    template(#main)
        .absolute.top-0.bottom-0.left-0.right-0(class="bg-cover bg-[url('/img/roof-pannels.jpg')]")
</template>
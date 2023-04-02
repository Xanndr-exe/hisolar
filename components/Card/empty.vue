<script lang="ts" setup>

interface Props {
    heading: string,
    summary: string,
    icon?: string,
    link: string,
}

const props = withDefaults(defineProps<Props>(),{
    heading: 'Simple Card Header',
    summary: 'Lorem Ipsum Dolor Sit amet. De amet sit ipsum dolor lorem. Amet sit lorem dorlor',
    icon: 'mdi:arrow-top-right',
    link: '/index',
});

</script>
<template lang="pug">
NuxtLink( :to="link" ).block.w-full.p-5.rounded-2xl.text-dark(class="bg-gray/[0.5]")
    .text-xl.font-default.pb-2.flex.space-x-2.items-center.font-medium
        Icon(:name="icon")
        h3 {{ heading }}
    .text-sm.font-default {{ summary }} 
</template>
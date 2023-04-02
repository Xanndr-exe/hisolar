<script setup lang="ts">

interface Props {
    to: string,
    rounded?: 'sm' | 'full' | 'md' | 'xl',
    uppercase?: boolean,
    size: 'sm' | 'lg' | 'xl', 
}

const props = withDefaults(defineProps<Props>(),{
    rounded: 'sm',
    to: 'http://google.com',
    uppercase: true,
    size: 'lg',
});
</script>
<template lang="pug">
NuxtLink.inline-block.bg-purple.py-2.px-6.text-white( 
    :class="[ { 'uppercase' : uppercase }, `rounded-${rounded} text-${size}`]"
    :to="to"
    )
    slot
</template>
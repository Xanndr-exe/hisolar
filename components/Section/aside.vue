<script lang="ts" setup>
const props = defineProps<{
    alignment: 'left' | 'right';
}>()
</script>
<template lang="pug">
section.h-screen.font-default.relative.overflow-hidden
    .flex.items-stretch(
        :class="{ 'md:flex-row-reverse' : alignment ===  'right' }"
        class="h-screen md:h-auto flex-col-reverse  md:flex-row justify-between md:items-stretch md:justify-start"
        )
        div( class="md:w-1/3 p-4 md:p-10 bg-white md:h-screen space-y-4 lg:space-y-10 flex flex-col items-start justify-center")
            slot(name="sidebar")
        div( class="md:w-2/3 grow relative" )
            slot( name="main")
</template>
<script lang="ts" setup>
interface Props{
  width: 'full' | 'contained' | 'small',
}

const props = withDefaults(defineProps<Props>(), {
  width: 'contained',
})

const containerClass = computed(() => ({
  'w-full px-4 lg:px-20': props.width == 'full',
  'max-w-7xl px-4 mx-auto': props.width == 'contained',
}))

</script>
<template lang="pug">
div(:class="containerClass")
  slot
</template>
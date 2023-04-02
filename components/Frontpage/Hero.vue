<script lang="ts" setup>
const showModal = ref(false);
const scrollCloud = ( event ) => {
  console.log(event)
}
</script>
<template lang="pug">
#hero-banner(
  
  class="relative min-h-screen px-5 bg-[url('/img/gradient-bg.png')] bg-right lg:px-20 flex items-center bg-cover font-default overflow-hidden"
  
  )
  
  img( class="absolute w-2/3 right-0 bottom-0" src="/img/illustration-house.png" )
  
  .hero-content.space-y-8.text-left.relative
  
    .subtitle.text-right(class="text-dark py-5 border-b text-right border-purple border-dashed")
  
      .inline-block.text-right.space-x-5.flex.items-center.justify-end
        span.block Amet minim mollit non deserunt
        Icon(class="block item-icon text-3xl" name="la:dot-circle-solid")
  
    h1.text-dark(class="text-5xl lg:text-7xl") <span class="text-purple">Hi</span> Solar Solutions

    p.text-sm.text-dark.max-w-xl(class="max-w-md font-default") Solar panels are a clean, renewable energy source that can help you save money on your energy bills and reduce your impact on the environment.

    ButtonMain( to="/order" size="lg" ) Order Installation
</template>
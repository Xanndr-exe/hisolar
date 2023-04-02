<script lang="ts" setup>
</script>
<template lang="pug">
section.bg-white.py-40.font-default
	GlobalContainer(width="contained")
		.grid.grid-cols-2.gap-10.items-center
			.media(class="col-span-2 md:col-span-1 rounded rounded-2xl overflow-hidden")
				img( class="object-cover object-right-top" src="/img/ingeneers-install-panels.jpg" )
			.content(class="col-span-2 md:col-span-1 space-y-8")
				.text-3xl.text-purple.font-sans Cost-effective 
				p.text-base Infinite Renewable Solar Energy is the future of sustainable power. Solar panels have become a popular source of renewable energy as they convert sunlight into electricity. With the advancement in solar technology, solar panels have become more efficient and cost-effective.
				NuxtLink(to="/order").bg-purple.rounded-md.inline-block.px-6.py-2.font-medium.text-base.text-white Order Now
</template>
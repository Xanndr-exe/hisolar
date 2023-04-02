<script setup>
const props = defineProps({
	title: {
		type: String,
		default: 'Hotel Equatorial Melaka',
	},
	body: {
		type: String,
		default: '"Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic."',
	},
	name: {
		type: String,
		default: 'Courtney Henry',
	},
	role: {
		type: String,
		default: 'Web Designer',
	},
	avatar: {
		type: String,
		default: '/images/placeholder-avatar.png'
	},
});
</script>

<template>
	<div class="relative p-5 rounded-[10px] sm:p-[30px] shadow-v3 bg-[#fff]">
		<img class="-top-3 right-0 absolute" src="/icons/icon-quote.svg" alt="">
		<div class="text-[15px] font-medium leading-[30px] md:text-base space-y-[30px]">
			<p>{{ title }}</p>
			<p>{{ body }}</p>
			<div class="flex justify-bewtween space-x-2 items-center">
				<img class="rounded-full w-10 h-10 sm:w-[72px] sm:h-[72px] object-cover" :src="avatar" />
				<div class="flex flex-col space-y-">
					<p class="text-[14px] sm:text-[15px] leading-[26px]">{{ name }}</p>
					<p class="text-[14px] leading-[21px] text-gray-400 font-normal">{{ role }}</p>
				</div>
			</div>
		</div>
	</div>
</template>
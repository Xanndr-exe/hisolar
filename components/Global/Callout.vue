<script lang="ts" setup>
</script>
<template lang="pug">
section.divider.font-default(class="bg-[url('/img/Rectangle.jpg')] bg-center bg-cover w-full py-16 px-4 lg:py-24")
	.border(class="border-[#EDFDF8] font-medium bg-white/[0.2] max-w-7xl mx-auto rounded-3xl py-24 px-10")
		.heading(class="text-3xl md:text-4xl text-white max-w-md text-center mx-auto line-2 mb-20 leading-normal") Always happy, to hear from you!
		.flex.justify-center( class="flex-col space-y-5 md:space-y-0 items-stretch md:flex-row md:space-x-4" )
			.email.relative
				input( class="bg-white/[0.01] w-full md:w-auto backdrop-blur-sm text-white border rounded-md pl-4 pr-10 py-3 placeholder-white border-[#EDFDF8] outline-none" placeholder="Your Email" )
			button.bg-white.text-purple.px-10.py-3.rounded-md
				span Lets Get Started 
				Icon(name="ph:arrow-right-bold")
</template>
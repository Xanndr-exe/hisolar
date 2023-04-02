<script lang="ts" setup>
useHead({
	title: 'Home',
	meta: [
		{
			name: 'description',
			content: 'We are the company',
		},
		{
			name: 'image',
			content: '/logo.svg',
		}
	]
})
interface Props {
	heading: string,
	services: Service[],
	features: Feature[]
}

type Feature = {
	icon: string,
	heading: string,
	text: string,
}

type Service = {
	heading: string,
	link: string,
	summary: string,
	thumbnail: string,
}

withDefaults(defineProps<Props>(), {
	heading: 'Our Services',
	services: () => [
		{
			heading: 'Solar Roof Consultaion',
			link: '/services/cleaning',
			summary: 'Lorem ipsum dolor sit amet. First of all we select preferred plan and technologies. To get starded then jump ',
			thumbnail: '/img/solar-systems-field.jpg',
		},
		{
			heading: 'Solar system Ground mounting',
			link: '/services/mouting',
			summary: 'Lorem ipsum dolor sit amet. First of all we select preferred plan and technologies. To get starded then jump',
			thumbnail: '/img/solar-systems-field.jpg',
		},
		{
			heading: 'Solar Roof Installation',
			link: '/services/instalation',
			summary: 'Lorem ipsum dolor sit amet. First of all we select preferred plan and technologies. To get starded then jump',
			thumbnail: '/img/solar-systems-field.jpg',
		},
	],
	features: () => [
		{
			icon: 'mdi:recycle-variant',
			heading: 'Hernieuwbare',
			text: 'Zonne-energie is een hernieuwbare energiebron, wat betekent dat het kan worden benut zolang de zon schijnt, wat naar verwachting nog minstens 5 miljard jaar zal blijven duren.',
		},
		{
			icon: 'ps:leaf',
			heading: 'Milieuvriendelijk',
			text: 'Zonne-energie is een schone energiebron die geen schadelijke emissies of vervuiling produceert, waardoor het een milieuvriendelijk alternatief is voor fossiele brandstoffen.',
		},
		{
			icon: 'material-symbols:attach-money-rounded',
			heading: 'Cost-effective',
			text: 'Zonne-energie is een schone energiebron die geen schadelijke emissies of vervuiling produceert, waardoor het een milieuvriendelijk alternatief is voor fossiele brandstoffen.',
		},
		{
			icon: 'game-icons:life-bar',
			heading: 'Long lifespan',
			text: 'Zonne-energie is een schone energiebron die geen schadelijke emissies of vervuiling produceert, waardoor het een milieuvriendelijk alternatief is voor fossiele brandstoffen.',
		},

	]
});

const posts = [
	{
		id: 1,
		title: 'Boost your conversion rate',
		href: "/blog/single-article",
		description:
			'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
		imageUrl:
			'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
		date: 'Mar 16, 2020',
		datetime: '2020-03-16',
		author: {
			name: 'Michael Foster',
			imageUrl:
				'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	},
	{
		id: 1,
		title: 'Boost your conversion rate',
		href: "/blog/single-article",
		description:
			'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
		imageUrl:
			'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
		date: 'Mar 16, 2020',
		datetime: '2020-03-16',
		author: {
			name: 'Michael Foster',
			imageUrl:
				'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	},
	{
		id: 1,
		title: 'Boost your conversion rate',
		href: "/blog/single-article",
		description:
			'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
		imageUrl:
			'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
		date: 'Mar 16, 2020',
		datetime: '2020-03-16',
		author: {
			name: 'Michael Foster',
			imageUrl:
				'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	},
]

</script>

<template lang="pug">
FrontpageHero
section#more-info.relative.font-default(class="flex bg-cover bg-center flex-col justify-between px-4 py-10 lg:px-10 lg:py-20")
	GlobalContainer(width="contained").w-full
		div(class="bg-[url('/img/second-gradient.png')] relative overflow-hidden w-full space-y-20 shadow-md shadow-grey/[0.2] bg-cover rounded-2xl py-10 px-4 lg:py-16 lg:px-10")
			img(src="/img/le-cloud-object.png" class="absolute ml-0 mr-0 left-0 right-0 min-w-[500px] lg:w-1/2 top-0 opacity-20 left-0")
			img(src="/img/le-cloud-object.png" class="absolute w-2/3 hidden lg:block rotate-180 -top-20 opacity-20 -right-40")
			.text-center.mb-10.max-w-4xl.mx-auto.rounded-2xl.space-y-10
				.span.text-purple.text-sm.font-semibold ONZE TOPFUNCTIES
				.text-5xl.font-semibold.text-dark Welkom bij Hi Solar
				p.text-base.text-greyOnze producten zijn van hoge kwaliteit, betrouwbaar en ontworpen om u maximale energie-efficiëntie te bieden. Of u nu uw ecologische voetafdruk wilt verminderen of geld wilt besparen op uw elektriciteitsrekening, wij staan klaar om u bij elke stap te helpen. Verken onze website om meer te weten te komen over onze producten en diensten, en neem gerust contact met ons op als u vragen heeft. Bedankt dat u ons heeft gekozen als uw partner voor zonne-energie.

			.grid.grid-cols-2.gap-10.mx-auto(class="max-w-full lg:max-w-4xl grid-rows-4 lg:grid-rows-2")
				.card-small(class="flex space-x-4 items-start col-span-2 md:col-span-1" v-for="item in features")
					Icon( class="font-extrabold grow block w-20 text-4xl text-[#95C807]" :name="item.icon")
					.space-y-5
						.text-xl.font-medium.text-dark {{ item.heading }}
						p.text-sm.text-grey.inline-block {{ item.text }}

section.font-default.py-20(class="bg-[#BA8EED]")
	.max-w-7xl.px-4.mx-auto.relative(class="px-4 md:px-40")
		.heading.text-4xl.font-regular.mb-20(class="text-[#2A2E2A]") 
		Swiper
			SwiperSlide
				.grid(class="grid-cols-6 lg:space-x-20 items-center text-white")
					.image(class="col-span-6 lg:col-span-3")
						img( src="/img/scewed-product.png" class="sm:max-w-sm mx-auto" )
					.content( class="col-span-6 max-w-sm mx-auto md:max-w-auto lg:col-span-3 pt-10 space-y-10 text-center lg:text-left")
						.text-white(class="text-2xl font-medium lg:font-regular lg:text-5xl") De producten die wij leveren.
						p.text-base LONGi Solar is a global leader in the production of high-efficiency monocrystalline solar panels and modules. The company produces innovative and high-quality mono solar panels under the brand name Longi.
			SwiperSlide
				.grid(class="grid-cols-6 lg:space-x-20 items-center")
					.image(class="col-span-6 lg:col-span-3")
						.divider(class="block text-white w-full max-w-sm mx-auto md:max-w-auto border-b flex justify-between border-[#4A505C]/[0.3] py-2 mb-10")
							.naming
								.model.text-xs Name
								.name(class="text-lg font-medium text-white") Longi
							.model.text-right
								.model.text-xs Model
								.name(class="text-lg font-medium text-white") LR5-54HPB-410M 410WP
						img( src="/img/image-ref-specifications.png" class="sm:max-w-sm mx-auto" )
					.content( class="col-span-6 lg:col-span-3 space-y-10 max-w-sm mx-auto md:max-auto")
						.text-white(class="text-2xl font-medium lg:font-regular lg:text-5xl") Our Solar Pannels one of best
						ul.space-y-4.text-white
							li.flex.space-x-5.items-center
								span.font-medium(class="text-base lg:text-lg") Weight : 
								span.text-white 21,5KG
							li.flex.space-x-5.items-center
								span.font-medium(class="text-base lg:text-lg") Size : 
								span.text-white 1722 x 1134 x 30mm
							li.flex.space-x-5.items-center
								span.font-medium(class="text-base lg:text-lg") Key Points : 
								span.text-white Easy to maintain, Efficienct
							li.flex.space-x-5.items-center
								span.font-medium(class="text-base lg:text-lg") Mounting Type : 
								span.text-white Roof / Ground
		.icon-prev.w-20.h-20.flex.rounded-full.items-center.justify-center(class="absolute hidden sm:flex left-10 top-1/3 bg-[#EDFDF8]")
			Icon(name="ph:arrow-left-light" class="text-grey text-3xl")
		.icon-next.w-20.h-20.flex.rounded-full.items-center.justify-center(class="absolute hidden sm:flex right-10 top-1/3 bg-[#EDFDF8]")
			Icon(name="ph:arrow-right-light" class="text-grey text-3xl")

section.font-default.py-20.font-default(class="px-5")
	.max-w-7xl.mx-auto.px-4
		.heading(class="space-y-4 lg:space-y-8")
			span(class="bg-[#BA8EED]").text-white.text-sm.px-3.rounded-full Articles
			.title(class="text-3xl lg:text-5xl") From HiSolar Blog
			NuxtLink(to="/blog").bg-purple.rounded-md.inline-block.px-6.py-2.font-medium.text-base.text-white Read More
			
	.bg-white
		.mx-auto.max-w-7xl
			.mx-auto.grid.max-w-2xl.auto-rows-fr.grid-cols-1.gap-8(class='mt-5 sm:mt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3')
				article.relative.isolate.flex.flex-col.justify-end.overflow-hidden.rounded-2xl.bg-gray-900.px-8.pb-8.pt-80(v-for='post in posts' :key='post.id' class='sm:pt-48 lg:pt-80')
					img.absolute.inset-0.-z-10.h-full.w-full.object-cover(:src='post.imageUrl' alt='')
					.absolute.inset-0.-z-10.bg-gradient-to-t.from-gray-900(class='via-gray-900/40')
					.absolute.inset-0.-z-10.rounded-2xl.ring-1.ring-inset(class='ring-gray-900/10')
					.flex.flex-wrap.items-center.gap-y-1.overflow-hidden.text-sm.leading-6.text-gray-300
						time.mr-8(:datetime='post.datetime') {{ post.date }}
						.-ml-4.flex.items-center.gap-x-4
							svg.flex-none(viewbox='0 0 2 2' class='-ml-0.5 h-0.5 w-0.5 fill-white/50')
							circle(cx='1' cy='1' r='1')
							.flex(class='gap-x-2.5')
							img.h-6.w-6.flex-none.rounded-full(:src='post.author.imageUrl' alt='' class='bg-white/10')
							|                 {{ post.author.name }}
					h3.mt-3.text-lg.font-semibold.leading-6.text-white
						NuxtLink(:to='post.href')
							span.absolute.inset-0
							| {{ post.title }}

GlobalCallout
</template>

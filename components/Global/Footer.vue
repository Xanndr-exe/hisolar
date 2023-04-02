<script setup lang="ts">
const footerNavigation = [ 
    { title: 'About US', link: '/About' },
    { title: 'Order', link: '/order' }
];

const socialMedia = [
    {
      icon: 'ph:instagram-logo-light',
      label: 'Instagram',
      link: 'http://instagram.com',
    },
    {
      icon: 'iconoir:facebook-tag',
      label: 'Facebook',
      link: 'http://instagram.com',
    },
];
</script>

<template lang="pug">
.w-full.py-10.px-4.font-default(class="bg-[#BA8EED]")
    .flex(class="flex-col space-y-10 md:space-y-0 md:flex-row justify-between items-center flex-wrap")
        .menu(class="text-white flex items-center justify-center md:justify-start flex-wrap space-y-10 md:space-y-0 md:space-x-5 lg:space-x-10 text-2xl md:text-lg")
            .logo
                img( class="max-h-8" src="/img/logo-white.png")

            .item( class="w-full md:w-auto text-center md:text-left" v-for="item in footerNavigation" )
                NuxtLink( :to="item.link" ) {{ item.title }}
        
        .social-links.flex.space-x-10
          .item(
            class="flex justify-between items-center space-x-2 text-lg w-full text-white transition-opacity max-w-md text-left"
            v-for="link in socialMedia"
            )
            Icon( class="text-2xl text-white" :name="link.icon")
            NuxtLink( class="grow" :to="link.link" ) {{ link.label }}
</template>
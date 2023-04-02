<script setup lang="ts">
  const menu = [
    {
      link: '/about',
      text: 'About Us',
      icon: 'clarity:talk-bubbles-line',
    },
    {
      link: '/order',
      text: 'Order',
      icon: 'cil:bus-alt',
    }
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
  ]
  const socialLinks = [

    {
      icon: 'material-symbols:alternate-email-rounded',
      label: 'support@hisolar.com',
      link: 'mailto:support@hisolar.com',
    },
    {
      icon: 'ic:baseline-local-phone',
      label: '+123(345)2341',
      link: 'tel:+123(345)2341',
    },
  ]
  const isMenuOpen = ref(false);
  
  let cordX = ref(0);
  let cordY = ref(null);
  
  const moveCloud = ( event: any ) => {
    const rect = event.target.getBoundingClientRect();
    cordX.value = event.clientX - rect.left;
    cordY.value = event.clientY - rect.top;
  } 
  const resetCords = () => {
    setTimeout(() => {
      cordX.value = 50;
    }, 300);
  }
</script>

<style lang="css" scoped>
  .cloud{
    transition: all .3s;
  } 
  .item:hover{
    opacity: 1;
  }
  .item:hover .item-icon{
    opacity: 1;
  }
  .item-icon{
    transition: all .3s;
  }
</style>

<template lang="pug">
.header-section(class="bg-white absolute z-20 left-0 right-0 px-5 xl:px-20 py-5 lg:py-5")
  .flex(class="justify-between items-center font-default")
    .logo(class="lg:w-1/5").text-5xl
      NuxtLink(to='/')
        img(class="h-8" src="/img/company-logo.png", alt="")
    .menu-items.grow.flex.justify-center(class="hidden lg:flex")
      .item( 
        class="flex justify-between text-center text-base w-full max-w-[200px] text-left"
        v-for="item in menu"
        )
        NuxtLink( class="uppercase grow" :to="item.link" ) {{ item.text }}
        Icon(class="opacity-0 item-icon text-lg" name="la:dot-circle-solid")
    
    .buttons.relative.z-10.text-right.flex.justify-end(class="w-1/5")
      button.w-10.flex.flex-col.items-center.justify-between.h-5(
        class="block lg:hidden"
        @click="isMenuOpen = true"
        )
        span(class="w-3/5 bg-dark block h-px self-end")
        span(class="w-full bg-dark block h-px")
        span(class="w-1/3 relative -top-1 block h-px text-center self-start text-black text-[10px]") menu
      NuxtLink( class="hidden lg:block" to="/order").text-purple.text-base.uppercase.font-bold Order Installation
  
  #mobile-menu( v-if="isMenuOpen" class="px-5 pt-14 z-20 font-default fixed block lg:hidden w-3/4 bg-white top-0 bottom-0 right-0" )
    Icon(
      @click="isMenuOpen = false"
      name="radix-icons:cross-1"
      class="text-xl absolute top-2 left-3"
      )
    .menu-items.grow.flex.flex-col.items-start
      .text-2xl.pb-2 Website:
      .item(
        class="flex justify-between items-center space-x-3 text-lg pt-4 w-full duration-300 transition-opacity max-w-md text-left"
        v-for="item in menu"
        )
        Icon( class="text-purple" :name="item.icon")
        NuxtLink( class="uppercase grow" :to="item.link" ) {{ item.text }}
    .divider(class="h-[2px] bg-purple mx-auto w-[90%] my-5")
    
    .socials
      .text-2xl.pb-2 We in social:
          .item(
            class="flex justify-between items-center space-x-3 text-lg pt-4 w-full duration-300 transition-opacity max-w-md text-left"
            v-for="link in socialMedia"
            )
            Icon( class="text-purple" :name="link.icon")
            NuxtLink( class="grow" :to="link.link" ) {{ link.label }}
    
    .divider(class="h-[2px] bg-purple mx-auto w-[90%] my-5")
    
    .more-items
      .text-2xl.pb-2 Contact:
        .item(
          class="flex justify-between items-center space-x-3 text-lg pt-4 w-full duration-300 transition-opacity max-w-md text-left"
          v-for="link in socialLinks"
          )
          Icon( class="text-purple" :name="link.icon")
          NuxtLink( class="grow" :to="link.link" ) {{ link.label }}
</template>
<script lang="ts" setup>

const pageData = {

heading:{
    title: 'We Are HiSolar',
    short_desc: "",
},
mainContent: {
    title: 'Welkom',
    description: "Bluemoon is building a community of liked minded travellers from all over the world. We call our community members 'creators' as each and every individual creates new experiences when they book with Bluemoon. All members have one thing in common which is their shared interest in creating unique memories through luxury travel. We believe that there is huge value in building an environment where our users can share experiences, meet liked minded people and build new opportunities.\n\n Bluemoon will invite our creators to events throughout the year as we look to grow the community."
},
numbers: [
    {
        number: '200', 
        text: 'panelen geïnstalleerd'
    },
    {
        number: '20', 
        text: 'Blije klanten'
    },
    {
        number: '15', 
        text: 'Teamleden'
    },
    {
        number: '1215', 
        text: 'Werk tijden'
    }
],

values: {
    title: "Why Book with bluemoon",
    items:[
        {
            icon: '/icons/calendar.svg',
            name: 'Time Saved',
            description: 'We aggregate quality product and service on a single platform.'
        },
        {
            icon: '/icons/calendar.svg',
            name: 'Verification',
            description: 'We do things successfully and without waste.'
        },
        {
            icon: '/icons/calendar.svg',
            name: 'Simplified Booking',
            description: 'We remove friction from luxury travel by leveraging technology.'
        },
        {
            icon: '/icons/calendar.svg',
            name: 'Immediate Response',
            description: 'Our platform and network of industry experts work hand-in-hand to provide you with information faster than anywhere else.'
        },
        {
            icon: '/icons/calendar.svg',
            name: 'Community',
            description: 'Grow your network by joining a community of like minded individuals and be invited to exclusive events throughout the year. '
        }
    ],
},

}

</script>
<template>


<section class="w-full ml-auto mr-0">
    <div class="text-center pt-[120px] py-[60px] text-main">
        <h1 class="font-default text-purple font-medium text-[26px] sm:text-[30px] lg:text-[40px] leading-[39px] sm:leading-[45px] lg:leading-[65px]">{{ pageData.heading.title }}</h1>
        <p class="leading-[30px] text-base"> {{ pageData.heading.short_desc }} </p>
    </div>

    <div class="flex w-full flex-row-reverse xl:gap-x-40 justify-start lg:justify-center items-center">
        
        <img class="hidden md:block rounded-0 rounded-l-[10px] inline-block max-h-[484px] xl:rounded-[10px] h-full xl:h-[700px] w-2/5 xl:w-[630px] object-cover" src="/img/image-main.webp"/> 
        
        <div class="w-3/5 xl:w-auto xl:max-w-[520px] grow xl:grow-0">
            <div class="mx-auto px-5 md:px-10 lg:px-20 xl:px-0">
                <h3 class="text-purple font-default mb-[20px] sm:mb-[30px] font-medium text-main text-[20px] leading-[30px] sm:leading-[39px] lg:leading-[45px] sm:text-[26px] lg:text-[30px]">{{ pageData.mainContent.title }}</h3>
                <p class="text-main pb-[40px] sm:pb-[30px] lg:pb-[55px]">

                    Bij Hi Solar zijn we gepassioneerd over hernieuwbare energie en toegewijd om onze klanten te helpen overgaan naar een duurzamere toekomst door middel van het gebruik van zonnepanelen.
                    Ons team van zonne-experts brengt jarenlange ervaring en een diepgaand begrip van de nieuwste technologieën mee naar elk project dat we uitvoeren.<br><br>
                    Sinds onze oprichting hebben we duizenden zonnepanelen geïnstalleerd, waardoor zowel huizen als bedrijven hun ecologische voetafdruk hebben kunnen verkleinen en geld hebben kunnen besparen op energiekosten.
                    We geloven dat zonne-energie de sleutel is tot een helderdere, schonere en meer duurzame toekomst, en we zijn toegewijd om het voor iedereen toegankelijk te maken.
                    Bij Hi Solar verkopen we niet alleen zonnepanelen - we helpen een betere wereld te creëren voor toekomstige generaties.

                </p>
                <div class="block text-center sm:text-left">
                    <Button class="w-[200px] bg-purple py-2 text-white rounded-[4px]">
                        Installatie bestellen
                    </Button>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="pt-[100px] mb-[60px] max-w-[1140px] container mx-auto px-5">
    <div class="flex w-full justify-between font-default flex-wrap gap-y-[60px]">
        <div v-for="item in pageData.numbers" class="w-1/2 lg:w-auto text-main inline-block text-center space-y-[5px]">
            <div class="text-[30px] text-purple lg:text-[40px] font-semibold leading-[60px]">{{ item.number }}</div>
            <p class="text-[15px] text-grey leading-[26px]">{{ item.text }}</p>
        </div>
    </div>  
</section>

<div class="py-[120px] space-y-[40px] font-default">
    <h2 class="text-3xl font-medium text-purple lg:text-5xl text-center"> Oprichters </h2>
    <div class="container flex flex-wrap justify-center gap-x-10 gap-y-8 sm:gap-x-[75px] lg:gap-x-32">
        <div class="text-center space-y-5">
            <img  src="https://ionicframework.com/docs/img/demos/avatar.svg"  class="rounded-full w-[217px] h-[217px] md:w-[350px] md:h-[350px] object-contain">
            <div>
                <div class="mb-1 heading-3 font-purple text-2xl">Name Surname</div>
                <p class="heading-4">CEO</p>
            </div>
        </div>
        <div class="text-center space-y-5">
            <img src="https://ionicframework.com/docs/img/demos/avatar.svg" class="rounded-full w-[217px] h-[217px] md:w-[350px] md:h-[350px] object-contain">
            <div>
                <div class="mb-1 heading-3 font-purple text-2xl">Name Surname</div>
                <p class="heading-4">COO</p>
            </div>
        </div>
    </div>
</div>
<GlobalCallout/>
</template>
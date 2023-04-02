<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import 'swiper/css';

const reviews = {
    heading: 'Overheard from Сreators',
    item:{
        heading: 'Hotel Equatorial Melaka',
        description: '"Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic."',
        image: 'https://media.licdn.com/dms/image/C5603AQE6p3vf0C7QQA/profile-displayphoto-shrink_800_800/0/1620857877595?e=2147483647&v=beta&t=Sey8slPB7NCs5HYY3Oth9t0H-difghq6FbHiorE2ij0',
        name: 'Courtney Henry',
        role: 'Web Designer',
    }
}
</script>

<template>
    <div class="relative flex mx-auto text-darkmax-w-[802px] px-12 sm:px-[72px] lg:px-[100px] lg:max-w-[1457px]">
        <Swiper class="pt-[100px]" :spaceBetween="20" :slidesPerView="1" :navigation="navigation" :modules="swiperModules"
            :breakpoints="{
                '768': {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                '1140': {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
            }">
            <SwiperSlide v-for="item in 12">
                <CardReview
                    class="m-[10px] mt-[15px]"
                    :name="reviews.item.name"
                    :body="reviews.item.description"
                    :title="reviews.item.heading"
                    :role="reviews.item.role"
                    :avatar="reviews.item.image"
                    />
            </SwiperSlide>
        </Swiper>

        <div class="controls max-w-screen absolute left-0 right-0 top-0 bottom-0 flex justify-between items-center">
            <span
                class="swiper-button-prev flex border shadow-v1 border-gray-200 justify-center items-center w-10 h-10 bg-white rounded-full cursor-pointer">
                <Icon name="arrow-right-bold" :width="9" :height="9" class="rotate-180"></Icon>
            </span>

            <span
                class="swiper-button-next flex border shadow-v1 border-gray-200 justify-center items-center w-10 h-10 bg-[#fff] rounded-full cursor-pointer">
                <Icon name="arrow-right-bold" :width="9" :height="9"></Icon>
            </span>
        </div>

    </div>
</template>
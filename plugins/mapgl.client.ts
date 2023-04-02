import Mapbox from 'mapbox-gl';
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('Mapbox', Mapbox);
})
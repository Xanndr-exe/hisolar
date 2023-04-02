import VueKinesis from "vue-kinesis";
import {KinesisElement} from "vue-kinesis"
import {KinesisContainer} from "vue-kinesis"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueKinesis, VueKinesis);
  nuxtApp.vueApp.component('KinesisContainer', KinesisContainer);
  nuxtApp.vueApp.component('KinesisElement', KinesisElement);
})
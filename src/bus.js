//event.bus是可以跨元件使用的
//可能會忘記在哪裡設定
//所以另外開一個bus.js來單獨寫入
//以免忘記

import Vue from 'vue';

Vue.prototype.$bus = new Vue();
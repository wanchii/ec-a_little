import Vue from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import {
  ValidationObserver,
  ValidationProvider,
  configure,
  localize,
  extend,
} from 'vee-validate'; // 驗證套件
import * as rules from 'vee-validate/dist/rules'; // 規則檔案（ex: email...）
import zhTW from 'vee-validate/dist/locale/zh_TW.json'; // 語系檔案
import Vue2Editor from 'vue2-editor';

import VueClipboard from 'vue-clipboard2'; // 複製套件
import Toast from 'vue-toastification'; // 訊息提示套件
import 'vue-toastification/dist/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';
import {
  Swiper as SwiperClass,
  Pagination,
  Mousewheel,
  Autoplay,
} from 'swiper/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import jquery from 'jquery';
import 'bootstrap';
import './bus';
import App from './App.vue';
import router from './router';
import currencyFilter from './filters/currency';

window.$ = jquery;
Vue.config.productionTip = false;
Vue.use(Toast, {
  position: 'bottom-right',
  newestOnTop: true,
  maxToasts: 20,
  transition: 'Vue-Toastification__bounce',
  transitionDuration: 500,
  draggable: true,
  draggablePercent: 0.6,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  closeOnClick: true,
  timeout: 3500,
  container: document.body,
  toastClassName: [],
  bodyClassName: [],
  hideProgressBar: true,
  hideCloseButton: false,
  icon: true,
});
Vue.use(VueAxios, axios);
Vue.use(Loading);
Vue.use(Loading, {
  canCancel: false,
  color: '#B08C7D',
  loader: 'dots',
  width: 50,
  height: 50,
  backgroundColor: '#ffffff',
  isFullPage: true,
  opacity: 0.8,
});
Vue.use(Vue2Editor);
Vue.use(VueClipboard);
Vue.use(VueAwesomeSwiper);
SwiperClass.use([Pagination, Mousewheel, Autoplay]);
Vue.filter('currency', currencyFilter);
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
});
localize('tw', zhTW);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('Loading', Loading);

new Vue({
  created() {
    AOS.init({

    });
  },
  router,
  render: (h) => h(App),
}).$mount('#app');

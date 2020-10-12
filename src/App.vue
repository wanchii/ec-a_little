<template>
  <div id="app">
    <Toast />
    <router-view/>
  </div>
</template>

<script>
import Toast from '@/components/Toasts.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    Toast,
  },
};
</script>

<style lang="scss">
@import './assets/scss/all.scss';
@import './assets/icon.css';

</style>

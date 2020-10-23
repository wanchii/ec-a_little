<template>
  <div id="app">
    <Toasts />
    <router-view/>
  </div>
</template>

<script>
import Toasts from '@/components/Toasts.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    Toasts,
  },
};
</script>

<style lang="scss">
@import './assets/scss/all.scss';
@import './assets/icon.css';

</style>

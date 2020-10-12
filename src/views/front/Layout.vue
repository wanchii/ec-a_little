<template>

<div>
  <div class="content">
    <Navbar />
    <router-view></router-view>
  </div>
    <Footer />
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  data() {
    return {
      products: [],
    };
  },
  components: {
    Navbar,
    Footer,
  },
  created() {

  },
};
</script>

<style>

</style>

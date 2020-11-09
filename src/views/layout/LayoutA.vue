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
    };
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>

</style>

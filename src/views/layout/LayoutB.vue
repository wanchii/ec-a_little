<template>
<div>
  <div class="content">
    <NavbarSimple />
    <router-view></router-view>
  </div>
    <FooterSimple />
</div>
</template>

<script>
import NavbarSimple from '@/components/Navbar-simple.vue';
import FooterSimple from '@/components/Footer-simple.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    NavbarSimple,
    FooterSimple,
  },
};
</script>

<style>

</style>

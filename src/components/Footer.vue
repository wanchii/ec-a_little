<template>
  <section class="footer">
    <div class="container">
      <ul class="d-flex list-unstyled mb-0 flex-md-row flex-column justify-content-md-between">
        <li class="d-flex flex-md-row flex-column">
          <p class="mr-2 mb-md-0 mb-2">
            © Copright 2020 Emily Chen
          </p>
          <p class="mr-2 mb-md-0 mb-2">
            網站素材都取自網路，僅為練習之用
          </p>
        </li>
        <li class="px-3 d-md-block d-none">
          <a href="https://github.com/wanchii/ec-a_little"
            class="text-primary-dark h4 mb-0" target="_blank">
            <span class="icon-envelope"></span>
          </a>
          <router-link class="text-primary-dark h4 mb-0 ml-3"
            to="/login">
            <span class="icon-gears"></span>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style>

</style>

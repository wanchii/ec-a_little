<template>
<!-- 訂閱 -->
<section class="subscribe bg-primary-light py-4">
  <div class="container">
    <div class="row">
      <div class="col-md-5 col-12">
        <p class="h2 font-weight-bold mb-3 mb-md-0 text-md-center">訂閱更多消息</p>
      </div>
      <div class="col-md-7 col-12">
        <div class="input-group">
          <input type="email" class="form-control subscribeInput rounded-0"
            placeholder="Your email address" aria-label="Your email address"
            aria-describedby="button-addon2">
          <div class="input-group-append">
          <button class="subscribeBtn btn btn-primary font-weight-bold" type="button"
            id="button-addon2">訂閱</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>

.subscribe-title {
    font-size: 48px;
    line-height: 64px;
    @media (max-width:767px) {
        font-size: 32px;
        line-height: 1.5;
    }
}
.subscribe-input {
    background-color: transparent;
    border: 1px solid #FFFFFF99;
}
</style>

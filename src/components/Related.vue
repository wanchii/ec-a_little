<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide  v-for="item in swiperList" :key="item.id+'1'">
      <div class="card border-0" @click="changePage(item.id)">
        <div class="text-decoration-none">
          <div class="card-img bg-cover d-flex flex-column
            justify-content-end p-lg-3 p-md-5 p-6 rounded-0"
            :style="{ backgroundImage: `url(${ item.imageUrl[0] })` }">
          </div>
          <div class="card-body text-center p-2">
            <div class="position-relative">
              <span class="badge badge-secondary"
                style="position:absolute; top:0; right:0;">
                {{ item.category }}
              </span>
              <h4 class="card-title mb-1 text-primary-dark font-weight-bold">
                {{ item.title }}
              </h4>
            </div>
            <p class="card-text text-primary">
              NT$ {{ item.price  }} / {{ item.unit }}
            </p>
          </div>
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>

export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 16,
        speed: 1200,
        allowTouchMove: true,
        autoplay: {
          delay: 2700,
          disableOnInteraction: false,
          stopOnLastSlide: true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    };
  },
  props: {
    swiperList: {},
  },
  methods: {
    changePage(id) {
      this.$emit('update', id);
    },
  },
};
</script>

<style lang="scss" scoped>
.related{
  .card-img{
    height: 220px;
  }
}
.swiper-slide{
  width: 22%;
  @media (max-width: 991.98px) {
    width: 40%;
  }
  @media (max-width: 767.98px) {
    width: 60%;
  }
}
.swiper-pagination{
  transform: translateY(14px);
}
</style>

<template>
  <section class="mt-7">
    <div class="container">
      <div class="row mb-6 bg-light">
        <div
          class="col-md-6 bg-cover"
          style="
            background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/ou0IT4Cl1tTWgwxT0NfsCQ1Tv30KdLNP2cA8qqhZykwLlNBkb4ayT4V8HZJfpH3gGJFpiYhyeaVcNIF8Uknd8rVdRmu1gtd6fhXvPY7LJH8QFYMWt3lQMlHWlPAfxMdL.jpg);
            width: 540px;
            height: 360px;
          "
        ></div>
        <div class="col-md-6">
          <div
            class="px-6 d-flex flex-column justify-content-center align-items-center h-100"
          >
            <h3 class="font-weight-bold text-primary-dark">風琴馬鈴薯</h3>
            <small class="text-primary">烤好的馬鈴薯就像風琴一樣綻放</small>
            <div class="mb-3 lh-2">
              <p>
                食材：馬鈴薯
                <br />
                調味料：橄欖油、無鹽奶油、鹽、黑胡椒、新鮮迷迭香
              </p>
              <p>
                先將馬鈴薯外皮刷洗乾淨，兩側擺上筷子協助切出刀痕不斷的馬鈴薯，寬度隨意。
                用工具將每個切面均勻抹上橄欖油，灑點海鹽及黑胡椒。
              </p>
              <p>
                烤盤放上烤盤紙後，擺上馬鈴薯，可在烤盤四周再加點奶油，上方放置新鮮迷迭香
                烤箱事先預熱180℃，再將馬鈴薯入烤箱烤約20-40分鐘
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="position-relative" id="chevron" ref="chevron" v-if="this.shown">
        <span class="scroll">
          <i class="fas fa-chevron-down fa-3x btn-chevron" @click="goDown"></i>
        </span>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        class="row flex-row-reverse mb-5 bg-gray-200">
        <div
          class="col-md-6 bg-cover"
          style="
            background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/nRsWNS0mQxfzkm9BuA4mjXOqtxA6V3W4kVxDyeads3cICSkSVE0u1PlgSraI7edmDfUFK3bKjsGatEt9eUXn44MSG1RILoYItiDRGzjnlJvR8yHH7FY5XMwYdbHwCws7.jpg);
            width: 540px;
            height: 360px;
          "
        >
        </div>
        <div class="col-md-6">
          <div
            class="px-6 d-flex flex-column justify-content-center align-items-center h-100"
          >
            <h3 class="font-weight-bold text-primary-dark">蜂蜜肉桂烤梨</h3>
            <small class="text-primary">肉桂的香氣，搭配蜂蜜的甜</small>
            <div class="mb-3 lh-2">
              <p>
                食材：西洋梨
                <br />
                調味料：肉桂、蜂蜜
              </p>
              <p>
                先將馬鈴薯外皮刷洗乾淨，兩側擺上筷子協助切出刀痕不斷的馬鈴薯，寬度隨意。
                用工具將每個切面均勻抹上橄欖油，灑點海鹽及黑胡椒。
              </p>
              <p>
                烤盤放上烤盤紙後，擺上馬鈴薯，可在烤盤四周再加點奶油，上方放置新鮮迷迭香
                烤箱事先預熱180℃，再將馬鈴薯入烤箱烤約20-40分鐘
              </p>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="500" class="row mb-5 bg-light">
        <div
          class="col-md-6 bg-cover"
          style="
            background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/qydSmgPhIVJeAwj8piVRMWKFatIE6MnOrNUFxIO3Ww3x2RwunyhxpVj7wrd2vXyuVV1RpfCZIddGSMOHD6KcP4IYGFWDP19I77cdcUtCsbF0hotKAE40X8OkwozjLRz6.jpg);
            width: 540px;
            height: 360px;
          "
        ></div>
        <div class="col-md-6">
          <div
            class="px-6 d-flex flex-column justify-content-center align-items-center h-100"
          >
            <h3 class="font-weight-bold text-primary-dark">佛卡夏</h3>
            <small class="text-primary">麵包與橄欖油搭配，絕妙</small>
            <div class="mb-3 lh-2">
              <p>
                食材：西洋梨
                <br />
                調味料：肉桂、蜂蜜
              </p>
              <p>
                先將馬鈴薯外皮刷洗乾淨，兩側擺上筷子協助切出刀痕不斷的馬鈴薯，寬度隨意。
                用工具將每個切面均勻抹上橄欖油，灑點海鹽及黑胡椒。
              </p>
              <p>
                烤盤放上烤盤紙後，擺上馬鈴薯，可在烤盤四周再加點奶油，上方放置新鮮迷迭香
                烤箱事先預熱180℃，再將馬鈴薯入烤箱烤約20-40分鐘
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        class="row flex-row-reverse mb-5 bg-gray-200"
      >
        <div
          class="col-md-6 bg-cover"
          style="
            background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/eLUsgBpGZ2LMaF2uojC7wrfpACE87LInW2sW64wqgBYHSgxAIOsRLlqc3DHCJGrCXt7LSgfaHZHJEIQOCl67AaxrbckPhmY02fQwx0UDu65Gdl0WxGfqsB5HSzU5Ecgl.jpg);
            width: 540px;
            height: 360px;
          "
        ></div>
        <div class="col-md-6">
          <div
            class="px-6 d-flex flex-column justify-content-center align-items-center h-100"
          >
            <h3 class="font-weight-bold text-primary-dark">香料紅酒</h3>
            <small class="text-primary mb-2">溫暖的紅酒，從胃開始暖呼呼</small>
            <div class="mb-3 lh-2">
              <p>
                食材：柳丁、檸檬、便宜紅酒
                <br />
                調味料：丁香、八角、肉桂棒、砂糖、黑胡椒粒
              </p>
              <p>
                將紅酒、糖、肉桂棒、丁香、八角、黑胡椒粒、切片檸檬、切片柳丁一起煮
                將近沸騰的起泡狀態熄火，倒入柳丁汁與檸檬汁，過濾後就可以飲用。
                鍋中的肉桂棒也可以取出浸泡在煮好的熱紅酒中增加肉桂風味
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      top: 0,
      shown: true,
    };
  },
  created() {
    $('html, body').animate({ scrollTop: 0 }, 0);
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    goDown() {
      $('html,body').animate({ scrollTop: 340 }, 500);
    },
    handleScroll() {
      const { scrollTop } = document.documentElement;
      this.top = scrollTop;
      this.seeChevron();
    },
    seeChevron() {
      if (this.top > 99) {
        this.shown = false;
      } else {
        this.shown = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.recipe-img {
  width: 540px;
  height: 360px;
  border-radius: 0px;
}

.scroll{
  position: absolute;
  top: -32px;
  left: 48%;
  margin-bottom: 3rem;
  .btn-chevron {
    display: block;
    -webkit-animation: pulse 2s infinite;
    animation: pulse 2s infinite;
    color: #8d6e63;
    cursor: pointer;
  }
  @keyframes pulse {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, 10px);
    }
  100% {
      transform: translate(0, 0);
    }
  }
}
</style>

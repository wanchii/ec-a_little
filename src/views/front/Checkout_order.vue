<template>
<div>
  <loading :active.sync="isLoading" loader='dots'></loading>
  <div class="container">
    <div class="row">
      <div class="col-lg-5 col-md-12 col-12 order-1 order-md-2 mb-4 mb-md-0">
        <!-- mobile -->
        <div class="accordion d-md-none d-block" id="accordionExample">
          <div class="bg-base card border-0 rounded-0">
            <div class="card-header" id="headingOne">
              <button class="btn w-100 d-flex align-items-center"
                type="button" data-toggle="collapse" data-target="#collapseOne"
                aria-expanded="true" aria-controls="collapseOne" id="orderCollapse">
                <span class="mr-auto">訂單明細</span>
                <span class="text-primary-dark font-weight-bold h5 mb-0 mr-2">
                  NT{{ countTotal | currency }}
                </span>
                <i class="fas fa-chevron-down"></i>
              </button>
            </div>
            <div id="collapseOne" class="collapse" aria-labelledby="headingOne"
              data-parent="#accordionExample">
              <div class="card-body">
                <table class="table order-table">
                  <thead>
                    <tr v-for="item in carts" :key="item.product.id + 2">
                      <td>
                        <img :src="item.product.imageUrl[0]"
                          :alt="item.product.title" class="table-img">
                      </td>
                      <td class="font-weight-bold text-vcraftsman-dark">
                        {{ item.product.title }} {{ item.quantity }}
                      </td>
                      <td class="text-right">
                        {{ item.product.price * item.quantity  | currency }}
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="2">小計</td>
                      <td class="text-right">NT{{ cartTotal | currency }}</td>
                    </tr>
                    <tr>
                      <td colspan="2">
                        <div class="input-group input-group-sm">
                          <input type="text"
                            placeholder="請輸入優惠碼"
                            class="form-control rounded-0"
                            v-model="coupon_code">
                          <div class="input-group-append">
                            <button type="button"
                              class="btn btn-outline-secondary rounded-0"
                              :class="{disabled:coupon_code ===''}"
                              @click.prevent="addCouponCode">
                              套用優惠碼
                              <i v-if="isProcessing"
                                class="fas fa-circle-notch fa-spin"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td class="text-right text-danger"
                        v-if="coupon.enabled">
                        {{ discount | currency }}
                      </td>
                      <td class="text-right text-danger" v-else>
                        0
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="2" class="font-weight-bold">總共</td>
                      <td class="text-right font-weight-bold">NT{{ countTotal | currency }}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
        <!-- pc -->
        <div class="bg-base py-6 px-3 d-md-block d-none">
          <h3 class="px-5">訂單明細</h3>
          <div class="order p-5">
            <table class="table order-table">
              <thead>
                <tr v-for="item in carts" :key="item.product.id + 1">
                  <td>
                    <img :src="item.product.imageUrl[0]"
                      :alt="item.product.title" class="table-img">
                  </td>
                  <td class="font-weight-bold text-vcraftsman-dark">
                    {{ item.product.title }} {{ item.quantity }}
                  </td>
                  <td class="text-right">
                    {{ item.product.price * item.quantity  | currency }}
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="2">小計</td>
                  <td class="text-right">NT{{ cartTotal | currency }}</td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div class="input-group input-group-sm">
                      <input type="text"
                        placeholder="請輸入優惠碼" class="form-control rounded-0"
                        v-model="coupon_code">
                      <div class="input-group-append">
                        <button type="button"
                          class="btn btn-outline-secondary rounded-0"
                          :class="{disabled:coupon_code ===''}"
                          @click.prevent="addCouponCode">
                          套用優惠碼
                          <i v-if="isProcessing"
                          class="fas fa-circle-notch fa-spin"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td class="text-right text-danger"
                    v-if="coupon.enabled">
                    {{ discount | currency }}
                  </td>
                  <td class="text-right text-danger" v-else>
                    0
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2" class="font-weight-bold">總共</td>
                  <td class="text-right font-weight-bold">NT{{ countTotal | currency }}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
      <div class="col-lg-7 col-md-12 col-12 mb-md-3 order-2 order-md-1">
        <div class="sticky-top">
          <div class="check border mt-1 p-3">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb  mb-4">
                  <li class="breadcrumb-item">
                    <router-link class="text-primary"
                      to="/cart">
                      購物車
                    </router-link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">訂購資訊</li>
                  <li class="breadcrumb-item next">付款</li>
                </ol>
              </nav>
              <h4>訂購資訊</h4>
              <!-- validation-observer 驗證整體表單 -->
              <validation-observer v-slot="{ invalid }">
                <form @submit.prevent="createOrder">
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <validation-provider rules="required" tag="div"
                        v-slot="{ errors, classes }">
                        <label for="inputName">姓名</label>
                        <input type="text" class="form-control" id="inputName" :class="classes"
                        name="姓名" placeholder="路晉" v-model="order_detail.name" >
                        <!-- 錯誤訊息 -->
                        <span class="invalid-feedback">{{ errors[0] }}</span>
                      </validation-provider>
                    </div>
                    <div class="form-group col-md-6">
                      <validation-provider rules="required|min:8|numeric" tag="div"
                        v-slot="{ errors, classes }">
                        <label for="inputTel">電話</label>
                        <input type="tel" class="form-control"
                          id="inputTel" v-model="order_detail.tel"
                          name="電話" :class="classes">
                        <!-- 錯誤訊息 -->
                        <span class="invalid-feedback">{{ errors[0] }}</span>
                      </validation-provider>
                    </div>
                  </div>
                  <div class="form-group">
                    <validation-provider rules="required|email" tag="div"
                      v-slot="{ errors, classes }">
                      <label for="inputEmail">電子郵件</label>
                      <input type="text" class="form-control"
                      id="inputEmail" placeholder="123@123.com"
                        name="電子郵件" v-model="order_detail.email" :class="classes">
                      <!-- 錯誤訊息 -->
                      <span class="invalid-feedback">{{ errors[0] }}</span>
                    </validation-provider>
                  </div>
                  <div class="form-group">
                    <validation-provider rules="required"  tag="div"
                        v-slot="{ errors, classes }">
                      <label for="inputAddress">地址</label>
                      <input type="text" class="form-control" id="inputAddress" placeholder="地址"
                      name="地址" :class="classes" v-model="order_detail.address">
                      <!-- 錯誤訊息 -->
                      <span class="invalid-feedback">{{ errors[0] }}</span>
                    </validation-provider>
                  </div>
                  <!-- 付款方式 -->
                  <div class="form-group">
                    <validation-provider rules="required" tag="div"
                      v-slot="{ errors, classes}">
                      <label for="paymentSelect" class="font-weight-bold">購買方式</label>
                      <select class="form-control" id="paymentSelect"
                        v-model="order_detail.payment" :class="classes" name="付款方式">
                        <option value selected disabled hidden >請選擇付款方式</option>
                        <option value="WebATM">WebATM</option>
                        <option value="ATM">ATM</option>
                        <option value="Barcode">Barcode</option>
                        <option value="Credit">Credit</option>
                        <option value="ApplePay">ApplePay</option>
                        <option value="GooglePay">GooglePay</option>
                      </select>
                      <span class="invalid-feedback">{{ errors[0] }}</span>
                    </validation-provider>
                  </div>
                  <!-- 留言 -->
                  <div class="form-group">
                    <label for="formMessage" class="font-weight-bold">留言</label>
                    <textarea class="form-control" id="formMessage" rows="3"
                      v-model="order_detail.message"></textarea>
                  </div>
                  <div class="d-flex justify-content-end">
                    <button type="submit" class="btn btn-primary p-3 w-50" :disabled="invalid">
                      送出表單
                    </button>
                  </div>
                </form>
              </validation-observer>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  data() {
    return {
      carts: [],
      cartTotal: 0,
      coupon_code: '',
      coupon: {},
      discount: 0,
      order_detail: {
        email: '',
        name: '',
        tel: '',
        address: '',
        coupon: '',
        payment: '',
        message: '',
      },
      isLoading: false,
      isProcessing: false,
    };
  },
  created() {
    this.getCart();
  },
  computed: {
    countTotal() {
      return Math.ceil(this.cartTotal - this.discount);
    },
  },
  methods: {
    getCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http.get(url)
        .then((res) => {
          this.carts = res.data.data;
          this.cartTotal = 0;
          this.carts.forEach((item) => {
            this.cartTotal += item.product.price * item.quantity;
          });
          this.isLoading = false;
        }).catch(() => {
          this.$toast.error('無法取得資料，請重新整理');
          this.isLoading = false;
        });
    },
    addCouponCode() {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/coupon/search`;
      this.isProcessing = true;
      this.discount = 0;
      this.$http
        .post(url, { code: this.coupon_code })
        .then((res) => {
          this.getCart();
          this.coupon = res.data.data;
          const sum = Math.ceil(this.cartTotal * (this.coupon.percent / 100));
          this.discount = this.cartTotal - sum;
          this.$bus.$emit('sendCoupon', this.coupon_code);
          this.isProcessing = false;
        }).catch(() => {
          this.$toast.error('請確認優惠折扣碼');
          this.isProcessing = false;
        });
    },
    createOrder() {
      this.isLoading = false;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders`;
      this.$http.post(url, this.order_detail)
        .then((response) => {
          if (response.data.data.id) {
            this.$router.push(`/checkout_payment/${response.data.data.id}`);
          }
          this.isLoading = false;
        }).catch(() => {
          this.$toast.error('訂單失敗，請稍後再試');
          this.isLoading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>

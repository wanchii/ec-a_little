<template>
<section class="cart mb-md-7 mb-5">
  <loading :active.sync="isLoading" loader='dots'></loading>
  <div class="jumbotron jumbotron-fluid mb-0"
    style="background-image:url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/cuMqN0rNaddon87q2kBCi9uIpCYohCZEE93FVHb2yYn5gxRM4M5BJ49GY4XigfYBbIGW3QhjrhrTIrgvUWFhozfBO4D4mtXcWxxtlCQAhyEn1Jwo3fxFj883hWnkxZbu.jpg);
    background-position: 0% 10%; background-size: cover;height: 300px;">
  </div>
  <div class="container">
    <div class="row justify-content-center mt-3"
      v-if="carts.length > 0">
      <div class="col-md-10">
        <h2 class="text-secondary mb-3">購物車內容</h2>
        <div class="d-flex align-items-end bg-light p-2 mb-2">
          <h5 class="font-weight-bold text-primary">目前有 {{ cartSubTotal }} 筆</h5>
          <a href="#" class="btn btn-outline-danger rounded-0 ml-auto" type="button"
            @click.prevent="removeAllCart">
            清空購物車
          </a>
        </div>
        <div class="table-responsive">
          <table class="table cart-table">
            <thead>
              <tr>
                <th></th>
                <th>商品</th>
                <th></th>
                <th>數量</th>
                <th>單價</th>
                <th>小計</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in carts" :key="item.product.id">
                <td class="align-middle text-center">
                  <button type="button" class="btn text-danger btn-sm"
                    @click="removeCartItem(item.product.id ,item.product.title)">
                    <i class="fas fa-times"></i>
                  </button>
                </td>
                <td class="align-middle">
                  <img
                    :src="item.product.imageUrl[0]"
                    :alt="item.product.title"
                    class="img-detail">
                </td>
                <td class="align-middle">{{ item.product.title }}</td>
                <td class="align-middle">
                  <div class="btn-group cart-btn-group" role="group" aria-label="...">
                    <button type="button" class="btn btn-outline-primary btn-sm"
                      @click="quantityUpdata(item.product.id, item.quantity - 1)"
                      :disabled="item.quantity === 1">
                      <i class="fas fa-minus"></i>
                    </button>
                    <input type="number" size="1" value="1" min="1" max="15"
                      class="text-center border-0 p-2"
                      v-model="item.quantity" disabled>

                    <button type="button" class="btn btn-outline-primary btn-sm"
                      :disabled="item.quantity === 15"
                      @click="quantityUpdata(item.product.id, item.quantity + 1)">
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                </td>
                <td class="text-right align-middle">
                  {{ item.product.price | currency }}/{{ item.product.unit }}
                </td>
                <td class="text-right align-middle">
                  {{ item.product.price * item.quantity | currency }}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="5" class="text-right">小計</td>
                <td class="text-right">{{ cartTotal | currency }}</td>
              </tr>
              <tr v-if=" cartTotal < 490" >
                <td colspan="6" class="text-right text-danger">未滿490無法出貨</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="d-flex justify-content-between">
          <router-link
            class="btn text-primary-dark font-weight-bold rounded-0"
            to="/products">
            <i class="fas fa-angle-left"></i>
            繼續購物
          </router-link>
          <router-link
          class="btn btn-primary font-weight-bold rounded-0 px-6 py-2"
            to="/checkout_order"
            :class="{disabled:cartTotal < 490}">
            結帳
          </router-link>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="row justify-content-center align-items-center my-3">
        <div class="col-lg-6 col-12">
          <router-link
            to="/products"
            class="text-primary-dark d-flex align-items-center justify-content-center empty">
            <h4 class="font-weight-bold mb-0 mr-2">購物車沒有商品，趕快來去選購</h4>
            <img src="../../assets/images/runner.png" alt="" class="run">
          </router-link>
        </div>
      </div>
    </div>
  </div>
</section>

</template>

<script>

export default {
  data() {
    return {
      carts: [],
      cartTotal: 0,
      cartSubTotal: 0,
      isLoading: false,
      isProcessing: false,
    };
  },
  created() {
    this.getCart();
  },
  methods: {
    getCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http.get(url).then((res) => {
        this.carts = res.data.data;
        this.cartSubTotal = res.data.data.length;
        this.$bus.$emit('update-total');
        this.cartTotal = 0;
        this.carts.forEach((item) => {
          this.cartTotal += item.product.price * item.quantity;
        });
        this.isLoading = false;
      });
    },
    removeAllCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/all/product`;
      this.$http.delete(url)
        .then(() => {
          this.$toast.warning('購物車已清空', {
            icon: 'fas fa-rocket',
          });
          this.getCart();
          this.isLoading = false;
        });
    },
    removeCartItem(id, name) {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/${id}`;
      this.$http.delete(url).then(() => {
        this.$toast.warning(`${name}已刪除`, {
          icon: 'far fa-trash-alt',
        });
        this.getCart();
      });
    },
    quantityUpdata(id, num) {
      if (num <= 0) return;
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      const data = {
        product: id,
        quantity: num,
      };
      this.$http.patch(url, data).then(() => {
        this.getCart();
        this.isLoading = false;
      });
    },
  },

};
</script>
<style lang="scss" scoped>
.cart-btn-group{
  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
}
</style>

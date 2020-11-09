<template>
  <div class="login">
    <Loading :active.sync="isLoading" />
    <div class="container">
      <div class="d-flex justify-content-center align-items-center py-6">
        <div class="loginForm p-4">
          <h2 class="font-weight-bold text-center mb-3"> 後台管理</h2>
          <form @submit.prevent="signin">
            <div class="form-group">
              <label for="inputEmail1" class="sr-only">Email address</label>
              <input type="email" class="form-control" id="inputEmail1"
                aria-describedby="emailHelp" placeholder="Enter email"
                v-model='user.email' required  autocomplete="username">
            </div>
            <div class="form-group">
              <label for="inputPassword1" class="sr-only">Password</label>
              <input type="password" class="form-control" id="inputPassword1"
                placeholder="Password" v-model="user.password" required
                autocomplete="current-password">
            </div>
            <button type="submit" class="btn btn-primary w-100">登入</button>
          </form>
          <router-link class="btn btn-outline-primary w-100 mt-3"
            to="/">
            <i class="fas fa-long-arrow-alt-left"></i>
              前台
          </router-link>
          <div class="d-flex align-items-center py-3">
            <router-link class="passeroOne text-primary font-weight-bold"
              to="/">
              a little
            </router-link>
            <p class="mb-0 ml-2 text-muted">
              &copy; 2020~∞ - Emily Chen
            </p>
          </div>
        </div>
        /div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      isLoading: false,
    };
  },
  methods: {
    signin() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}auth/login`;
      this.$http.post(url, this.user)
        .then((response) => {
          const { token } = response.data;
          const { expired } = response.data;
          document.cookie = `token=${token}; expires=${new Date(expired * 1000)}; path=/`;
          this.$bus.$emit('message:push',
            '登入成功',
            'success');
          this.isLoading = false;
          this.$router.push('/admin/products');
        }).catch((error) => {
          this.$bus.$emit('message:push',
            `登入失敗，請重新輸入
            ${error}`,
            'danger');
          this.isLoading = false;
        });
    },
  },
};
</script>

<style>

</style>

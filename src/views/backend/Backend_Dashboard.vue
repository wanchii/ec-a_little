<template>
<div>
  <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3 passeroOne" href="#">a little</a>
    <button
      class="navbar-toggler position-absolute d-md-none collapsed"
      type="button" data-toggle="collapse"
      data-target="#sidebarMenu"
      aria-controls="sidebarMenu"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <ul class="navbar-nav px-3">
      <li class="nav-item text-nowrap">
        <a class="nav-link" href="#" @click.prevent="signOut">登出</a>
      </li>
    </ul>
  </nav>
  <div class="container-fluid">
    <div class="row">
      <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div class="sidebar-sticky pt-3">
          <ul class="nav flex-column">
            <li class="nav-item">
              <router-link
              to="/admin/products"
              class="nav-link">
              <span data-feather="shopping-cart"></span>
              產品頁面
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
              to="/admin/orders"
              class="nav-link">
              <span data-feather="file"></span>
              訂單列表
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
              to="/admin/coupons"
              class="nav-link">
              <span data-feather="dollar-sign"></span>
              優惠券
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
              to="/admin/storages"
              class="nav-link">
              <span data-feather="folder-plus"></span>
              圖片儲存
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <router-view  v-if="checkSuccess" />
      </main>
    </div>
  </div>
</div>
</template>

<script>
import feather from 'feather-icons';

export default {
  data() {
    return {
      token: '',
      checkSuccess: false,
    };
  },
  created() {
    this.checkLogin();
  },
  mounted() {
    feather.replace();
  },
  methods: {
    checkLogin() {
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;
      const url = `${process.env.VUE_APP_APIPATH}auth/check`;
      this.$http.post(url, { api_token: this.token })
        .then(() => {
          this.checkSuccess = true;
        }).catch((err) => {
          this.$bus.$emit(
            'message:push',
            `出現錯誤 ${err.response.data.message}`,
            'danger',
          );
          this.$router.push('/login');
        });
    },
    signOut() {
      document.cookie = 'hexToken=; expires=; path=/';
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  font-size: .875rem;
}
.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}
@media (max-width: 767.98px) {
  .sidebar {
    top: 5rem;
  }
}
.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: .5rem;
  overflow-x: hidden;
  overflow-y: auto;
}
@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
  }
}
.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}
.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}
.sidebar .nav-link.active {
  color: #007bff;
}
.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}
.sidebar-heading {
  font-size: .75rem;
  text-transform: uppercase;
}

/*
 * Navbar
 */

.navbar-brand {
  padding-top: .25rem;
  padding-bottom: .25rem;
  font-size: 1.75rem;
  background-color: rgba(0, 0, 0, .25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
}
.navbar .navbar-toggler {
  top: .25rem;
  right: 1rem;
}
.navbar .form-control {
  padding: .75rem 1rem;
  border-width: 0;
  border-radius: 0;
}
.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, .1);
  border-color: rgba(255, 255, 255, .1);
}
.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
}

</style>

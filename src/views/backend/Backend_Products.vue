<template>
  <div class="products">
    <Loading :active.sync="isLoading" />
    <h2 class="py-3 text-center">產品頁面</h2>
    <div class="d-flex justify-content-end">
      <button type="button" class="btn btn-primary mb-3"
        @click="openModal('new')">
        建立新產品
      </button>
    </div>
    <!-- 表格 -->
    <table class="table product">
      <thead class="font-weight-bold">
        <tr>
          <th scope="col">分類</th>
          <th scope="col">產品名稱</th>
          <th scope="col">原價</th>
          <th scope="col">售價</th>
          <th scope="col">是否啟用</th>
          <th scope="col">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-right">{{ item.origin_price | currency }}</td>
          <td class="text-right">{{ item.price | currency }}</td>
          <td>
            <span class="text-success" v-if="item.enabled">啟用</span>
            <span class="text-secondary" v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group btn-group-sm" role="group" aria-label="Basic">
              <button type="button" class="btn btn-outline-primary"
                @click="openModal('edit',item)">編輯</button>
              <button type="button" class="btn btn-outline-danger"
                @click="openModal('delete',item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 頁碼 -->
    <div class="d-flex justify-content-center my-4">
      <pagination :pages="pagination" @update="getProducts"></pagination>
    </div>
    <!-- 新增/編輯modal -->
    <div class="modal fade" id="productModal"
      tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header bg-secondary text-white">
            <h5 class="modal-title">新增/編輯 產品</h5>
            <button type="button"
              class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-4">
                <div class="form-group">
                  <label for="inputImgUrl">輸入圖片網址*</label>
                  <input type="text" class="form-control"
                    id="inputImgUrl" placeholder="請輸入圖片網址"
                    v-model="tempData.imageUrl[0]">
                </div>
                <div class="form-group">
                  <label for="customFile">
                    或 上傳圖片
                    <i class="fas fa-cog fa-spin"
                      v-if="status.fileUploading"></i>
                  </label>
                  <input type="file"
                    id="customFile"
                    ref="file"
                    class="form-control customFileInput"
                    @change="uploadFile">
                </div>
                <img :src="tempData.imageUrl[0]" :alt="tempData.title"
                  class="img-fluid">
              </div>
              <div class="col-8">
                <div class="form-group">
                  <label for="inputTitle">標題*</label>
                  <input type="text" class="form-control"
                    id="inputTitle" placeholder="請輸入標題"
                    v-model="tempData.title">
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputCategory">分類*</label>
                    <input type="text" class="form-control"
                      id='inputCategory'
                      placeholder="請輸入分類"
                      v-model="tempData.category">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputUnit">單位</label>
                    <input type="text" class="form-control"
                      id="inputUnit" placeholder="請輸入單位"
                      v-model="tempData.unit">
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputOriginalPrice">原價</label>
                    <input type="number" class="form-control"
                      placeholder="請輸入原價"
                      id="inputOriginalPrice" v-model="tempData.origin_price">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputPrice">售價</label>
                    <input type="number" class="form-control"
                      placeholder="請輸入售價"
                      id="inputPrice" v-model="tempData.price">
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputOriginPlace">產地</label>
                    <input type="text" class="form-control"
                      placeholder="請輸入原產地"
                      id="inputOriginPlace"
                      v-model="tempData.options.origin_place">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="choosePackage">包裝方式</label>
                    <select id="choosePackage" class="form-control"
                      v-model="tempData.options.packing">
                      <option value="袋裝">袋裝</option>
                      <option value="散裝">散裝</option>
                    </select>
                  </div>
                </div>
                <hr>
                <div class="form-group">
                  <label for="inputContent">產品說明*</label>
                  <VueEditor id="inputContent"
                    v-model="tempData.content"/>
                </div>
                <div class="form-group">
                  <label for="inputDescription">產品描述*</label>
                  <textarea class="form-control" id="inputDescription"
                    rows="3" v-model="tempData.description"></textarea>
                </div>
                <div class="form-group">
                  <label for="inputRecipe">料理方式</label>
                  <VueEditor id="inputRecipe"
                    v-model="tempData.options.recipe"/>
                </div>
                <div class="form-group">
                  <p class="mb-0">適配</p>
                  <div  v-for="(item, key) in matchFood" :key="key+1"
                    class="px-2  form-check form-check-inline">
                    <input type="checkbox"  class="form-check-input"
                      v-model="tempData.options.match" :value="item">
                    <label class="form-check-label">{{ item }}</label>
                  </div>
                </div>
                <div class="form-group form-check">
                  <input type="checkbox" class="form-check-input"
                    id="checkEnabled"
                    v-model="tempData.enabled">
                  <label class="form-check-label" for="checkEnabled">
                    是否啟用
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary"
              data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary"
              @click="updateItem">確認</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 刪除 Modal -->
    <div class="modal fade" id="deleteModal"
      tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-danger">
            <h5 class="modal-title" id="exampleModalLabel">刪除產品</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除 {{ tempData.title }} 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary"
              data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger"
              @click="deleteItem">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */
import Pagination from '@/components/Pagination.vue';
import { VueEditor } from 'vue2-editor';

export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempData: {
        imageUrl: [],
        options: {
          match: [],
        },
      },
      isLoading: false,
      status: {
        fileUploading: false,
      },
      matchFood: ['蔬菜', '肉類', '海鮮', '水果', '甜點', '飲料', '湯品', '米飯', '麵食', '點綴'],
    };
  },
  props: ['token'],
  components: {
    Pagination,
    VueEditor,
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/products?page=${page}`;
      this.$http.get(url)
        .then((response) => {
          this.isLoading = false;
          this.products = response.data.data;
          this.pagination = response.data.meta.pagination;
          if (this.tempData.id) {
            this.tempData = {
              imageUrl: [],
              options: {
                match: [],
              },
            };
            $('#productModal').modal('hide');
          }
        }).catch(() => {
          this.$bus.$emit(
            'message:push',
            '無法取得資料，請重新整理',
            'danger',
          );
          this.isLoading = false;
        });
    },
    getDetails(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${id}`;
      this.$http.get(url)
        .then((res) => {
          this.tempData = res.data.data;
          this.isLoading = false;
          $('#productModal').modal('show');
        }).catch(() => {
          this.$bus.$emit('message:push',
            '出現錯誤，請稍後再試',
            'danger');
          this.isLoading = false;
        });
    },
    openModal(action, item) {
      switch (action) {
        case 'new':
          this.tempData = {
            imageUrl: [],
            options: {
              match: [],
            },
          };
          $('#productModal').modal('show');
          break;
        case 'edit': // 編輯
          this.getDetails(item.id);
          break;
        case 'delete':// 刪除
          this.tempData = { ...item };
          $('#deleteModal').modal('show');
          break;
        default:
          break;
      }
    },
    updateItem() {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${this.tempData.id}`;
      const addurl = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product`;
      if (this.tempData.id) {
        this.$http.patch(url, this.tempData)
          .then(() => {
            this.getProducts();
            this.$bus.$emit('message:push',
              '完成編輯-商品資料',
              'success');
          }).catch(() => {
            this.$bus.$emit('message:push',
              '出現錯誤，請確認',
              'danger');
          });
      } else {
        this.$http.post(addurl, this.tempData)
          .then(() => {
            this.getProducts();
            $('#productModal').modal('hide');
            this.$bus.$emit('message:push',
              '新增一筆商品資料 ',
              'success');
          }).catch((error) => {
            this.isLoading = false;
            const errorData = error.response.data;
            $('#productModal').modal('hide');
            this.$bus.$emit('message:push',
              `出現錯誤，請確認
              ${errorData}`,
              'danger');
          });
      }
    },
    deleteItem() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${this.tempData.id}`;
      this.$http.delete(url).then(() => {
        this.getProducts();
        this.isLoading = false;
        $('#deleteModal').modal('hide');
      }).catch(() => {
        this.isLoading = false;
      });
    },
    uploadFile() {
      const uploadedFile = this.$refs.file.files[0];
      const formData = new FormData();
      formData.append('file', uploadedFile);
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/storage`;
      this.status.fileUploading = true;
      this.$http.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((response) => {
        this.status.fileUploading = false;
        if (response.status === 200) {
          this.tempData.imageUrl.push(response.data.data.path);
        }
      }).catch(() => {
        this.$bus.$emit('message:push',
          '檔案上傳失敗，請確認檔案大小是否超過 2MB',
          'danger');
        this.status.fileUploading = false;
      });
    },
  },

};
</script>

<style lang="scss" scoped>
.products{
  thead{
    th:nth-child(2){
      width: 30%;
    }
    th:nth-child(5){
      width: 12%;
    }
    th:nth-child(6){
      width: 12%;
    }
  }
}
.customFileInput{
  height: calc(1.5em + 1.25rem + 2px);
}

</style>

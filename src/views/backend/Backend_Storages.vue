<template>
  <div class="coupons">
    <Loading :active.sync="isLoading" />
    <h2 class="py-3 text-center">圖片列表</h2>
    <div class="d-flex justify-content-end">
      <div type="button" class="btn btn-primary mb-3" @click="openModal('new')">新增圖片</div>
    </div>
    <!-- 表格 -->
    <table class="table product">
      <thead class="font-weight-bold">
        <tr>
          <th scope="col">#</th>
          <th scope="col">縮圖</th>
          <th scope="col">路徑</th>
          <th scope="col">功能</th>
        </tr>
      </thead>
      <tbody v-if="storages.length">
        <tr v-for="(item, key) in storages" :key="key">
          <td class="align-middle">{{ key+1 }}</td>
          <td>
            <img
              :src="item.path"
              width="200px"
              class="img-fluid">
          </td>
          <td class="align-middle">
            <div class="input-group">
              <input type="text" class="form-control"
                aria-describedby="button-addon2"
                v-model="item.path">
              <div class="input-group-append">
                <button class="btn btn-outline-primary" type="button"
                  id="button-addon2"
                  @click="doCopy(item.path)">
                  取得網址
                </button>
              </div>
            </div>
          </td>
          <td class="align-middle">
            <button type="button" class="btn btn-outline-danger"
              @click="openModal('delete',item)">
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 頁碼 -->
    <div class="d-flex justify-content-center my-4">
      <pagination :pages="pagination" @update="getStorages"></pagination>
    </div>
    <!-- 新增modal -->
    <div class="modal fade" id="pictureModal"
      tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-primary-light text-white">
            <h5 class="modal-title">新增圖片</h5>
            <button type="button"
              class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="customFile">
                上傳圖片
                <i class="fas fa-cog fa-spin"
                  v-if="status.fileUploading"></i>
              </label>
              <input type="file"
                id="customFile"
                ref="file"
                class="form-control customFileInput"
                @change="uploadFile">
            </div>
            <img :src="tempStorage.imageUrl[0]"
              class="img-fluid">
          </div>
        </div>
      </div>
    </div>
    <!-- 刪除 Modal -->
    <div class="modal fade" id="delModal"
      tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-danger">
            <h5 class="modal-title" id="exampleModalLabel">刪除圖片</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除  (刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary"
              data-dismiss="modal">
              取消
            </button>
            <button type="button" class="btn btn-danger"
              @click="deleteData">
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */
import Pagination from '@/components/Pagination.vue';

export default {
  data() {
    return {
      storages: {},
      tempStorage: {
        imageUrl: [],
      },
      pagination: {},
      isLoading: false,
      status: {
        fileUploading: false,
      },
    };
  },
  components: {
    Pagination,
  },
  created() {
    this.getStorages();
  },
  methods: {
    getStorages(pages = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/storage?page=${pages}`;
      this.$http.get(url).then((response) => {
        this.storages = response.data.data;
        this.pagination = response.data.meta.pagination;
        this.isLoading = false;
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
          this.tempStorage = {
            imageUrl: [],
          };
          $('#pictureModal').modal('show');
          break;
        case 'delete':
          this.tempStorage = { ...item };
          $('#delModal').modal('show');
          break;
        default:
          break;
      }
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
          this.tempStorage.imageUrl.push(response.data.data.path);
        }
        this.getStorages();
      }).catch(() => {
        this.$bus.$emit('message:push',
          '檔案上傳失敗，請確認檔案大小是否超過 2MB',
          'danger');
        this.status.fileUploading = false;
      });
      this.getStorages();
    },
    deleteData() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/storage/${this.tempStorage.id}`;
      this.$http.delete(url).then(() => {
        $('#deleteModal').modal('hide');
        this.$bus.$emit('message:push',
          '刪除成功',
          'success');
        this.isLoading = false;
        $('#delModal').modal('hide');
        this.getStorages();
      }).catch(() => {
        this.$bus.$emit('message:push',
          '檔案刪除失敗',
          'danger');
        this.isLoading = false;
      });
    },
    doCopy(path) {
      this.$copyText(path).then(() => {
        this.$bus.$emit(
          'message:push',
          '已複製網址',
          'success',
        );
      }, () => {
        this.$bus.$emit(
          'message:push',
          '出現錯誤，請確認',
          'danger',
        );
      });
    },
  },
};
</script>

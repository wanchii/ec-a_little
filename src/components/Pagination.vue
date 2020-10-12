<template>
    <nav aria-label="Page navigation example" class="p-3 page">
    <ul class="pagination justify-content-between mb-0">
        <li class="page-item mr-2">
            <a class="btn btn-outline-primary font-weight-bold"
            :class="{disabled:pages.current_page===1}"
            href="#" @click.prevent="clickPage(pages.current_page-1)">Prev</a>
            </li>
        <li class="page-item"
        v-for="(item,index) in pages.total_pages"
        :key="index"
        :class="{active:item===pages.current_page}">
            <a class="page-link" href="#" @click.prevent="clickPage(item)">{{ item }}</a>
        </li>
        <li class="page-item ml-2">
            <a class="btn btn-outline-primary font-weight-bold"
            :class="{disabled:pages.current_page===pages.total_pages}"
            href="#" @click.prevent="clickPage(pages.current_page+1)">Next</a>
        </li>
    </ul>
</nav>

</template>

<script>

export default {
  data() {
    return {
    };
  },
  props: { // 由外傳內的資訊
    pages: {},
  },
  methods: {
    clickPage(i) { // 點擊頁碼產生的號碼
      this.$emit('update', i);
    },
  },
};
</script>

<style>

</style>

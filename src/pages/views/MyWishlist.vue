<template>
  <!-- CONTENT -->
  <section class="pt-7 pb-12">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center" style="margin-left:17%">
          <!-- Heading -->
          <h3 class="mb-10" style="font-size: xx-large; font-weight: bold; color: black">
            My Wishlist
          </h3>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-3">
          <!-- Nav -->
          <nav class="mb-10 mb-md-0">
            <div class="list-group list-group-sm list-group-strong list-group-flush-x">
              <RouterLink to="/views/MyOrders"
                ><a
                  class="list-group-item list-group-item-action dropend-toggle"
                  href="account-orders.html"
                >
                  Orders
                </a></RouterLink
              >
              <RouterLink to="/views/MyWishlist"
                ><a
                  class="list-group-item list-group-item-action dropend-toggle"
                  href="account-wishlist.html"
                >
                  Wishlist
                </a></RouterLink
              >
              <RouterLink to="/views/MyWarranty"
                ><a
                  class="list-group-item list-group-item-action dropend-toggle"
                  href="account-wishlist.html"
                >
                  Warranty
                </a></RouterLink
              >
              <RouterLink to="/views/MyInfo"
                ><a
                  class="list-group-item list-group-item-action dropend-toggle"
                  href="account-personal-info.html"
                >
                  Personal Info
                </a></RouterLink
              >
            </div>
          </nav>
        </div>
        <div class="col-12 col-md-9 col-lg-8 offset-lg-1">
          <!-- Products -->
          <div class="row">
            <!-- Item -->
            <div v-for="like in likeList" class="col-6 col-md-4">
              <div class="card mb-7">
                <!-- Image -->
                <div class="card-img">
                  <!-- Action  -->
                  <button
                    class="btn btn-xs btn-circle btn-white-primary card-action card-action-end"
                  >
                    <i class="fe fe-x"></i>
                  </button>
                  <!-- Button -->
                  <button
                    class="btn btn-xs w-100 btn-dark card-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#modalProduct"
                  >
                    <i class="fe fe-eye me-2 mb-1"></i> Quick View
                  </button>
                  <!-- Image -->
                  <img
                    class="card-img-top"
                    :src="like.thumbnailUrl"
                    height="50"
                    width="50"
                  />
                </div>
                <!-- Body -->
                <div class="card-body fw-bold text-center">
                  <a class="text-body" href="product.html">{{ like.productName.substring(0, 15) }}</a>
                  <br />
                  <span class="text-muted">￦ {{ comma(like.price) }} 원</span>
                </div>
              </div>
            </div>
          </div>
          <!-- Pagination -->
          <nav class="d-flex justify-content-center justify-content-md-end">
            <ul class="pagination pagination-sm text-gray-400">
              <li class="page-item">
                <a class="page-link page-link-arrow" href="#">
                  <i class="fa fa-caret-left"></i>
                </a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">4</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">5</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">6</a>
              </li>
              <li class="page-item">
                <a class="page-link page-link-arrow" href="#">
                  <i class="fa fa-caret-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { useApi } from '/@src/composable/useApi'
const api = useApi()
function comma(val) {
  return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
export default {
  data() {
    return {
      likeList: [],
    }
  },
  created() {
    this.getLikeList()
  },
  methods: {
    async getLikeList() {
      let accessToken = localStorage.getItem('access_token')
      await api
        .post(
          '/member/like',
          {
            memberId: 1,
          },
          {
            headers: {
              Authorization: `Bearer ` + accessToken,
            },
          }
        )
        .then((response) => {
          this.likeList = response.data
          console.log(response)
        })
    },
    comma(val) {
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
  },
}
</script>
<style>
</style>
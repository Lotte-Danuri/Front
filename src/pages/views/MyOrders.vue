<template>
  <!-- CONTENT -->
  <section class="pt-7 pb-12">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <!-- Heading -->
          <h3 class="mb-10" style="font-size: xx-large; font-weight: bold; color: black">
            My Orders
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
                  class="list-group-item list-group-item-action dropend-toggle active"
                  href="account-wishlist.html"
                >
                  Wishlist
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
          <!-- Order -->
          <div class="card card-lg mb-5 border">
            <div v-for="order in orderList" class="card-body pb-0">
              <!-- Info -->
              <div class="card card-sm">
                <div class="card-body bg-light">
                  <div class="row">
                    <div class="col-6 col-lg-3">
                      <!-- Heading -->
                      <h6 class="heading-xxxs text-muted">{{}}</h6>

                      <!-- Text -->
                      <p class="mb-lg-0 fs-sm fw-bold">NO.{{ order.id }}</p>
                    </div>
                    <div class="col-6 col-lg-3">
                      <!-- Heading -->
                      <h6 class="heading-xxxs text-muted">Ordered date:</h6>

                      <!-- Text -->
                      <p class="mb-lg-0 fs-sm fw-bold">
                        <time datetime="2019-10-01">
                          {{ order.orderDate.slice(0, 10) }}
                        </time>
                      </p>
                    </div>
                    <div class="col-6 col-lg-3">
                      <!-- Heading -->
                      <h6 class="heading-xxxs text-muted">Status:</h6>

                      <!-- Text -->
                      <p class="mb-0 fs-sm fw-bold">구매완료</p>
                    </div>
                    <div class="col-6 col-lg-3">
                      <!-- Heading -->
                      <h6 class="heading-xxxs text-muted">Total Price:</h6>

                      <!-- Text -->
                      <p class="mb-0 fs-sm fw-bold">
                        {{ comma(order.totalPrice) }}
                      </p>
                    </div>

                    <div>
                      <br />
                      <div v-for="o in order.orderDataDtoList">
                        <div>
                          <div class="row">
                            <div class="col-3 col-lg-2">
                              <img :src="o.thumbnail" />
                            </div>
                            <div
                              class="col-7 col-lg-6"
                              style="
                                font-family: 'Lucida Sans', 'Lucida Sans Regular',
                                  'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana,
                                  sans-serif;
                              "
                            >
                              <div style="margin-top: 7%">
                                <span>[상품명] {{ o.productName.slice(0, 15) }}</span>
                                <br />
                                <span>[가격] {{ comma(o.productPrice) }}원</span>
                                <br />
                                <span
                                  >[보증기간] {{ o.warrantyStartDate }} [2022-10-19 ~
                                  {{ o.warrantyEndDate }}2025-10-19]</span
                                >
                              </div>
                            </div>
                            <div
                              class="col-2 col-lg-4"
                              style="
                                font-family: 'Franklin Gothic Medium', 'Arial Narrow',
                                  Arial, sans-serif;
                              "
                            >
                              <button
                                style="
                                  width: 200px;
                                  height: 50px;
                                  margin-top: 15%;
                                  background-color: black;
                                  color: white;
                                  border-radius: 5px;
                                "
                              >
                                상품상세
                              </button>
                            </div>
                          </div>
                        </div>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <div class="row align-items-center">
                <div class="col-12 col-lg-6">
                  <div class="row gx-5 mb-4 mb-lg-0">
                    <div class="col-3">
                      <!-- Image -->
                      <div
                        class="ratio ratio-1x1 bg-cover"
                        style="background-image: url(assets/img/products/product-5.jpg)"
                      ></div>
                    </div>
                    <div class="col-3">
                      <!-- Image -->
                      <div
                        class="ratio ratio-1x1 bg-cover"
                        style="background-image: url(assets/img/products/product-112.jpg)"
                      ></div>
                    </div>
                    <div class="col-3">
                      <!-- Image -->
                      <div
                        class="ratio ratio-1x1 bg-cover"
                        style="background-image: url(assets/img/products/product-7.jpg)"
                      ></div>
                    </div>
                    <div class="col-3">
                      <!-- Image -->
                      <div class="ratio ratio-1x1 bg-light">
                        <a class="ratio-item ratio-item-text text-reset" href="#!">
                          <div class="fs-xxs fw-bold"></div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6" style="display: none">
                  <div class="row gx-5">
                    <div class="col-6">
                      <!-- Button -->
                      <a class="btn btn-sm w-100 btn-outline-dark" href="/Myorder">
                        Order Details
                      </a>
                    </div>
                    <div class="col-6">
                      <!-- Button -->
                      <a class="btn btn-sm w-100 btn-outline-dark" href="#!">
                        Track order
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <nav class="d-flex justify-content-center justify-content-md-end mt-10">
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

// const orderList = ref<Order[]>([])

export default {
  data() {
    return {
      orderList: [],
    }
  },
  created() {
    this.getOrderList()
  },
  methods: {
    async getOrderList() {
      await api
        .get('/member/products', {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiZXhwIjoxNjY2MjUyNjg1fQ.LGZvTB2NtlvoFkh0xHITluWoJy2z5DHhdn_dNLX2ri7SN_47xYSe4r-yipK-myiH2mRjTVuzPbEGx9KaywJbdw`,
          },
        })
        .then((response) => {
          this.orderList = response.data
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
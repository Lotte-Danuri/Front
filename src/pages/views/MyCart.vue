<template>
  <!-- CONTENT -->
  <section class="pt-7 pb-12">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- Heading -->
          <h3 class="mb-10 text-center">Shopping Cart</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-7">
          <!-- List group -->
          <ul
            v-for="(product, index) in products"
            :key="index"
            class="list-group list-group-lg list-group-flush-x mb-6"
          >
            <li class="list-group-item">
              <div class="row align-items-center">
                <div class="col-3">
                  <!-- Image -->
                  <a href="htts://sbbro.xyz">
                    <img
                      :src="product.productDto.thumbnailUrl"
                      alt="..."
                      class="img-fluid"
                    />
                  </a>
                </div>
                <div class="col">
                  <!-- Title -->
                  <div class="d-flex mb-2 fw-bold">
                    <a class="text-body" href="product.html">{{
                      product.productDto.productName
                    }}</a>
                    <span class="ms-auto">{{ comma(product.productDto.price) }} 원</span>
                  </div>

                  <!-- Text -->
                  <p class="mb-7 fs-sm text-muted">
                    {{ product.productDto.productCode }} <br />
                    보증기간: {{ product.productDto.warranty }} 개월
                  </p>

                  <!--Footer -->
                  <div class="d-flex align-items-center">
                    <!-- Select -->
                    <select class="form-select form-select-xxs w-auto">
                      <option v-for="index in product.quantity" :value="product.quantity">
                        {{ product.quantity }}
                      </option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>

                    <!-- Remove -->
                    <a class="fs-xs text-gray-400 ms-auto" href="#!">
                      <i class="fe fe-x"></i> Remove
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <!-- Footer -->
          <div class="row align-items-end justify-content-between mb-10 mb-md-0">
            <div class="col-12 col-md-7">
              <!-- Coupon -->
              <form class="mb-7 mb-md-0">
                <label class="form-label fs-sm fw-bold" for="cartCouponCode">
                  Coupon code:
                </label>
                <div class="row row gx-5">
                  <div class="col">
                    <!-- Input -->
                    <input
                      id="cartCouponCode"
                      class="form-control form-control-sm"
                      type="text"
                      placeholder="Enter coupon code*"
                    />
                  </div>
                  <div class="col-auto">
                    <!-- Button -->
                    <button class="btn btn-sm btn-dark" type="submit">Apply</button>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-12 col-md-auto">
              <!-- Button -->
              <button class="btn btn-sm btn-outline-dark">Update Cart</button>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-5 col-lg-4 offset-lg-1">
          <!-- Total -->
          <div class="card mb-7 bg-light">
            <div class="card-body">
              <ul class="list-group list-group-sm list-group-flush-y list-group-flush-x">
                <li class="list-group-item d-flex">
                  <span>총 금액</span>
                  <span
                    v-for="(product, index) in products"
                    :key="index"
                    class="ms-auto fs-sm"
                  >
                    {{ product.productDto.price }}
                  </span>
                  <span> 총금액 </span>
                </li>
                <li class="list-group-item d-flex">
                  <span>배송</span>
                  <span class="ms-auto fs-sm">{{ comma(5000) }}&nbsp;원</span>
                </li>
                <li class="list-group-item d-flex fs-lg fw-bold">
                  <span>Total</span> <span class="ms-auto fs-sm" v-bind="products"></span>
                </li>
                <li class="list-group-item fs-sm text-center text-gray-500">
                  Shipping cost calculated at Checkout *
                </li>
              </ul>
            </div>
          </div>

          <!-- Button -->
          <a class="btn w-100 btn-dark mb-2" href="checkout.html">Proceed to Checkout</a>

          <!-- Link -->
          <a class="btn btn-link btn-sm px-0 text-body" href="shop.html">
            <i class="fe fe-arrow-left me-2"></i> Continue Shopping
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useApi } from '/@src/composable/useApi'

const api = useApi()

interface Product {
  id: number
  productName: string
  thumbnailUrl: string
  price: number
  stock: number
  storeId: number
  storeName: string
  likeCount: number
  productCode: string
  warranty: number
  categoryFirstName: string
  categorySecondName: string
  categoryThirdName: string
  imageList: string[]
}

const products = ref<Product[]>([])

watchEffect(async () => {
  try {
    await api
      .get<Product[]>(`/member/cart`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiZXhwIjoxNjY2MTYwOTUyfQ.twyylh4fJB79fUtYHKhYB9rm-LKlegWGJTNNlsdO_Fkn3uUhO4119Qlsw9PAt4za9dGNYkEtqJfNL2ylpNYn3Q`,
        },
      })
      .then((response) => {
        products.value = response.data
        console.log(products.value)
      })
  } catch (error) {
    console.log(error)
  } finally {
  }
})

function comma(val) {
  return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function selectedControl() {
  const el = document.getElementById('fruit') //select box
  const len = el.options.length //select box의 option 갯수
  const str = document.getElementById('searchValue').value //입력 받은 value 값
  //select box의 option 갯수만큼 for문 돌림
  for (let i = 0; i < len; i++) {
    //select box의 option value가 입력 받은 value의 값과 일치할 경우 selected
    if (el.options[i].value == str) {
      el.options[i].selected = true
    }
  }
}
</script>

<style>

</style>
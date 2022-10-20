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
                    {{ product.storeName }}&nbsp;&nbsp;&nbsp;{{
                      product.productDto.productCode
                    }}
                    <br />
                    보증기간 : {{ product.productDto.warranty }} 개월
                  </p>

                  <!--Footer -->
                  <div class="d-flex align-items-center">
                    <!-- Select -->
                    <select class="form-select form-select-xxs w-auto">
                      <option value="{{product.quantity}}" selected="selcted">
                        {{ product.quantity }}
                      </option>
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
                  <span>상품 금액</span>
                  <span class="ms-auto fs-sm">{{ comma(total(products)) }}&nbsp;원</span>
                </li>
                <li class="list-group-item d-flex">
                  <span>배송 금액</span>
                  <span class="ms-auto fs-sm">{{ comma(5000) }}&nbsp;원</span>
                </li>
                <li class="list-group-item d-flex fs-lg fw-bold">
                  <span>총 금액</span>
                  <span class="ms-auto fs-sm"
                    >{{ comma(total(products) + 5000) }}&nbsp;원</span
                  >
                </li>
                <li class="list-group-item fs-sm text-center text-gray-500">
                  * 배송비가 포함된 가격입니다 *
                </li>
              </ul>
            </div>
          </div>

          <!-- Button -->
          <button
            type="button"
            class="btn w-100 btn-dark mb-2"
            @click="addOrder(products)"
          >
            주문하기
          </button>

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
const router = useRouter()

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
          Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiZXhwIjoxNjY2MjM5ODUzfQ.PgoxeuhzR--y7g-dEJRa5_NxcdWhNrA6PVdJSdIV27YrdGfmPEP9K50xfJFfliyC82LRpQkpDfQxVQyaieA78w`,
        },
      })
      .then((response) => {
        products.value = response.data
        console.log(products.value)
        console.log(products.value[0].productDto.productName)
      })
  } catch (error) {
    console.log(error)
  } finally {
  }
})

function comma(val) {
  return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function total(products) {
  var totalPrice = 0
  for (const product in products) {
    totalPrice += products[product].productDto.price * products[product].quantity
  }
  return totalPrice
}

function totalQuantity(products) {
  var totalQuantity = 0
  for (const product in products) {
    totalQuantity += products[product].quantity
  }
  return totalQuantity
}

function addOrder(products) {
  if (confirm('주문 하시겠습니다?')) {
    var orderDataDtoList = new Array()
    for (const product in products) {
      var Json = new Object()
      Json.productId = products[product].productDto.id
      Json.productName = products[product].productDto.productName
      Json.productQuantity = products[product].quantity
      Json.productPrice = products[product].productDto.price
      orderDataDtoList.push(Json)
    }
    api
      .post(
        `/order/orders/pays`,
        {
          buyerId: 2,
          totalPrice: total(products) + 5000,
          totalQuantity: totalQuantity(products),
          orderDataDtoList: orderDataDtoList,
        },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiZXhwIjoxNjY2MjM5ODUzfQ.PgoxeuhzR--y7g-dEJRa5_NxcdWhNrA6PVdJSdIV27YrdGfmPEP9K50xfJFfliyC82LRpQkpDfQxVQyaieA78w`,
          },
        }
      )
      .then((response) => {
        alert('주문 완료되었습니다.')
        // stores.value = response.data
        router.push('/views/MyMain')
      })
  }
}
</script>

<style>

</style>
<template>
  <!-- BREADCRUMB -->
  <nav class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- Breadcrumb -->
          <ol class="breadcrumb mb-0 fs-xs text-gray-400">
            <li class="breadcrumb-item">
              <a class="text-gray-400" href="index.html">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a class="text-gray-400" href="shop.html">{{
                product?.categoryFirstName
              }}</a>
            </li>
            <li class="breadcrumb-item active">
              {{ product?.categorySecondName }}
            </li>
          </ol>
        </div>
      </div>
    </div>
  </nav>

  <!-- PRODUCT -->
  <section>
    <div class="container" style="background-color: white">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div class="col-12 col-md-6">
              <!-- Card -->
              <div class="card">
                <!-- Badge -->
                <div class="badge bg-primary card-badge text-uppercase">Sale</div>

                <!-- Slider -->
                <div
                  id="productSlider"
                  class="mb-4"
                  data-flickity='{"draggable": false, "fade": true}'
                >
                  <!-- Item -->
                  <a
                    href="#"
                    data-bigpicture='{ "imgSrc": "../../../assets/img/products/product-7.jpg"}'
                  >
                    <img
                      id="thumbnailImg"
                      :src="product?.thumbnailUrl"
                      alt="..."
                      class="card-img-top"
                      style="height: 637px"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 ps-lg-10">
              <br>
              <!-- Header -->
              <div class="row mb-1">
                <div class="col">
                  <!-- Preheading -->
                  <a class="text-muted" href="shop.html">{{
                    product?.categoryThirdName
                  }}</a>
                </div>
                <div class="col-auto">
                  <i class="fa-solid fa-heart"></i>
                  {{ product?.likeCount }}
                </div>
              </div>

              <br>

              <!-- Heading -->
              <h3 class="mb-2" style="font-size: 32px; font-weight: bold">
                {{ product?.productName }}
              </h3>

              <!-- Price -->
              <div class="mb-7">
                <span class="ms-1 fs-5 fw-bolder text-primary">{{
                  comma(product?.price)
                }}</span>
                <span class="fs-sm ms-1">원</span>
              </div>

              <!-- Form -->
              <form>
                <div class="form-group">
                  <!-- Label -->
                  <p class="mb-5">보증기간: <strong id="colorCaption">{{product?.warranty}}개월</strong></p>

                </div>
                <div class="form-group">
                  <!-- Radio -->
                  <div class="mb-2" >
                    <div v-for="(store, index) in stores"
                  :key="index" class="form-check form-check-inline form-check-size mb-2">
                      <input
                        :id="'문자열'+index"
                        type="radio"
                        class="form-check-input"
                        name="sizeRadio"
                        :value=store.storeId
                        data-toggle="form-caption"
                        data-target="#sizeCaption"
                        />
                          <label class="form-check-label" :for="'문자열'+index">{{store.storeName}}</label>
                    </div>
                  </div>

                  <div class="row-2 gx-5 mb-7">
                    <div class="col-12 col-lg-auto">
                      <!-- Quantity -->
                      <select v-model=quantity class="form-select mb-2">
                        <option value="1" selected>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                    <div class="col-12 col-lg">
                      <!-- Submit -->
                      <!-- <RouterLink
                        class="card-img-hover"
                        :to="{
                          name: '/views/MyCart',
                          params: {
                            // id: product.id,
                          },
                        }"
                      > -->
                        <button type="button" @click=addCart() class="btn btn-outline-dark w-100 mb-2">
                          장바구니에 추가 <i class="fe fe-shopping-cart ms-2"></i>
                        </button>
                      <!-- </RouterLink> -->
                      <button type="submit" class="btn btn-outline-dark w-100 mb-2">
                        주문하기 &nbsp;  <i class="fa-solid fa-barcode"></i>
                      </button>
                    </div>
                    <div class="col-12 col-lg-auto">
                      <!-- Wishlist -->
                      <button
                        class="btn btn-outline-dark w-100 mb-2"
                        data-toggle="button"
                      >
                        Wishlist <i class="fe fe-heart ms-2"></i>
                      </button>
                    </div>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- DESCRIPTION -->
  <section class="pt-11">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- Nav -->
          <div
            class="nav nav-tabs nav-overflow justify-content-start justify-content-md-center border-bottom"
          >
            <a class="nav-link active" data-bs-toggle="tab" href="#descriptionTab">
              Description
            </a>
          </div>

          <!-- Content -->
          <div >
            <div
              v-for="(descriptionImage, index) in product?.imageList"
              :key="index"
            >
              <img
                        id="description"
                        :src="descriptionImage"
                        alt="..."
                        class="card-img-top"
                      />
            </div>
          </div>
          </div>
      </div>
    </div>
  </section>

  <!-- REVIEWS -->
  <section id="reviews" class="pt-9 pb-11">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- Heading -->
          <h4 class="mb-10 text-center">Customer Reviews</h4>

          <!-- Header -->
          <div class="row align-items-center">
            <div class="col-12 col-md-auto">
              <!-- Dropdown -->
              <div class="dropdown mb-4 mb-md-0">
                <!-- Toggle -->
                <a class="dropdown-toggle text-reset" data-bs-toggle="dropdown" href="#">
                  <strong>Sort by: Newest</strong>
                </a>

                <!-- Menu -->
                <div class="dropdown-menu mt-3">
                  <a class="dropdown-item" href="#!">Newest</a>
                  <a class="dropdown-item" href="#!">Oldest</a>
                </div>
              </div>
            </div>
            <div class="col-12 col-md text-md-center">
              <!-- Rating -->
              <div class="rating text-dark h6 mb-4 mb-md-0" data-value="4">
                <div class="rating-item">
                  <i class="fas fa-star"></i>
                </div>
                <div class="rating-item">
                  <i class="fas fa-star"></i>
                </div>
                <div class="rating-item">
                  <i class="fas fa-star"></i>
                </div>
                <div class="rating-item">
                  <i class="fas fa-star"></i>
                </div>
                <div class="rating-item">
                  <i class="fas fa-star"></i>
                </div>
              </div>

              <!-- Count -->
              <strong class="fs-sm ms-2">Reviews (3)</strong>
            </div>
            <div class="col-12 col-md-auto">
              <!-- Button -->
              <a class="btn btn-sm btn-dark" data-bs-toggle="collapse" href="#reviewForm">
                Write Review
              </a>
            </div>
          </div>

          <!-- New Review -->
          <div id="reviewForm" class="collapse">
            <!-- Divider -->
            <hr class="my-8" />

            <!-- Form -->
            <form>
              <div class="row">
                <div class="col-12 mb-6 text-center">
                  <!-- Text -->
                  <p class="mb-1 fs-xs">Score:</p>

                  <!-- Rating form -->
                  <div class="rating-form">
                    <!-- Input -->
                    <input class="rating-input" type="range" min="1" max="5" value="5" />

                    <!-- Rating -->
                    <div class="rating h5 text-dark" data-value="5">
                      <div class="rating-item">
                        <i class="fas fa-star"></i>
                      </div>
                      <div class="rating-item">
                        <i class="fas fa-star"></i>
                      </div>
                      <div class="rating-item">
                        <i class="fas fa-star"></i>
                      </div>
                      <div class="rating-item">
                        <i class="fas fa-star"></i>
                      </div>
                      <div class="rating-item">
                        <i class="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <!-- Name -->
                  <div class="form-group">
                    <label class="visually-hidden" for="reviewName">Your Name:</label>
                    <input
                      id="reviewName"
                      class="form-control form-control-sm"
                      type="text"
                      placeholder="Your Name *"
                      required
                    />
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <!-- Email -->
                  <div class="form-group">
                    <label class="visually-hidden" for="reviewEmail">Your Email:</label>
                    <input
                      id="reviewEmail"
                      class="form-control form-control-sm"
                      type="email"
                      placeholder="Your Email *"
                      required
                    />
                  </div>
                </div>
                <div class="col-12">
                  <!-- Name -->
                  <div class="form-group">
                    <label class="visually-hidden" for="reviewTitle">Review Title:</label>
                    <input
                      id="reviewTitle"
                      class="form-control form-control-sm"
                      type="text"
                      placeholder="Review Title *"
                      required
                    />
                  </div>
                </div>
                <div class="col-12">
                  <!-- Name -->
                  <div class="form-group">
                    <label class="visually-hidden" for="reviewText">Review:</label>
                    <textarea
                      id="reviewText"
                      class="form-control form-control-sm"
                      rows="5"
                      placeholder="Review *"
                      required
                    ></textarea>
                  </div>
                </div>
                <div class="col-12 text-center">
                  <!-- Button -->
                  <button class="btn btn-outline-dark" type="submit">Post Review</button>
                </div>
              </div>
            </form>
          </div>

          <!-- Reviews -->
          <div class="mt-8">
            <!-- Review -->
            <div class="review">
              <div class="review-body">
                <div class="row">
                  <div class="col-12 col-md-auto">
                    <!-- Avatar -->
                    <div class="avatar avatar-xxl mb-6 mb-md-0">
                      <span class="avatar-title rounded-circle">
                        <i class="fa fa-user"></i>
                      </span>
                    </div>
                  </div>
                  <div class="col-12 col-md">
                    <!-- Header -->
                    <div class="row mb-6">
                      <div class="col-12">
                        <!-- Rating -->
                        <div class="rating fs-sm text-dark" data-value="5">
                          <div class="rating-item">
                            <i class="fas fa-star"></i>
                          </div>
                          <div class="rating-item">
                            <i class="fas fa-star"></i>
                          </div>
                          <div class="rating-item">
                            <i class="fas fa-star"></i>
                          </div>
                          <div class="rating-item">
                            <i class="fas fa-star"></i>
                          </div>
                          <div class="rating-item">
                            <i class="fas fa-star"></i>
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <!-- Time -->
                        <span class="fs-xs text-muted">
                          Logan Edwards, <time datetime="2019-07-25">25 Jul 2019</time>
                        </span>
                      </div>
                    </div>

                    <!-- Title -->
                    <p class="mb-2 fs-lg fw-bold">So cute!</p>

                    <!-- Text -->
                    <p class="text-gray-500">
                      Justo ut diam erat hendrerit. Morbi porttitor, per eu. Sodales
                      curabitur diam sociis. Taciti lobortis nascetur. Ante laoreet odio
                      hendrerit. Dictumst curabitur nascetur lectus potenti dis
                      sollicitudin habitant quis vestibulum.
                    </p>

                    <!-- Footer -->
                    <div class="row align-items-center">
                      <div class="col-auto d-none d-lg-block">
                        <!-- Text -->
                        <p class="mb-0 fs-sm">Was this review helpful?</p>
                      </div>
                      <div class="col-auto me-auto">
                        <!-- Rate -->
                        <div class="rate">
                          <a
                            class="rate-item"
                            data-toggle="vote"
                            data-count="3"
                            href="#"
                            role="button"
                          >
                            <i class="fe fe-thumbs-up"></i>
                          </a>
                          <a
                            class="rate-item"
                            data-toggle="vote"
                            data-count="0"
                            href="#"
                            role="button"
                          >
                            <i class="fe fe-thumbs-down"></i>
                          </a>
                        </div>
                      </div>
                      <div class="col-auto d-none d-lg-block">
                        <!-- Text -->
                        <p class="mb-0 fs-sm">Comments (0)</p>
                      </div>
                      <div class="col-auto">
                        <!-- Button -->
                        <a class="btn btn-xs btn-outline-border" href="#!"> Comment </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Review -->
            <div class="review">
              <!-- Body -->
              <div class="review-body">
                <div class="row">
                  <div class="col-12 col-md-auto">
                    <!-- Avatar -->
                    <div class="avatar avatar-xxl mb-6 mb-md-0">
                      <span class="avatar-title rounded-circle">
                        <i class="fa fa-user"></i>
                      </span>
                    </div>
                  </div>
                  <div class="col-12 col-md">
                    <!-- Header -->
                    <div class="row mb-6">
                      <div class="col-12">
                        <!-- Rating -->
                        <div class="rating fs-sm text-dark" data-value="3">
                          <div class="rating-item">
                            <i class="fas fa-star"></i>
                          </div>
                          <div class="rating-item">
                            <i class="fas fa-star"></i>
                          </div>
                          <div class="rating-item">
                            <i class="fas fa-star"></i>
                          </div>
                          <div class="rating-item">
                            <i class="fas fa-star"></i>
                          </div>
                          <div class="rating-item">
                            <i class="fas fa-star"></i>
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <!-- Time -->
                        <span class="fs-xs text-muted">
                          Sophie Casey, <time datetime="2019-07-07">07 Jul 2019</time>
                        </span>
                      </div>
                    </div>

                    <!-- Title -->
                    <p class="mb-2 fs-lg fw-bold">Cute, but too small</p>

                    <!-- Text -->
                    <p class="text-gray-500">
                      Shall good midst can't. Have fill own his multiply the divided.
                      Thing great. Of heaven whose signs.
                    </p>

                    <!-- Footer -->
                    <div class="row align-items-center">
                      <div class="col-auto d-none d-lg-block">
                        <!-- Text -->
                        <p class="mb-0 fs-sm">Was this review helpful?</p>
                      </div>
                      <div class="col-auto me-auto">
                        <!-- Rate -->
                        <div class="rate">
                          <a
                            class="rate-item"
                            data-toggle="vote"
                            data-count="2"
                            href="#"
                            role="button"
                          >
                            <i class="fe fe-thumbs-up"></i>
                          </a>
                          <a
                            class="rate-item"
                            data-toggle="vote"
                            data-count="1"
                            href="#"
                            role="button"
                          >
                            <i class="fe fe-thumbs-down"></i>
                          </a>
                        </div>
                      </div>
                      <div class="col-auto d-none d-lg-block">
                        <!-- Text -->
                        <p class="mb-0 fs-sm">Comments (1)</p>
                      </div>
                      <div class="col-auto">
                        <!-- Button -->
                        <a class="btn btn-xs btn-outline-border" href="#!"> Comment </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Child review -->
              <div class="review review-child">
                <div class="review-body">
                  <!-- Content -->
                  <div class="row">
                    <div class="col-12 col-md-auto">
                      <!-- Avatar -->
                      <div class="avatar avatar-xxl mb-6 mb-md-0">
                        <span class="avatar-title rounded-circle">
                          <i class="fa fa-user"></i>
                        </span>
                      </div>
                    </div>
                    <div class="col-12 col-md">
                      <!-- Header -->
                      <div class="row mb-6">
                        <div class="col-12">
                          <!-- Rating -->
                          <div class="rating fs-sm text-dark" data-value="4">
                            <div class="rating-item">
                              <i class="fas fa-star"></i>
                            </div>
                            <div class="rating-item">
                              <i class="fas fa-star"></i>
                            </div>
                            <div class="rating-item">
                              <i class="fas fa-star"></i>
                            </div>
                            <div class="rating-item">
                              <i class="fas fa-star"></i>
                            </div>
                            <div class="rating-item">
                              <i class="fas fa-star"></i>
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <!-- Time -->
                          <span class="fs-xs text-muted">
                            William Stokes, <time datetime="2019-07-14">14 Jul 2019</time>
                          </span>
                        </div>
                      </div>

                      <!-- Title -->
                      <p class="mb-2 fs-lg fw-bold">Very good</p>

                      <!-- Text -->
                      <p class="text-gray-500">
                        Made face lights yielding forth created for image behold blessed
                        seas.
                      </p>

                      <!-- Footer -->
                      <div class="row align-items-center">
                        <div class="col-auto d-none d-lg-block">
                          <!-- Text -->
                          <p class="mb-0 fs-sm">Was this review helpful?</p>
                        </div>
                        <div class="col-auto me-auto">
                          <!-- Rate -->
                          <div class="rate">
                            <a
                              class="rate-item"
                              data-toggle="vote"
                              data-count="7"
                              href="#"
                              role="button"
                            >
                              <i class="fe fe-thumbs-up"></i>
                            </a>
                            <a
                              class="rate-item"
                              data-toggle="vote"
                              data-count="0"
                              href="#"
                              role="button"
                            >
                              <i class="fe fe-thumbs-down"></i>
                            </a>
                          </div>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                          <!-- Text -->
                          <p class="mb-0 fs-sm">Comments (0)</p>
                        </div>
                        <div class="col-auto">
                          <!-- Button -->
                          <a class="btn btn-xs btn-outline-border" href="#!"> Comment </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <nav class="d-flex justify-content-center mt-9">
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

  <!-- FEATURES -->
  <section class="bg-light py-9">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-3">
          <!-- Item -->
          <div class="d-flex mb-6 mb-lg-0">
            <!-- Icon -->
            <i class="fe fe-truck fs-lg text-primary"></i>

            <!-- Body -->
            <div class="ms-6">
              <!-- Heading -->
              <h6 class="heading-xxs mb-1">Free shipping</h6>

              <!-- Text -->
              <p class="mb-0 fs-sm text-muted">From all orders over $100</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <!-- Item -->
          <div class="d-flex mb-6 mb-lg-0">
            <!-- Icon -->
            <i class="fe fe-repeat fs-lg text-primary"></i>

            <!-- Body -->
            <div class="ms-6">
              <!-- Heading -->
              <h6 class="mb-1 heading-xxs">Free returns</h6>

              <!-- Text -->
              <p class="mb-0 fs-sm text-muted">Return money within 30 days</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <!-- Item -->
          <div class="d-flex mb-6 mb-md-0">
            <!-- Icon -->
            <i class="fe fe-lock fs-lg text-primary"></i>

            <!-- Body -->
            <div class="ms-6">
              <!-- Heading -->
              <h6 class="mb-1 heading-xxs">Secure shopping</h6>

              <!-- Text -->
              <p class="mb-0 fs-sm text-muted">You're in safe hands</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <!-- Item -->
          <div class="d-flex">
            <!-- Icon -->
            <i class="fe fe-tag fs-lg text-primary"></i>

            <!-- Body -->
            <div class="ms-6">
              <!-- Heading -->
              <h6 class="mb-1 heading-xxs">Over 10,000 Styles</h6>

              <!-- Text -->
              <p class="mb-0 fs-sm text-muted">We have everything you need</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useApi } from '/@src/composable/useApi'

interface Product {
  id: number
  productName: string
  thumbnailUrl: string
  price: number
  stock: number
  storeId : number
  storeName: string
  likeCount: number
  productCode: string
  warranty: number
  categoryFirstName: string
  categorySecondName: string
  categoryThirdName: string
  imageList: string[]
}

interface Store{
  storeId : number
  storeName : string
}

const product = ref<Product>()
const stores = ref<Store[]>([])
const quantity = ref(Number)
const loading = ref(false)
const api = useApi()
const router = useRouter()
const route = useRoute()

watchEffect(async () => {
  const currentProductId = (route.params?.id as string) ?? ''
  loading.value = true

  try {
    await api.get<Product>(`/product/products/` + currentProductId).then((response)=>{
      product.value = response.data

      api.get<Store[]>(`/member/store/`+product.value.storeId+`/list`).then((response)=>{
        stores.value = response.data
        console.log(stores)
      })
    })
    
  } catch (error) {
  } finally {
    loading.value = false
  }
})
useHead({
  title: computed(() => product.value?.productName ?? 'Loading article...'),
})

function getStores(){
}

function comma(val) {
  return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function imgClick(e: HTMLDataElement) {
  const thumb = document.getElementById('thumbnailImg') as HTMLInputElement
  console.log(e.path[0].src)
  thumb.src = e.path[0].src
}

function addCart(){
  api.post(`/member/cart`,{
      productId : product.value?.id,
      quantity : quantity.value,
      memberId : "15" 
  },{
    headers : {
      Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNiIsImV4cCI6MTY2NjA5Njc2MX0.B7_gfsQ_aHNGSJrAZNY9bngr9t8-Uk9vloS5r678DMSDnZM5_IEnXCs3ITVqloIVy76f3MXfXyweZhMhzT3GHw`
    }
  }).then((response)=>{
        // stores.value = response.data
        console.log(response)
        router.push("/views/MyCart")
      })
}

</script>

<style>

</style>

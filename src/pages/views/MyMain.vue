<template>
  <!-- CATEGORIES -->
  <section>
    <div
      class="row gx-0 d-block d-lg-flex flickity flickity-lg-none"
      data-flickity='{"watchCSS": true}'
      style="display: flex"
    >
      <!-- Item -->
      <div
        class="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover"
        style="background-image: url(/assets/img/covers/cover-1.jpg)"
      >
        <div
          class="card bg-dark-5 bg-hover text-white text-center"
          style="min-height: 470px"
        >
          <div class="card-body mt-auto mb-n11 py-8">
            <!-- Heading -->
            <h1 class="mb-0 fw-bolder" style="font-size: 50px; color: white">Women</h1>
          </div>
          <div class="card-body mt-auto py-8">
            <!-- Button -->
            <a
              class="btn btn-white stretched-link"
              href="MyShop"
              style="font-weight: bold"
            >
              여성 몰 <i class="fe fe-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Card -->
      <div
        class="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover"
        style="background-image: url(/assets/img/covers/cover-2.jpg)"
      >
        <div
          class="card bg-dark-5 bg-hover text-white text-center"
          style="min-height: 470px"
        >
          <div class="card-body mt-auto mb-n11 py-8">
            <!-- Heading -->
            <h1 class="mb-0 fw-bolder" style="font-size: 50px; color: white">Men</h1>
          </div>
          <div class="card-body mt-auto py-8">
            <!-- Button -->
            <a
              class="btn btn-white stretched-link"
              href="MyShop"
              style="font-weight: bold"
            >
              남성 몰 <i class="fe fe-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Card -->
      <div
        class="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover"
        style="background-image: url(/assets/img/covers/cover-5.jpg)"
      >
        <div
          class="card bg-dark-5 bg-hover text-white text-center"
          style="min-height: 470px"
        >
          <div class="card-body mt-auto mb-n11 py-8">
            <!-- Heading -->
            <h1 class="mb-0 fw-bolder" style="font-size: 50px; color: white">
              Accessories
            </h1>
          </div>
          <div class="card-body mt-auto py-8">
            <!-- Button -->
            <a
              class="btn btn-white stretched-link"
              href="MyShop"
              style="font-weight: bold"
            >
              악세서리 <i class="fe fe-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>


  <!-- TOP SELLERS -->
  <section class="py-12">
    <div class="container">
      <div class="row justify-content-center">
      </div>
      <div class="tab-content" style="display: block">
        <div id="topSellersTab" class="tab-pane fade show active">
          <div class="row">
            <div
              v-for="product in productList.data"
              :key="product.id"
              class="col-6 col-md-4 col-lg-3"
            >
              <!-- Card -->
              <div class="card mb-7" style="height: 500px">
                <!-- Badge -->
                <div
                  class="badge bg-white text-body card-badge card-badge-start text-uppercase"
                >
                  New
                </div>

                <!-- Image -->
                <div class="card-img">
                  <!-- Image -->
                  <RouterLink
                    class="card-img-hover"
                    :to="{
                      name: '/views/product/[productCode]',
                      params: {
                        productCode: product.productCode,
                      },
                    }"
                  >
                    <img
                      class="card-img-top card-img-back"
                      style="height: 384px"
                      :src="product.thumbnailUrl"
                      alt="..."
                    />
                    <img
                      class="card-img-top card-img-front"
                      style="height: 384px"
                      :src="product.thumbnailUrl"
                      alt="..."
                    />
                  </RouterLink>
                  <!-- <a class="card-img-hover" href="/MyProduct"> -->
                  <!-- </a> -->

                  <!-- Actions -->
                  <div class="card-actions">
                    <span class="card-action">
                      <button
                        class="btn btn-xs btn-circle btn-white-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#modalProduct"
                      >
                        <i class="fe fe-eye"></i>
                      </button>
                    </span>
                    <span class="card-action">
                      <button
                        class="btn btn-xs btn-circle btn-white-primary"
                        data-toggle="button"
                      >
                        <i class="fe fe-shopping-cart"></i>
                      </button>
                    </span>
                    <span class="card-action">
                      <button
                        class="btn btn-xs btn-circle btn-white-primary"
                        data-toggle="button"
                      >
                        <i class="fe fe-heart"></i>
                      </button>
                    </span>
                  </div>
                </div>

                <!-- Body -->
                <div class="card-body px-0">
                  <!-- Category -->
                  <div class="fs-xs">
                    <a class="text-muted" href="MyShop">{{ product.categoryThirdId }}</a>
                  </div>

                  <!-- Title -->
                  <div class="fw-bold">
                    <a class="text-body" href="/MyProduct">
                      {{ product.productName }}
                    </a>
                  </div>

                  <!-- Price -->
                  <div class="fw-bold text-muted">
                    {{ product.price }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row" style="display:none">
        <div class="col-12">
          <!-- Link  -->
          <div class="mt-7 text-center">
            <a class="link-underline" href="#!">Discover more</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- BRANDS -->
  <section class="py-12 bg-light" style="display:none">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <!-- Heading -->
          <h2 class="mb-3">@Lux On</h2>

          <!-- Subheading -->
          <p class="mb-10 fs-lg text-gray-500">
            Appear, dry there darkness they're seas, dry waters.
          </p>
        </div>
      </div>
      <div class="row mx-n1 mb-10">
        <div class="col-6 col-sm-4 col-md px-1">
          <!-- Card -->
          <div class="card mb-2">
            <!-- Image -->
            <img src="./assets/img/products/product-16.jpg" alt="..." class="card-img" />

            <!-- Overlay -->
            <a
              class="card-img-overlay card-img-overlay-hover align-items-center bg-dark-40"
            >
              <p class="my-0 fs-xxs text-center text-white">
                <i class="fe fe-heart me-2"></i> 248
                <i class="fe fe-message-square me-2 ms-3"></i> 7
              </p>
            </a>
          </div>
        </div>
        <div class="col-6 col-sm-4 col-md px-1">
          <!-- Card -->
          <div class="card mb-2">
            <!-- Image -->
            <img src="./assets/img/products/product-17.jpg" alt="..." class="card-img" />

            <!-- Overlay -->
            <a
              class="card-img-overlay card-img-overlay-hover align-items-center bg-dark-40"
            >
              <p class="my-0 fs-xxs text-center text-white">
                <i class="fe fe-heart me-2"></i> 248
                <i class="fe fe-message-square me-2 ms-3"></i> 7
              </p>
            </a>
          </div>
        </div>
        <div class="col-6 col-sm-4 col-md px-1">
          <!-- Card -->
          <div class="card mb-2">
            <!-- Image -->
            <img src="./assets/img/products/product-18.jpg" alt="..." class="card-img" />

            <!-- Overlay -->
            <a
              class="card-img-overlay card-img-overlay-hover align-items-center bg-dark-40"
            >
              <p class="my-0 fs-xxs text-center text-white">
                <i class="fe fe-heart me-2"></i> 248
                <i class="fe fe-message-square me-2 ms-3"></i> 7
              </p>
            </a>
          </div>
        </div>
        <div class="col-6 col-sm-4 col-md px-1">
          <!-- Card -->
          <div class="card mb-2">
            <!-- Image -->
            <img src="./assets/img/products/product-19.jpg" alt="..." class="card-img" />

            <!-- Overlay -->
            <a
              class="card-img-overlay card-img-overlay-hover align-items-center bg-dark-40"
            >
              <p class="my-0 fs-xxs text-center text-white">
                <i class="fe fe-heart me-2"></i> 248
                <i class="fe fe-message-square me-2 ms-3"></i> 7
              </p>
            </a>
          </div>
        </div>
        <div class="col-6 col-sm-4 col-md px-1">
          <!-- Card -->
          <div class="card">
            <!-- Image -->
            <img src="./assets/img/products/product-20.jpg" alt="..." class="card-img" />

            <!-- Overlay -->
            <a
              class="card-img-overlay card-img-overlay-hover align-items-center bg-dark-40"
            >
              <p class="my-0 fs-xxs text-center text-white">
                <i class="fe fe-heart me-2"></i> 248
                <i class="fe fe-message-square me-2 ms-3"></i> 7
              </p>
            </a>
          </div>
        </div>
        <div class="col-6 col-sm-4 col-md px-1">
          <!-- Card -->
          <div class="card">
            <!-- Image -->
            <img src="./assets/img/products/product-21.jpg" alt="..." class="card-img" />

            <!-- Overlay -->
            <a
              class="card-img-overlay card-img-overlay-hover align-items-center bg-dark-40"
            >
              <p class="my-0 fs-xxs text-center text-white">
                <i class="fe fe-heart me-2"></i> 248
                <i class="fe fe-message-square me-2 ms-3"></i> 7
              </p>
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-4 col-sm-3 col-md text-center">
          <!-- Brand -->
          <img
            src="./assets/img/brands/gray-350/mango.svg"
            alt="..."
            class="img-fluid mb-7 mb-md-0"
          />
        </div>
        <div class="col-4 col-sm-3 col-md text-center">
          <!-- Brand -->
          <img
            src="./assets/img/brands/gray-350/zara.svg"
            alt="..."
            class="img-fluid mb-7 mb-md-0"
          />
        </div>
        <div class="col-4 col-sm-3 col-md text-center">
          <!-- Brand -->
          <img
            src="./assets/img/brands/gray-350/reebok.svg"
            alt="..."
            class="img-fluid mb-7 mb-md-0"
          />
        </div>
        <div class="col-4 col-sm-3 col-md text-center">
          <!-- Brand -->
          <img
            src="./assets/img/brands/gray-350/asos.svg"
            alt="..."
            class="img-fluid mb-7 mb-md-0"
          />
        </div>
        <div class="col-4 col-sm-3 col-md text-center">
          <!-- Brand -->
          <img
            src="./assets/img/brands/gray-350/stradivarius.svg"
            alt="..."
            class="img-fluid mb-6 mb-sm-0"
          />
        </div>
        <div class="col-4 col-sm-3 col-md text-center">
          <!-- Brand -->
          <img
            src="./assets/img/brands/gray-350/adidas.svg"
            alt="..."
            class="img-fluid mb-6 mb-sm-0"
          />
        </div>
        <div class="col-4 col-sm-3 col-md text-center">
          <!-- Brand -->
          <img
            src="./assets/img/brands/gray-350/bershka.svg"
            alt="..."
            class="img-fluid"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useApi } from '/@src/composable/useApi'
const api = useApi()

export default {
  data() {
    return {
      productList: [],
    }
  },
  created() {
    this.getProductList()
  },
  methods: {
    async getProductList() {
      this.productList = await api.get('/product/products', {})
      console.log(this.productList)
      // alert(this.productList.data)
    },
  },
}
</script>

<style>

</style>

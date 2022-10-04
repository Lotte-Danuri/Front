<template>
  <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 col-lg-8 col-xl-6">

            <!-- Heading -->
            <h2 class="mb-4 text-center">Top month Sellers</h2>

            <!-- Nav -->
            <div class="nav justify-content-center mb-10">
              <a class="nav-link active" href="#topSellersTab" data-bs-toggle="tab">Women</a>
              <a class="nav-link" href="#topSellersTab" data-bs-toggle="tab">Men</a>
              <a class="nav-link" href="#topSellersTab" data-bs-toggle="tab">Kids</a>
            </div>

          </div>
        </div>
        <div class="tab-content">
          <div class="tab-pane fade show active" id="topSellersTab">
            <div class="row">
              <div :key="i" v-for="(product,i) in productList" class="col-6 col-md-4 col-lg-3">
                <!-- Card -->
                <div class="card mb-7">

                  <!-- Badge -->
                  <div class="badge bg-white text-body card-badge card-badge-start text-uppercase">
                    New
                  </div>

                  <!-- Image -->
                  <div class="card-img">

                    <!-- Image -->
                    <a class="card-img-hover" href="/MyProduct">
                      <img class="card-img-top card-img-back" :src="product.thumbnailUrl" alt="...">
                      <img class="card-img-top card-img-front" :src="product.thumbnailUrl" alt="...">
                    </a>

                    <!-- Actions -->
                    <div class="card-actions">
                      <span class="card-action">
                        <button class="btn btn-xs btn-circle btn-white-primary" data-bs-toggle="modal" data-bs-target="#modalProduct">
                          <i class="fe fe-eye"></i>
                        </button>
                      </span>
                      <span class="card-action">
                        <button class="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                          <i class="fe fe-shopping-cart"></i>
                        </button>
                      </span>
                      <span class="card-action">
                        <button class="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                          <i class="fe fe-heart"></i>
                        </button>
                      </span>
                    </div>

                  </div>

                  <!-- Body -->
                  <div class="card-body px-0">

                    <!-- Category -->
                    <div class="fs-xs">
                      <a class="text-muted" href="MyShop">Shoes</a>
                    </div>

                    <!-- Title -->
                    <div class="fw-bold">
                      <a class="text-body" href="/MyProduct">
                        {{product.productName}}
                      </a>
                    </div>

                    <!-- Price -->
                    <div class="fw-bold text-muted">
                      {{product.price}}
                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">

            <!-- Link  -->
            <div class="mt-7 text-center">
              <a class="link-underline" href="#!">Discover more</a>
            </div>

          </div>
        </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      productList: []
    }
  },
  created () {
    this.getProductList()
  },
  methods: {
    async getProductList () {
      this.productList = await this.$api('/products', {})
      console.log(this.productList)
    }
    // goToDetail (productId) {
    //   this.$router.push({ path: '/detail', query: { product_id: productId } })
    // }
  }
}
</script>

<style>

</style>

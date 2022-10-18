<template>
  <div>
    <!-- MODALS -->
    <!-- Newsletter: Horizontal -->
    <div
      id="modalNewsletterHorizontal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <!-- Close -->
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fe fe-x" aria-hidden="true"></i>
          </button>

          <!-- Content -->
          <div class="row gx-0">
            <div class="col-12 col-lg-5">
              <!-- Image -->
              <img class="img-fluid" src="./assets/img/covers/cover-25.jpg" alt="..." />
            </div>
            <div class="col-12 col-lg-7 d-flex flex-column px-md-8">
              <!-- Body -->
              <div class="modal-body my-auto py-10">
                <!-- Heading -->
                <h4>Subscribe to Newsletter and get 15% Discount</h4>

                <!-- Text -->
                <p class="mb-7 fs-lg">On your next purchase</p>

                <!-- Form -->
                <form>
                  <div class="row gx-5">
                    <div class="col">
                      <!-- Input -->
                      <label class="visually-hidden" for="modalNewsletterHorizontalEmail"
                        >Enter Email *</label
                      >
                      <input
                        id="modalNewsletterHorizontalEmail"
                        class="form-control form-control-sm"
                        type="email"
                        placeholder="Enter Email *"
                      />
                    </div>
                    <div class="col-auto">
                      <!-- Button -->
                      <button class="btn btn-sm btn-dark" type="submit">
                        <i class="fe fe-send"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <!-- Footer -->
              <div class="modal-footer pt-0">
                <!-- Checkbox -->
                <div class="form-check">
                  <!-- Input -->
                  <input
                    id="modalNewsletterHorizontalCheckbox"
                    class="form-check-input"
                    type="checkbox"
                  />

                  <!-- Label -->
                  <label
                    class="form-check-label fs-xs"
                    for="modalNewsletterHorizontalCheckbox"
                  >
                    Prevent this Pop-up
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Newsletter: Vertical -->
    <div
      id="modalNewsletterVertical"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <!-- Close -->
          <button
            type="button"
            class="btn-close text-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fe fe-x" aria-hidden="true"></i>
          </button>

          <!-- Body -->
          <div
            class="modal-body mt-2 me-2 ms-2 py-10 bg-cover text-center text-white"
            style="background-image: url(./assets/img/covers/cover-26.jpg)"
          >
            <!-- Heading -->
            <h4>Subscribe to Newsletter and get 15% Discount</h4>

            <!-- Text -->
            <p class="mb-0 fs-lg">On your next purchase</p>
          </div>

          <!-- Body -->
          <div class="modal-body py-9">
            <!-- Form -->
            <form>
              <div class="row gx-5">
                <div class="col">
                  <!-- Input -->
                  <label class="visually-hidden" for="modalNewsletterVerticalEmail"
                    >Enter Email *</label
                  >
                  <input
                    id="modalNewsletterVerticalEmail"
                    class="form-control form-control-sm"
                    type="email"
                    placeholder="Enter Email *"
                  />
                </div>
                <div class="col-auto">
                  <!-- Button -->
                  <button class="btn btn-sm btn-dark" type="submit">Subscribe</button>
                </div>
              </div>
            </form>
          </div>

          <!-- Footer -->
          <div class="modal-footer justify-content-center pt-0">
            <!-- Checkbox -->
            <div class="form-check">
              <!-- Input -->
              <input
                id="modalNewsletterVerticalCheckbox"
                class="form-check-input"
                type="checkbox"
              />

              <!-- Label -->
              <label class="form-check-label fs-xs" for="modalNewsletterVerticalCheckbox">
                Prevent this Pop-up
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Password Reset -->
    <div
      id="modalPasswordReset"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <!-- Close -->
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fe fe-x" aria-hidden="true"></i>
          </button>

          <!-- Header-->
          <div class="modal-header lh-fixed fs-lg">
            <strong class="mx-auto">Forgot Password?</strong>
          </div>

          <!-- Body -->
          <div class="modal-body text-center">
            <!-- Text -->
            <p class="mb-7 fs-sm text-gray-500">
              Please enter your Email Address. You will receive a link to create a new
              password via Email.
            </p>

            <!-- Form -->
            <form>
              <!-- Email -->
              <div class="form-group">
                <label class="visually-hidden" for="modalPasswordResetEmail">
                  Email Address *
                </label>
                <input
                  id="modalPasswordResetEmail"
                  class="form-control form-control-sm"
                  type="email"
                  placeholder="Email Address *"
                  required
                />
              </div>

              <!-- Button -->
              <button class="btn btn-sm btn-dark">Reset Password</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Product -->
    <div
      id="modalProduct"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
        <div class="modal-content">
          <!-- Close -->
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fe fe-x" aria-hidden="true"></i>
          </button>

          <!-- Content -->
          <div class="container-fluid px-xl-0">
            <div class="row align-items-center mx-xl-0">
              <div class="col-12 col-lg-6 col-xl-5 py-4 py-xl-0 px-xl-0">
                <!-- Image -->
                <img
                  class="img-fluid"
                  src="./assets/img/products/product-7.jpg"
                  alt="..."
                />

                <!-- Button -->
                <a class="btn btn-sm w-100 btn-primary" href="./">
                  More Product Info <i class="fe fe-info ms-2"></i>
                </a>
              </div>
              <div class="col-12 col-lg-6 col-xl-7 py-9 px-md-9">
                <!-- Heading -->
                <h4 class="mb-3">Leather Sneakers</h4>

                <!-- Price -->
                <div class="mb-7">
                  <span class="h5">$85.00</span>
                  <span class="fs-sm">(In Stock)</span>
                </div>

                <!-- Form -->
                <form>
                  <div class="form-group">
                    <!-- Label -->
                    <p>Color: <strong id="modalProductColorCaption">White</strong></p>

                    <!-- Radio -->
                    <div class="mb-8 ms-n1">
                      <div class="form-check form-check-inline form-check-img">
                        <input
                          id="modalProductColorOne"
                          type="radio"
                          class="form-check-input"
                          name="modalProductColor"
                          data-toggle="form-caption"
                          data-target="#modalProductColorCaption"
                          value="White"
                          style="
                            background-image: url(./assets/img/products/product-7.jpg);
                          "
                          checked
                        />
                      </div>
                      <div class="form-check form-check-inline form-check-img">
                        <input
                          id="modalProductColorTwo"
                          type="radio"
                          class="form-check-input"
                          name="modalProductColor"
                          data-toggle="form-caption"
                          data-target="#modalProductColorCaption"
                          value="Black"
                          style="
                            background-image: url(./assets/img/products/product-49.jpg);
                          "
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <!-- Label -->
                    <p>
                      Size:
                      <strong><span id="modalProductSizeCaption">7.5</span> US</strong>
                    </p>

                    <!-- Radio -->
                    <div class="mb-2">
                      <div class="form-check form-check-inline form-check-size mb-2">
                        <input
                          id="modalProductSizeOne"
                          type="radio"
                          class="form-check-input"
                          name="modalProductSize"
                          value="6"
                          data-toggle="form-caption"
                          data-target="#modalProductSizeCaption"
                        />
                        <label class="form-check-label" for="modalProductSizeOne"
                          >6</label
                        >
                      </div>
                      <div class="form-check form-check-inline form-check-size mb-2">
                        <input
                          id="modalProductSizeTwo"
                          type="radio"
                          class="form-check-input"
                          name="modalProductSize"
                          value="6.5"
                          data-toggle="form-caption"
                          data-target="#modalProductSizeCaption"
                          disabled
                        />
                        <label class="form-check-label" for="modalProductSizeTwo"
                          >6.5</label
                        >
                      </div>
                      <div class="form-check form-check-inline form-check-size mb-2">
                        <input
                          id="modalProductSizeThree"
                          type="radio"
                          class="form-check-input"
                          name="modalProductSize"
                          value="7"
                          data-toggle="form-caption"
                          data-target="#modalProductSizeCaption"
                        />
                        <label class="form-check-label" for="modalProductSizeThree"
                          >7</label
                        >
                      </div>
                      <div class="form-check form-check-inline form-check-size mb-2">
                        <input
                          id="modalProductSizeFour"
                          type="radio"
                          class="form-check-input"
                          name="modalProductSize"
                          value="7.5"
                          data-toggle="form-caption"
                          data-target="#modalProductSizeCaption"
                          checked
                        />
                        <label class="form-check-label" for="modalProductSizeFour"
                          >7.5</label
                        >
                      </div>
                      <div class="form-check form-check-inline form-check-size mb-2">
                        <input
                          id="modalProductSizeFive"
                          type="radio"
                          class="form-check-input"
                          name="modalProductSize"
                          value="8"
                          data-toggle="form-caption"
                          data-target="#modalProductSizeCaption"
                        />
                        <label class="form-check-label" for="modalProductSizeFive"
                          >8</label
                        >
                      </div>
                      <div class="form-check form-check-inline form-check-size mb-2">
                        <input
                          id="modalProductSizeSix"
                          type="radio"
                          class="form-check-input"
                          name="modalProductSize"
                          value="8.5"
                          data-toggle="form-caption"
                          data-target="#modalProductSizeCaption"
                        />
                        <label class="form-check-label" for="modalProductSizeSix"
                          >8.5</label
                        >
                      </div>
                      <div class="form-check form-check-inline form-check-size mb-2">
                        <input
                          id="modalProductSizeSeven"
                          type="radio"
                          class="form-check-input"
                          name="modalProductSize"
                          value="9"
                          data-toggle="form-caption"
                          data-target="#modalProductSizeCaption"
                          disabled
                        />
                        <label class="form-check-label" for="modalProductSizeSeven"
                          >9</label
                        >
                      </div>
                      <div class="form-check form-check-inline form-check-size mb-2">
                        <input
                          id="modalProductSizeEight"
                          type="radio"
                          class="form-check-input"
                          name="modalProductSize"
                          value="9.5"
                          data-toggle="form-caption"
                          data-target="#modalProductSizeCaption"
                          disabled
                        />
                        <label class="form-check-label" for="modalProductSizeEight"
                          >9.5</label
                        >
                      </div>
                      <div class="form-check form-check-inline form-check-size mb-2">
                        <input
                          id="modalProductSizeNine"
                          type="radio"
                          class="form-check-input"
                          name="modalProductSize"
                          value="10"
                          data-toggle="form-caption"
                          data-target="#modalProductSizeCaption"
                        />
                        <label class="form-check-label" for="modalProductSizeNine"
                          >10</label
                        >
                      </div>
                      <div class="form-check form-check-inline form-check-size mb-2">
                        <input
                          id="modalProductSizeTen"
                          type="radio"
                          class="form-check-input"
                          name="modalProductSize"
                          value="10.5"
                          data-toggle="form-caption"
                          data-target="#modalProductSizeCaption"
                        />
                        <label class="form-check-label" for="modalProductSizeTen"
                          >10.5</label
                        >
                      </div>
                      <div class="form-check form-check-inline form-check-size mb-2">
                        <input
                          id="modalProductSizeEleven"
                          type="radio"
                          class="form-check-input"
                          name="modalProductSize"
                          value="11"
                          data-toggle="form-caption"
                          data-target="#modalProductSizeCaption"
                        />
                        <label class="form-check-label" for="modalProductSizeEleven"
                          >11</label
                        >
                      </div>
                      <div class="form-check form-check-inline form-check-size mb-2">
                        <input
                          id="modalProductSizeTwelve"
                          type="radio"
                          class="form-check-input"
                          name="modalProductSize"
                          value="12"
                          data-toggle="form-caption"
                          data-target="#modalProductSizeCaption"
                        />
                        <label class="form-check-label" for="modalProductSizeTwelve"
                          >12</label
                        >
                      </div>
                      <div class="form-check form-check-inline form-check-size mb-2">
                        <input
                          id="modalProductSizeThirteen"
                          type="radio"
                          class="form-check-input"
                          name="modalProductSize"
                          value="13"
                          data-toggle="form-caption"
                          data-target="#modalProductSizeCaption"
                        />
                        <label class="form-check-label" for="modalProductSizeThirteen"
                          >13</label
                        >
                      </div>
                      <div class="form-check form-check-inline form-check-size mb-2">
                        <input
                          id="modalProductSizeFourteen"
                          type="radio"
                          class="form-check-input"
                          name="modalProductSize"
                          value="14"
                          data-toggle="form-caption"
                          data-target="#modalProductSizeCaption"
                        />
                        <label class="form-check-label" for="modalProductSizeFourteen"
                          >14</label
                        >
                      </div>
                    </div>
                  </div>
                  <div class="form-group mb-0">
                    <div class="row gx-5">
                      <div class="col-12 col-lg-auto">
                        <!-- Quantity -->
                        <select class="form-select mb-2">
                          <option value="1" selected>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                      <div class="col-12 col-lg">
                        <!-- Submit -->
                        <button type="submit" class="btn w-100 btn-dark mb-2">
                          Add to Cart <i class="fe fe-shopping-cart ms-2"></i>
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
    </div>

    <!-- Search -->
    <div
      id="modalSearch"
      class="offcanvas offcanvas-end"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <!-- Close -->
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
        <i class="fe fe-x" aria-hidden="true"></i>
      </button>

      <!-- Header-->
      <div class="offcanvas-header lh-fixed fs-lg">
        <strong class="mx-auto">Search Products</strong>
      </div>

      <!-- Body: Form -->
      <div class="offcanvas-body">
        <form>
          <div class="form-group">
            <label class="visually-hidden" for="modalSearchCategories">Categories:</label>
            <select id="modalSearchCategories" class="form-select">
              <option selected>All Categories</option>
              <option>Women</option>
              <option>Men</option>
              <option>Accessories</option>
              <option>Beauty</option>
            </select>
          </div>
          <div class="input-group input-group-merge">
            <input class="form-control" type="search" placeholder="Search" />
            <div class="input-group-append">
              <button class="btn btn-outline-border" type="submit">
                <i class="fe fe-search"></i>
              </button>
            </div>
          </div>
        </form>
      </div>

      <!-- Body: Results (add `.d-none` to disable it) -->
      <div class="offcanvas-body border-top fs-sm">
        <!-- Heading -->
        <p>Search Results:</p>

        <!-- Items -->
        <div class="row align-items-center position-relative mb-5">
          <div class="col-4 col-md-3">
            <!-- Image -->
            <img class="img-fluid" src="./assets/img/products/product-5.jpg" alt="..." />
          </div>
          <div class="col position-static">
            <!-- Text -->
            <p class="mb-0 fw-bold">
              <a class="stretched-link text-body" href="./">Leather mid-heel Sandals</a>
              <br />
              <span class="text-muted">$129.00</span>
            </p>
          </div>
        </div>
        <div class="row align-items-center position-relative mb-5">
          <div class="col-4 col-md-3">
            <!-- Image -->
            <img class="img-fluid" src="./assets/img/products/product-6.jpg" alt="..." />
          </div>
          <div class="col position-static">
            <!-- Text -->
            <p class="mb-0 fw-bold">
              <a class="stretched-link text-body" href="./">Cotton floral print Dress</a>
              <br />
              <span class="text-muted">$40.00</span>
            </p>
          </div>
        </div>
        <div class="row align-items-center position-relative mb-5">
          <div class="col-4 col-md-3">
            <!-- Image -->
            <img class="img-fluid" src="./assets/img/products/product-7.jpg" alt="..." />
          </div>
          <div class="col position-static">
            <!-- Text -->
            <p class="mb-0 fw-bold">
              <a class="stretched-link text-body" href="./">Leather Sneakers</a>
              <br />
              <span class="text-primary">$85.00</span>
            </p>
          </div>
        </div>
        <div class="row align-items-center position-relative mb-5">
          <div class="col-4 col-md-3">
            <!-- Image -->
            <img class="img-fluid" src="./assets/img/products/product-8.jpg" alt="..." />
          </div>
          <div class="col position-static">
            <!-- Text -->
            <p class="mb-0 fw-bold">
              <a class="stretched-link text-body" href="./">Cropped cotton Top</a>
              <br />
              <span class="text-muted">$29.00</span>
            </p>
          </div>
        </div>
        <div class="row align-items-center position-relative mb-5">
          <div class="col-4 col-md-3">
            <!-- Image -->
            <img class="img-fluid" src="./assets/img/products/product-9.jpg" alt="..." />
          </div>
          <div class="col position-static">
            <!-- Text -->
            <p class="mb-0 fw-bold">
              <a class="stretched-link text-body" href="./">Floral print midi Dress</a>
              <br />
              <span class="text-muted">$50.00</span>
            </p>
          </div>
        </div>

        <!-- Button -->
        <a class="btn btn-link px-0 text-reset" href="./MyShop">
          View All <i class="fe fe-arrow-right ms-2"></i>
        </a>
      </div>

      <!-- Body: Empty (remove `.d-none` to enable it) -->
      <div class="offcanvas-body d-none">
        <!-- Text -->
        <p class="mb-3 fs-sm text-center">Nothing matches your search</p>

        <!-- Smiley -->
        <p class="mb-0 fs-sm text-center">😞</p>
      </div>
    </div>

    <!-- Shopping Cart -->
    <div
      id="modalShoppingCart"
      class="offcanvas offcanvas-end"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <!-- Full cart (add `.d-none` to disable it) -->

      <!-- Close -->
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
        <i class="fe fe-x" aria-hidden="true"></i>
      </button>

      <!-- Header-->
      <div class="offcanvas-header lh-fixed fs-lg">
        <strong class="mx-auto">Your Cart (2)</strong>
      </div>

      <!-- List group -->
      <ul class="list-group list-group-lg list-group-flush">
        <li class="list-group-item">
          <div class="row align-items-center">
            <div class="col-4">
              <!-- Image -->
              <a href="./">
                <img
                  class="img-fluid"
                  src="./assets/img/products/product-6.jpg"
                  alt="..."
                />
              </a>
            </div>
            <div class="col-8">
              <!-- Title -->
              <p class="fs-sm fw-bold mb-6">
                <a class="text-body" href="./">Cotton floral print Dress</a>
                <br />
                <span class="text-muted">$40.00</span>
              </p>

              <!--Footer -->
              <div class="d-flex align-items-center">
                <!-- Select -->
                <select class="form-select form-select-xxs w-auto">
                  <option value="1">1</option>
                  <option value="1">2</option>
                  <option value="1">3</option>
                </select>

                <!-- Remove -->
                <a class="fs-xs text-gray-400 ms-auto" href="#!">
                  <i class="fe fe-x"></i> Remove
                </a>
              </div>
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row align-items-center">
            <div class="col-4">
              <!-- Image -->
              <a href="./">
                <img
                  class="img-fluid"
                  src="./assets/img/products/product-10.jpg"
                  alt="..."
                />
              </a>
            </div>
            <div class="col-8">
              <!-- Title -->
              <p class="fs-sm fw-bold mb-6">
                <a class="text-body" href="./">Suede cross body Bag</a> <br />
                <span class="text-muted">$49.00</span>
              </p>

              <!--Footer -->
              <div class="d-flex align-items-center">
                <!-- Select -->
                <select class="form-select form-select-xxs w-auto">
                  <option value="1">1</option>
                  <option value="1">2</option>
                  <option value="1">3</option>
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
      <div class="offcanvas-footer justify-between lh-fixed fs-sm bg-light mt-auto">
        <strong>Subtotal</strong> <strong class="ms-auto">$89.00</strong>
      </div>

      <!-- Buttons -->
      <div class="offcanvas-body">
        <RouterLink to="/views/MyCheckout" class="logo">
          <a class="btn w-100 btn-dark" href="./MyCheckout">Continue to Checkout</a>
        </RouterLink>
        <RouterLink to="/views/MyCart" class="logo">
          <a class="btn w-100 btn-outline-dark mt-2" href="./views/MyCart">View Cart</a>
        </RouterLink>
      </div>

      <!-- Empty cart (remove `.d-none` to enable it) -->
      <div class="d-none">
        <!-- Close -->
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i class="fe fe-x" aria-hidden="true"></i>
        </button>

        <!-- Header-->
        <div class="offcanvas-header lh-fixed fs-lg">
          <strong class="mx-auto">Your Cart (0)</strong>
        </div>

        <!-- Body -->
        <div class="offcanvas-body flex-grow-0 my-auto">
          <!-- Heading -->
          <h6 class="mb-7 text-center">Your cart is empty 😞</h6>

          <!-- Button -->
          <a class="btn w-100 btn-outline-dark" href="#!"> Continue Shopping </a>
        </div>
      </div>
    </div>

    <!-- Sidebar -->
    <div
      id="modalSidebar"
      class="offcanvas offcanvas-end"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <!-- Close -->
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
        <i class="fe fe-x" aria-hidden="true"></i>
      </button>

      <!-- Body -->
      <div class="offcanvas-body px-10 my-auto">
        <!-- Nav -->
        <ul id="sidebarNav" class="nav nav-vertical nav-unstyled fs-2">
          <li class="nav-item">
            <!-- Toggle -->
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="collapse"
              href="#sidebarHome"
            >
              Home
            </a>

            <!-- Collapse -->
            <div id="sidebarHome" class="collapse" data-bs-parent="#sidebarNav">
              <ul class="list-styled fs-lg py-3 mb-0">
                <li class="list-styled-item">
                  <a class="list-styled-link" href="./">Default</a>
                </li>
                <li class="list-styled-item">
                  <a class="list-styled-link" href="./">Classic</a>
                </li>
                <li class="list-styled-item">
                  <a class="list-styled-link" href="./">Fashion</a>
                </li>
                <li class="list-styled-item">
                  <a class="list-styled-link" href="./">Boxed</a>
                </li>
                <li class="list-styled-item">
                  <a class="list-styled-link" href="./">Simple</a>
                </li>
                <li class="list-styled-item">
                  <a class="list-styled-link" href="./">Asymmetric</a>
                </li>
                <li class="list-styled-item">
                  <a class="list-styled-link" href="./">Sidenav</a>
                </li>
                <li class="list-styled-item">
                  <a class="list-styled-link" href="./">Landing</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <!-- Toggle -->
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="collapse"
              href="#sidebarCatalog"
            >
              Catalog
            </a>

            <!-- Collapse -->
            <div id="sidebarCatalog" class="collapse" data-bs-parent="#sidebarNav">
              <div class="row">
                <div class="col-12 py-3">
                  <!-- Heading -->
                  <h6 class="mb-5 fw-bold">Clothing</h6>

                  <!-- Links -->
                  <ul class="list-styled fs-lg py-3">
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./MyShop">All Clothing</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./MyShop">Blouses & Shirts</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./MyShop">Coats & Jackets</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./MyShop">Dresses</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./MyShop">Hoodies & Sweats</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./MyShop">Denim</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./MyShop">Jeans</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./MyShop">Jumpers & Cardigans</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./MyShop">Leggings</a>
                    </li>
                  </ul>
                </div>
                <div class="col-12 py-3">
                  <!-- Heading -->
                  <h6 class="mb-5 fw-bold">Shoes & Boots</h6>

                  <!-- Links -->
                  <ul class="list-styled fs-lg">
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./MyShop">All Shoes & Boots</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./MyShop">Branded Shoes</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./MyShop">Boots</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./MyShop">Heels</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./MyShop">Trainers</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./MyShop">Sandals</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./MyShop">Shoes</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./MyShop">Wide Fit Shoes</a>
                    </li>
                  </ul>
                </div>
                <div class="col-12 py-3">
                  <!-- Heading -->
                  <h6 class="mb-5 fw-bold">Bags & Accessories</h6>

                  <!-- Links -->
                  <ul class="list-styled fs-lg">
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./MyShop"
                        >All Bags & Accessories</a
                      >
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./MyShop">Accessories</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./MyShop">Bags & Purses</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./MyShop">Luggage</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./MyShop">Belts</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./MyShop">Hats</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./MyShop">Hair Accessories</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./MyShop">Jewellery</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./MyShop">Travel Accessories</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <!-- Toggle -->
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="collapse"
              href="#sidebarShop"
            >
              Shop
            </a>

            <!-- Collapse -->
            <div id="sidebarShop" class="collapse" data-bs-parent="#sidebarNav">
              <div class="row">
                <div class="col-12 py-3">
                  <!-- Heading -->
                  <h6 class="mb-5">Shop</h6>

                  <!-- Links -->
                  <ul class="list-styled fs-lg">
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./MyShop">Default</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./">Topbar</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./">Collapse</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./">Simple</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./">Masonry</a>
                    </li>
                  </ul>
                </div>
                <div class="col-12 py-3">
                  <!-- Heading -->
                  <h6 class="mb-5">Product</h6>

                  <!-- Links -->
                  <ul class="list-styled fs-lg">
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./">Default</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./">Images Left</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./">Image Grid</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./">Image Slider</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./">Images Stacked</a>
                    </li>
                  </ul>
                </div>
                <div class="col-12 py-3">
                  <!-- Heading -->
                  <h6 class="mb-5">Support</h6>

                  <!-- Links -->
                  <ul class="list-styled fs-lg">
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./MyCart">Shopping Cart</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./MyCheckout">Checkout</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./">Order Completed</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./">Shipping & Returns</a>
                    </li>
                  </ul>
                </div>
                <div class="col-12 py-3">
                  <!-- Heading -->
                  <h6 class="mb-5">Account</h6>

                  <!-- Links -->
                  <ul class="list-styled fs-lg">
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./account-order.html">Order</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./views/MyOrders">Orders</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./views/MyWishlist">Wishlist</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./">Personal Info</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./">Addresses</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./">Addresses: New</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./">Payment</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./">Payment: New</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./">Payment: Choose</a>
                    </li>
                    <li class="list-styled-item">
                      <a class="list-styled-link" href="./">Auth</a>
                    </li>
                  </ul>
                </div>
                <div class="col-12 py-3">
                  <!-- Heading -->
                  <h6 class="mb-5">Modals</h6>

                  <!-- Links -->
                  <ul class="list-styled fs-lg">
                    <li class="list-styled-item">
                      <a
                        class="list-styled-link"
                        data-bs-toggle="modal"
                        href="#modalNewsletterHorizontal"
                      >
                        Newsletter: Horizontal
                      </a>
                    </li>
                    <li class="list-styled-item">
                      <a
                        class="list-styled-link"
                        data-bs-toggle="modal"
                        href="#modalNewsletterVertical"
                      >
                        Newsletter: Vertical
                      </a>
                    </li>
                    <li class="list-styled-item">
                      <a
                        class="list-styled-link"
                        data-bs-toggle="modal"
                        href="#modalProduct"
                      >
                        Product
                      </a>
                    </li>
                    <li class="list-styled-item">
                      <a
                        class="list-styled-link"
                        data-bs-toggle="offcanvas"
                        href="#modalSearch"
                      >
                        Search
                      </a>
                    </li>
                    <li class="list-styled-item">
                      <a
                        class="list-styled-link"
                        data-bs-toggle="offcanvas"
                        href="#modalShoppingCart"
                      >
                        Shopping Cart
                      </a>
                    </li>
                    <li class="list-styled-item">
                      <a
                        class="list-styled-link"
                        data-bs-toggle="modal"
                        href="#modalSizeChart"
                      >
                        Size Chart
                      </a>
                    </li>
                    <li class="list-styled-item">
                      <a
                        class="list-styled-link"
                        data-bs-toggle="modal"
                        href="#modalWaitList"
                      >
                        Wait List
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./">Docs</a>
          </li>
        </ul>
      </div>

      <!-- Body -->
      <div class="moda-body px-10 py-9">
        <!-- Social links -->
        <ul class="list-inline">
          <li class="list-inline-item">
            <a class="text-gray-350" href="#!">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="text-gray-350" href="#!">
              <i class="fab fa-youtube"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="text-gray-350" href="#!">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="text-gray-350" href="#!">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="text-gray-350" href="#!">
              <i class="fab fa-medium-m"></i>
            </a>
          </li>
        </ul>

        <!-- Footer -->
        <div class="fs-xxs text-gray-350">
          © 2019 All rights reserved. Designed by Unvab.
        </div>
      </div>
    </div>

    <!-- Size Chart -->
    <div
      id="modalSizeChart"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <!-- Close -->
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fe fe-x" aria-hidden="true"></i>
          </button>

          <!-- Header-->
          <div class="modal-header lh-fixed fs-lg">
            <strong class="mx-auto">Size Chart</strong>
          </div>

          <!-- Body -->
          <div class="modal-body border-bottom">
            <!-- Header -->
            <div class="d-flex mb-7">
              <!-- Heading -->
              <h5 class="mb-0">Clothing</h5>

              <!-- Inputs -->
              <div class="ms-auto">
                <!-- IN -->
                <input
                  id="inOne"
                  type="radio"
                  class="btn-check"
                  name="modalSizeChartUnitOne"
                  checked
                />
                <label
                  class="btn btn-xxs btn-circle btn-outline-dark fs-xxxs rounded-0"
                  for="inOne"
                  >IN</label
                >

                <!-- CM -->
                <input
                  id="cmOne"
                  type="radio"
                  class="btn-check"
                  name="modalSizeChartUnitOne"
                />
                <label
                  class="btn btn-xxs btn-circle btn-outline-dark fs-xxxs rounded-0"
                  for="cmOne"
                  >CM</label
                >
              </div>
            </div>

            <!-- Table -->
            <div class="table-responsive">
              <table class="table table-bordered table-sm table-hover mb-0">
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>US</th>
                    <th>Bust</th>
                    <th>Waist</th>
                    <th>Hips</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>XS</td>
                    <td>2</td>
                    <td>32</td>
                    <td>24 - 25</td>
                    <td>33 - 34</td>
                  </tr>
                  <tr>
                    <td>S</td>
                    <td>4</td>
                    <td>34 - 35</td>
                    <td>26 - 27</td>
                    <td>35 - 26</td>
                  </tr>
                  <tr>
                    <td>M</td>
                    <td>6</td>
                    <td>36 - 37</td>
                    <td>28 - 29</td>
                    <td>38 - 40</td>
                  </tr>
                  <tr>
                    <td>L</td>
                    <td>8</td>
                    <td>38 - 29</td>
                    <td>30 - 31</td>
                    <td>42 - 44</td>
                  </tr>
                  <tr>
                    <td>XL</td>
                    <td>10</td>
                    <td>40 - 41</td>
                    <td>32 - 33</td>
                    <td>45 - 47</td>
                  </tr>
                  <tr>
                    <td>XXL</td>
                    <td>12</td>
                    <td>42 - 43</td>
                    <td>34 - 35</td>
                    <td>48 - 50</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Body -->
          <div class="modal-body">
            <!-- Header -->
            <div class="d-flex mb-7">
              <!-- Heading -->
              <h5 class="mb-0">Shoes</h5>

              <!-- Inputs -->
              <div class="ms-auto">
                <!-- IN -->
                <input
                  id="inTwo"
                  type="radio"
                  class="btn-check"
                  name="modalSizeChartUnitTwo"
                  checked
                />
                <label
                  class="btn btn-xxs btn-circle btn-outline-dark fs-xxxs rounded-0"
                  for="inTwo"
                  >IN</label
                >

                <!-- CM -->
                <input
                  id="cmTwo"
                  type="radio"
                  class="btn-check"
                  name="modalSizeChartUnitTwo"
                />
                <label
                  class="btn btn-xxs btn-circle btn-outline-dark fs-xxxs rounded-0"
                  for="cmTwo"
                  >CM</label
                >
              </div>
            </div>

            <!-- Tables -->
            <div class="row">
              <div class="col-12 col-lg-6">
                <!-- Table -->
                <div class="table-responsive">
                  <table class="table table-bordered table-sm table-hover mb-lg-0">
                    <thead>
                      <tr>
                        <th>Size</th>
                        <th>US</th>
                        <th>Foot Length</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>36</td>
                        <td>5</td>
                        <td>22.8</td>
                      </tr>
                      <tr>
                        <td>26.5</td>
                        <td>5.5</td>
                        <td>23.1</td>
                      </tr>
                      <tr>
                        <td>37</td>
                        <td>6</td>
                        <td>23.5</td>
                      </tr>
                      <tr>
                        <td>37.5</td>
                        <td>6.</td>
                        <td>23.5</td>
                      </tr>
                      <tr>
                        <td>38</td>
                        <td>7</td>
                        <td>24.1</td>
                      </tr>
                      <tr>
                        <td>38.5</td>
                        <td>7.5</td>
                        <td>24.5</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <!-- Table -->
                <div class="table-responsive">
                  <table class="table table-bordered table-sm table-hover mb-0">
                    <thead>
                      <tr>
                        <th>Size</th>
                        <th>US</th>
                        <th>Foot Length</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>36</td>
                        <td>5</td>
                        <td>22.8</td>
                      </tr>
                      <tr>
                        <td>39</td>
                        <td>8</td>
                        <td>24.1</td>
                      </tr>
                      <tr>
                        <td>40</td>
                        <td>9</td>
                        <td>25.4</td>
                      </tr>
                      <tr>
                        <td>40.5</td>
                        <td>9.5</td>
                        <td>25.7</td>
                      </tr>
                      <tr>
                        <td>41</td>
                        <td>10</td>
                        <td>26.0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Wait List -->
    <div
      id="modalWaitList"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <!-- Close -->
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fe fe-x" aria-hidden="true"></i>
          </button>

          <!-- Header-->
          <div class="modal-header lh-fixed fs-lg">
            <strong class="mx-auto">Wait List</strong>
          </div>

          <!-- Body -->
          <div class="modal-body">
            <div class="row mb-6">
              <div class="col-12 col-md-3">
                <!-- Image -->
                <a href="./">
                  <img
                    class="img-fluid mb-7 mb-md-0"
                    src="./assets/img/products/product-6.jpg"
                    alt="..."
                  />
                </a>
              </div>
              <div class="col-12 col-md-9">
                <!-- Label -->
                <p>
                  <a class="fw-bold text-body" href="./">Cotton floral print Dress</a>
                </p>

                <!-- Radio -->
                <div class="form-check form-check-inline form-check-size mb-2">
                  <input
                    id="modalWaitListSizeOne"
                    type="radio"
                    class="form-check-input"
                    name="modalWaitListSize"
                    value="6"
                    data-toggle="form-caption"
                    data-target="#modalWaitListSizeCaption"
                  />
                  <label class="form-check-label" for="modalWaitListSizeOne">3XS</label>
                </div>
                <div class="form-check form-check-inline form-check-size mb-2">
                  <input
                    id="modalWaitListSizeTwo"
                    type="radio"
                    class="form-check-input"
                    name="modalWaitListSize"
                    value="6.5"
                    data-toggle="form-caption"
                    data-target="#modalWaitListSizeCaption"
                  />
                  <label class="form-check-label" for="modalWaitListSizeTwo">2XS</label>
                </div>
                <div class="form-check form-check-inline form-check-size mb-2">
                  <input
                    id="modalWaitListSizeThree"
                    type="radio"
                    class="form-check-input"
                    name="modalWaitListSize"
                    value="7"
                    data-toggle="form-caption"
                    data-target="#modalWaitListSizeCaption"
                  />
                  <label class="form-check-label" for="modalWaitListSizeThree">XS</label>
                </div>
                <div class="form-check form-check-inline form-check-size mb-2">
                  <input
                    id="modalWaitListSizeFour"
                    type="radio"
                    class="form-check-input"
                    name="modalWaitListSize"
                    value="7.5"
                    data-toggle="form-caption"
                    data-target="#modalWaitListSizeCaption"
                    checked
                  />
                  <label class="form-check-label" for="modalWaitListSizeFour">S</label>
                </div>
                <div class="form-check form-check-inline form-check-size mb-2">
                  <input
                    id="modalWaitListSizeFive"
                    type="radio"
                    class="form-check-input"
                    name="modalWaitListSize"
                    value="8"
                    data-toggle="form-caption"
                    data-target="#modalWaitListSizeCaption"
                  />
                  <label class="form-check-label" for="modalWaitListSizeFive">M</label>
                </div>
                <div class="form-check form-check-inline form-check-size mb-2">
                  <input
                    id="modalWaitListSizeSix"
                    type="radio"
                    class="form-check-input"
                    name="modalWaitListSize"
                    value="8.5"
                    data-toggle="form-caption"
                    data-target="#modalWaitListSizeCaption"
                  />
                  <label class="form-check-label" for="modalWaitListSizeSix">LG</label>
                </div>
                <div class="form-check form-check-inline form-check-size mb-2">
                  <input
                    id="modalWaitListSizeSeven"
                    type="radio"
                    class="form-check-input"
                    name="modalWaitListSize"
                    value="9"
                    data-toggle="form-caption"
                    data-target="#modalWaitListSizeCaption"
                  />
                  <label class="form-check-label" for="modalWaitListSizeSeven">XL</label>
                </div>
                <div class="form-check form-check-inline form-check-size mb-2">
                  <input
                    id="modalWaitListSizeEight"
                    type="radio"
                    class="form-check-input"
                    name="modalWaitListSize"
                    value="9.5"
                    data-toggle="form-caption"
                    data-target="#modalWaitListSizeCaption"
                  />
                  <label class="form-check-label" for="modalWaitListSizeEight">2XL</label>
                </div>
                <div class="form-check form-check-inline form-check-size mb-2">
                  <input
                    id="modalWaitListSizeNine"
                    type="radio"
                    class="form-check-input"
                    name="modalWaitListSize"
                    value="10"
                    data-toggle="form-caption"
                    data-target="#modalWaitListSizeCaption"
                  />
                  <label class="form-check-label" for="modalWaitListSizeNine">3XL</label>
                </div>
                <div class="form-check form-check-inline form-check-size mb-2">
                  <input
                    id="modalWaitListSizeTen"
                    type="radio"
                    class="form-check-input"
                    name="modalWaitListSize"
                    value="10.5"
                    data-toggle="form-caption"
                    data-target="#modalWaitListSizeCaption"
                  />
                  <label class="form-check-label" for="modalWaitListSizeTen">4XL</label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <!-- Text -->
                <p class="fs-sm text-center text-gray-500">
                  Justo ut diam erat hendrerit morbi porttitor, per eu curabitur diam
                  sociis.
                </p>
              </div>
            </div>
            <div class="row gx-5 mb-2">
              <div class="col-12 col-md-6">
                <!-- Form group -->
                <div class="form-group">
                  <label class="visually-hidden" for="listName">Your Name</label>
                  <input
                    id="listName"
                    class="form-control"
                    type="text"
                    placeholder="Your Name *"
                    required
                  />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <!-- Form group -->
                <div class="form-group">
                  <label class="visually-hidden" for="listEmail">Your Name</label>
                  <input
                    id="listEmail"
                    class="form-control"
                    type="email"
                    placeholder="Your Email *"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 text-center">
                <!-- Button -->
                <button class="btn btn-dark" type="submit">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- NAVBAR -->
    <div class="navbar navbar-topbar navbar-expand-xl navbar-light bg-light">
      <div class="container">
        <!-- Promo -->
        <div class="me-xl-8">
          <i class="fe fe-truck me-2"></i>
          <span class="heading-xxxs">Free shipping worldwide</span>
        </div>

        <!-- Toggler -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#topbarCollapse"
          aria-controls="topbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Collapse -->
        <div id="topbarCollapse" class="collapse navbar-collapse">
          <!-- Nav -->
          <ul class="nav nav-divided navbar-nav me-auto">
            <li class="nav-item dropdown" style="display: none">
              <!-- Toggle -->
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">
                <img class="mb-1 me-1" src="./assets/img/flags/usa.svg" alt="..." />
                United States
              </a>

              <!-- Menu -->
              <div class="dropdown-menu min-w-0">
                <a class="dropdown-item" href="#!">
                  <img
                    class="mb-1 me-2"
                    src="./assets/img/flags/usa.svg"
                    alt="USA"
                  />United States
                </a>
                <a class="dropdown-item" href="#!">
                  <img
                    class="mb-1 me-2"
                    src="./assets/img/flags/canada.svg"
                    alt="Canada"
                  />Canada
                </a>
                <a class="dropdown-item" href="#!">
                  <img
                    class="mb-1 me-2"
                    src="./assets/img/flags/germany.svg"
                    alt="Germany"
                  />Germany
                </a>
              </div>
            </li>
            <li class="nav-item dropdown" style="display: none">
              <!-- Toggle -->
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#"
                >USD</a
              >

              <!-- Menu -->
              <div class="dropdown-menu min-w-0">
                <a class="dropdown-item" href="#!">USD</a>
                <a class="dropdown-item" href="#!">EUR</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <!-- Toggle -->
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#"></a>

              <!-- Menu -->
              <div class="dropdown-menu min-w-0">
                <a class="dropdown-item" href="#">English</a>
                <a class="dropdown-item" href="#">French</a>
                <a class="dropdown-item" href="#">German</a>
              </div>
            </li>
          </ul>

          <!-- Nav -->
          <ul class="nav navbar-nav me-8">
            <li class="nav-item">
              <RouterLink to="/views/auth/login" class="logo">
                <a class="nav-link" href="./views/auth/login">Log In</a>
              </RouterLink>
            </li>
            <RouterLink to="/views/auth/signup" class="logo">
              <a class="nav-link" href="./views/auth/Sign Up" style="font-weight: bold"
                >회원가입</a
              >
            </RouterLink>
          </ul>

          <!-- Nav -->
          <ul class="nav navbar-nav flex-row">
            <li class="nav-item">
              <a class="nav-link text-gray-350" href="#!">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li class="nav-item ms-xl-n4">
              <a class="nav-link text-gray-350" href="#!">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="nav-item ms-xl-n4">
              <a class="nav-link text-gray-350" href="#!">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li class="nav-item ms-xl-n4">
              <a class="nav-link text-gray-350" href="#!">
                <i class="fab fa-medium"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container">
        <!-- Brand -->
        <a class="navbar-brand" href="/views/MyMain"> Lux ON </a>

        <!-- Toggler -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Collapse -->
        <div id="navbarCollapse" class="collapse navbar-collapse">
          <!-- Nav -->
          <ul class="navbar-nav mx-auto">
            <li class="nav-item dropdown"></li>
            <li class="nav-item dropdown position-static">
              <!-- Toggle -->
              <a class="nav-link" data-bs-toggle="dropdown" href="#">Catalog</a>

              <!-- Menu -->
              <div class="dropdown-menu w-100">
                <!-- Tabs -->
                <div class="mb-2 mb-lg-0 border-bottom-lg" style="display: none">
                  <div class="container">
                    <div class="row">
                      <div class="col-12">
                        <!-- Nav -->
                        <nav
                          class="nav nav-tabs nav-overflow fs-xs border-bottom border-bottom-lg-0"
                        >
                          <a
                            id="a3"
                            class="nav-link text-uppercase active"
                            data-bs-toggle="tab"
                            href="#navTab"
                            @mouseover="doMouseOver(3)"
                            @focus="doSth"
                          >
                            Women
                          </a>
                          <a
                            id="a5"
                            class="nav-link text-uppercase"
                            data-bs-toggle="tab"
                            href="#navTab"
                            @mouseover="doMouseOver(5)"
                            @focus="doSth"
                          >
                            Men
                          </a>
                          <a
                            id="a6"
                            class="nav-link text-uppercase"
                            data-bs-toggle="tab"
                            href="#navTab"
                            @mouseover="doMouseOver(6)"
                            @focus="doSth"
                          >
                            Accessories
                          </a>
                          <a
                            id="a7"
                            class="nav-link text-uppercase"
                            data-bs-toggle="tab"
                            href="#navTab"
                            @mouseover="doMouseOver(7)"
                            @focus="doSth"
                          >
                            Beauty
                          </a>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Tab content -->
                <div
                  v-for="(category, i) in categoryList.data"
                  v-show="true"
                  :key="i"
                  class="card card-lg"
                >
                  <div
                    :id="`${category.id}`"
                    ref="refHead"
                    class="card-body"
                    :style="`${categroyShow}`"
                  >
                    <div class="tab-content" style="display: block">
                      <div id="navTab" class="tab-pane fade show active">
                        <div class="container">
                          <div class="row">
                            <div
                              v-for="(
                                categorySecondDtoList, j
                              ) in category.categorySecondDtoList"
                              :key="j"
                              class="col-6 col-md"
                            >
                              <!-- Heading -->
                              <div
                                class="mb-5 fw-bold"
                                style="font-weight: bold !important"
                              >
                                {{ categorySecondDtoList.categoryName }}
                              </div>

                              <!-- Links -->
                              <ul
                                class="list-styled mb-6 mb-md-0 fs-sm"
                                style="display: none"
                              >
                                <li
                                  v-for="(
                                    categoryThirdDtoList, k
                                  ) in categorySecondDtoList.categoryThirdDtoList"
                                  :key="k"
                                  style="padding-bottom: 15px"
                                  class="list-styled-item"
                                >
                                  <a class="list-styled-link" href="./MyShop"> </a>
                                </li>
                              </ul>
                            </div>
                            <div class="col-4 d-none d-lg-block">
                              <!-- Card -->
                              <div class="card">
                                <!-- Image -->
                                <!-- <img
                                  class="card-img"
                                  style="height: 250px"
                                  src="./assets/img/products/product-109.jpg"
                                  alt="..."
                                /> -->

                                <!-- Overlay -->
                                <div
                                  class="card-img-overlay bg-dark-0 bg-hover align-items-center"
                                >
                                  <div class="text-center">
                                    <a
                                      class="btn btn-white stretched-link"
                                      href="./MyShop"
                                    >
                                      {{ category.categoryName }}
                                      <i class="fe fe-arrow-right ms-2"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link"
                data-bs-toggle="dropdown"
                href="#"
                style="margin-left: 100px; font-weight: bold"
                >고객지원</a
              >

              <!-- Menu -->
              <div class="dropdown-menu" style="min-width: 650px">
                <div class="card card-lg">
                  <div class="card-body">
                    <div class="row">
                      <div class="col">
                        <!-- Heading -->
                        <div class="mb-5 fw-bold">Support</div>

                        <!-- Links -->
                        <ul class="list-styled mb-7 fs-sm">
                          <li class="list-styled-item">
                            <a class="list-styled-link" href="./MyCart">Shopping Cart</a>
                          </li>
                          <li class="list-styled-item">
                            <a class="list-styled-link" href="./MyCheckout">Checkout</a>
                          </li>
                          <li class="list-styled-item">
                            <a class="list-styled-link" href="./order-completed.html"
                              >Order Completed</a
                            >
                          </li>
                          <li class="list-styled-item">
                            <a class="list-styled-link" href="./shipping-and-returns.html"
                              >Shipping & Returns</a
                            >
                          </li>
                        </ul>

                        <!-- Heading -->
                        <div class="mb-5 fw-bold">Account</div>

                        <!-- Links -->
                        <ul class="list-styled fs-sm">
                          <li class="list-styled-item">
                            <a class="list-styled-link" href="./account-order.html"
                              >Order</a
                            >
                          </li>
                          <li class="list-styled-item">
                            <a class="list-styled-link" href="./MyOrders">Orders</a>
                          </li>
                          <li class="list-styled-item">
                            <a class="list-styled-link" href="./views/MyWishlist"
                              >Wishlist</a
                            >
                          </li>
                          <li class="list-styled-item">
                            <RouterLink to="/views/MyInfo" class="logo">
                              <a class="list-styled-link" href="./MyInfo"
                                >Personal Info</a
                              >
                            </RouterLink>
                          </li>
                          <li class="list-styled-item">
                            <a class="list-styled-link" href="./account-address.html"
                              >Addresses</a
                            >
                          </li>
                          <li class="list-styled-item">
                            <a class="list-styled-link" href="./account-address-edit.html"
                              >Addresses: New</a
                            >
                          </li>
                        </ul>
                      </div>
                      <div class="col">
                        <!-- Links -->
                        <ul class="list-styled mb-7 fs-sm">
                          <li class="list-styled-item">
                            <a class="list-styled-link" href="./account-payment.html"
                              >Payment</a
                            >
                          </li>
                          <li class="list-styled-item">
                            <a class="list-styled-link" href="./account-payment-edit.html"
                              >Payment: New</a
                            >
                          </li>
                          <li class="list-styled-item">
                            <a
                              class="list-styled-link"
                              href="./account-payment-choose.html"
                              >Payment: Choose</a
                            >
                          </li>
                          <li class="list-styled-item">
                            <a class="list-styled-link" href="./auth.html">Auth</a>
                          </li>
                        </ul>

                        <!-- Heading -->
                        <div class="mb-5 fw-bold">Modals</div>

                        <!-- Links -->
                        <ul class="list-styled fs-sm">
                          <li class="list-styled-item">
                            <a
                              class="list-styled-link"
                              data-bs-toggle="modal"
                              href="#modalNewsletterHorizontal"
                            >
                              Newsletter: Horizontal
                            </a>
                          </li>
                          <li class="list-styled-item">
                            <a
                              class="list-styled-link"
                              data-bs-toggle="modal"
                              href="#modalNewsletterVertical"
                            >
                              Newsletter: Vertical
                            </a>
                          </li>
                          <li class="list-styled-item">
                            <a
                              class="list-styled-link"
                              data-bs-toggle="modal"
                              href="#modalProduct"
                            >
                              Product
                            </a>
                          </li>
                          <li class="list-styled-item">
                            <a
                              class="list-styled-link"
                              data-bs-toggle="offcanvas"
                              href="#modalSearch"
                            >
                              Search
                            </a>
                          </li>
                          <li class="list-styled-item">
                            <a
                              class="list-styled-link"
                              data-bs-toggle="offcanvas"
                              href="#modalShoppingCart"
                            >
                              Shopping Cart
                            </a>
                          </li>
                          <li class="list-styled-item">
                            <a
                              class="list-styled-link"
                              data-bs-toggle="modal"
                              href="#modalSizeChart"
                            >
                              Size Chart
                            </a>
                          </li>
                          <li class="list-styled-item">
                            <a
                              class="list-styled-link"
                              data-bs-toggle="modal"
                              href="#modalWaitList"
                            >
                              Wait List
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="docs/getting-started.html">Docs</a>
            </li> -->
          </ul>

          <!-- Nav -->
          <ul class="navbar-nav flex-row">
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="offcanvas" href="#modalSearch">
                <i class="fe fe-search"></i>
              </a>
            </li>
            <li class="nav-item ms-lg-n4">
              <a class="nav-link" href="./MyOrders">
                <i class="fe fe-user"></i>
              </a>
            </li>
            <li class="nav-item ms-lg-n4">
              <a class="nav-link" href="./MyWishlist">
                <i class="fe fe-heart"></i>
              </a>
            </li>
            <li class="nav-item ms-lg-n4">
              <a class="nav-link" data-bs-toggle="offcanvas" href="#modalShoppingCart">
                <span data-cart-items="2">
                  <i class="fe fe-shopping-cart"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- PROMO -->
    <div class="py-3 bg-dark bg-pattern mb-4">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <!-- Text -->
            <div class="text-center text-white">
              <span class="heading-xxs letter-spacing-xl">
                <!-- ⚡️ Happy Holiday Deals on Everything ⚡️ -->
                ⚡️ Lux On에 오신걸 환영합니다! ⚡️
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useApi } from '/@src/composable/useApi'
const api = useApi()

export default {
  data() {
    return {
      categoryList: [],
    }
  },
  created() {
    this.getCategoryList()
  },
  methods: {
    async getCategoryList() {
      this.categoryList = await api.get('/product/categories', {})
      console.log(this.categoryList)
    },
    doMouseOver(input) {
      if (this.$refs.refHead.id == input) {
        this.$refs.refHead.display = 'block'
      }
    },
  },
}
</script>

<style></style>

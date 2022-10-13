<template>
  <!-- CONTENT -->
  <section class="py-11">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4 col-lg-3">
          <!-- Filters -->
          <form class="mb-10 mb-md-0">
            <ul id="filterNav" class="nav nav-vertical">
              <li v-for="(category, i) in categoryList.data" :key="i" class="nav-item">
                <!-- Toggle -->
                <a
                  class="nav-link dropdown-toggle fs-lg text-reset border-bottom mb-6"
                  data-bs-toggle="collapse"
                  href="#categoryCollapse"
                >
                  {{ category.categoryName }}
                </a>

                <!-- Collapse -->
                <div id="categoryCollapse" class="collapse show">
                  <div class="form-group">
                    <ul id="productsNav" class="list-styled mb-0">
                      <li
                        v-for="(
                          categorySecondDtoList, j
                        ) in category.categorySecondDtoList"
                        :key="j"
                        class="list-styled-item"
                      >
                        <a class="list-styled-link" href="#">
                          {{ categorySecondDtoList.categoryName }}
                        </a>

                        <!-- Collapse -->
                        <div
                          id="blousesCollapse"
                          class="collapse"
                          data-bs-parent="#productsNav"
                        >
                          <div class="py-4 ps-5">
                            <div
                              v-for="(
                                categoryThirdDtoList, k
                              ) in categorySecondDtoList.categoryThirdDtoList"
                              :key="k"
                              class="form-check mb-3"
                            >
                              <input
                                id="blousesOne"
                                class="form-check-input"
                                type="checkbox"
                              />
                              <label class="form-check-label" for="blousesOne">
                                {{ categoryThirdDtoList.categoryName }}
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                id="blousesFour"
                                class="form-check-input"
                                type="checkbox"
                              />
                              <label class="form-check-label" for="blousesFour">
                                Women Plus Tops & Tees
                              </label>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="list-styled-item">
                        <!-- Toggle -->
                        <a
                          class="list-styled-link"
                          data-bs-toggle="collapse"
                          href="#coatsCollapse"
                        >
                          Coats and Jackets
                        </a>

                        <!-- Collapse -->
                        <div
                          id="coatsCollapse"
                          class="collapse"
                          data-bs-parent="#productsNav"
                        >
                          <div class="py-4 ps-5">
                            <div class="form-check mb-3">
                              <input
                                id="coatsOne"
                                class="form-check-input"
                                type="checkbox"
                              />
                              <label class="form-check-label" for="coatsOne">
                                Coats, Jackets & Vests
                              </label>
                            </div>
                            <div class="form-check mb-3">
                              <input
                                id="coatsTwo"
                                class="form-check-input"
                                type="checkbox"
                              />
                              <label class="form-check-label" for="coatsTwo">
                                Down Jackets & Parkas
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                id="coatsThree"
                                class="form-check-input"
                                type="checkbox"
                              />
                              <label class="form-check-label" for="coatsThree">
                                Wool & Pea Coats Plus-Size
                              </label>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="list-styled-item">
                        <!-- Toggle -->
                        <a
                          class="list-styled-link"
                          data-bs-toggle="collapse"
                          href="#dressesCollapse"
                          aria-expanded="true"
                        >
                          Dresses
                        </a>

                        <!-- Collapse -->
                        <div
                          id="dressesCollapse"
                          class="collapse show"
                          data-bs-parent="#productsNav"
                        >
                          <div class="py-4 ps-5">
                            <div class="form-check mb-3">
                              <input
                                id="dressesOne"
                                class="form-check-input"
                                type="checkbox"
                              />
                              <label class="form-check-label" for="dressesOne">
                                A-line Dresses
                              </label>
                            </div>
                            <div class="form-check mb-3">
                              <input
                                id="dressesTwo"
                                class="form-check-input"
                                type="checkbox"
                                checked
                              />
                              <label class="form-check-label" for="dressesTwo">
                                Shift Dresses
                              </label>
                            </div>
                            <div class="form-check mb-3">
                              <input
                                id="dressesThree"
                                class="form-check-input"
                                type="checkbox"
                              />
                              <label class="form-check-label" for="dressesThree">
                                Wrap Dresses
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                id="dressesFour"
                                class="form-check-input"
                                type="checkbox"
                              />
                              <label class="form-check-label" for="dressesFour">
                                Maxi Dresses
                              </label>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="list-styled-item">
                        <!-- Toggle -->
                        <a
                          class="list-styled-link"
                          data-bs-toggle="collapse"
                          href="#hoodiesCollapse"
                        >
                          Hoodies and Sweats
                        </a>

                        <!-- Collapse -->
                        <div
                          id="hoodiesCollapse"
                          class="collapse"
                          data-bs-parent="#productsNav"
                        >
                          <div class="py-4 ps-5">
                            <div class="form-check mb-3">
                              <input
                                id="hoodiesOne"
                                class="form-check-input"
                                type="checkbox"
                              />
                              <label class="form-check-label" for="hoodiesOne">
                                Activewear
                              </label>
                            </div>
                            <div class="form-check mb-3">
                              <input
                                id="hoodiesTwo"
                                class="form-check-input"
                                type="checkbox"
                              />
                              <label class="form-check-label" for="hoodiesTwo">
                                Fashion Hoodies & Sweatshirts
                              </label>
                            </div>
                            <div class="form-check mb-3">
                              <input
                                id="hoodiesThree"
                                class="form-check-input"
                                type="checkbox"
                              />
                              <label class="form-check-label" for="hoodiesThree">
                                Big & Tall Sweatshirts
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                id="hoodiesFour"
                                class="form-check-input"
                                type="checkbox"
                              />
                              <label class="form-check-label" for="hoodiesFour">
                                Big & Tall Fashion Hoodies
                              </label>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="list-styled-item">
                        <!-- Toggle -->
                        <a
                          class="list-styled-link"
                          data-bs-toggle="collapse"
                          href="#denimCollapse"
                        >
                          Denim
                        </a>

                        <!-- Collapse -->
                        <div
                          id="denimCollapse"
                          class="collapse"
                          data-bs-parent="#productsNav"
                        >
                          <div class="py-4 ps-5">
                            <div class="form-check mb-3">
                              <input
                                id="denimOne"
                                class="form-check-input"
                                type="checkbox"
                              />
                              <label class="form-check-label" for="denimOne">
                                Women Shorts
                              </label>
                            </div>
                            <div class="form-check mb-3">
                              <input
                                id="denimTwo"
                                class="form-check-input"
                                type="checkbox"
                              />
                              <label class="form-check-label" for="denimTwo">
                                Juniors' Shorts
                              </label>
                            </div>
                            <div class="form-check mb-3">
                              <input
                                id="denimThree"
                                class="form-check-input"
                                type="checkbox"
                              />
                              <label class="form-check-label" for="denimThree">
                                Petite
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                id="denimFour"
                                class="form-check-input"
                                type="checkbox"
                              />
                              <label class="form-check-label" for="denimFour">
                                Women Plus Shorts
                              </label>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="list-styled-item">
                        <!-- Toggle -->
                        <a
                          class="list-styled-link"
                          data-bs-toggle="collapse"
                          href="#jeansCollapse"
                        >
                          Jeans
                        </a>

                        <!-- Collapse -->
                        <div
                          id="jeansCollapse"
                          class="collapse"
                          data-bs-parent="#productsNav"
                        >
                          <div class="py-4 ps-5">
                            <div class="form-check mb-3">
                              <input
                                id="jeansOne"
                                class="form-check-input"
                                type="checkbox"
                              />
                              <label class="form-check-label" for="jeansOne">
                                Men Jeans
                              </label>
                            </div>
                            <div class="form-check mb-3">
                              <input
                                id="jeansTwo"
                                class="form-check-input"
                                type="checkbox"
                              />
                              <label class="form-check-label" for="jeansTwo">
                                Men Big & Tall Jeans
                              </label>
                            </div>
                            <div class="form-check mb-3">
                              <input
                                id="jeansThree"
                                class="form-check-input"
                                type="checkbox"
                              />
                              <label class="form-check-label" for="jeansThree">
                                Surf, Skate & Street Clothing
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                id="jeansFour"
                                class="form-check-input"
                                type="checkbox"
                              />
                              <label class="form-check-label" for="jeansFour">
                                Men Big & Tall Pants
                              </label>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="list-styled-item">
                        <!-- Toggle -->
                        <a
                          class="list-styled-link"
                          data-bs-toggle="collapse"
                          href="#jumpersCollapse"
                        >
                          Jumpers and Cardigans
                        </a>

                        <!-- Collapse -->
                        <div
                          id="jumpersCollapse"
                          class="collapse"
                          data-bs-parent="#productsNav"
                        >
                          <div class="py-4 ps-5">
                            <div class="form-check mb-3">
                              <input
                                id="jumpersOne"
                                class="form-check-input"
                                type="checkbox"
                              />
                              <label class="form-check-label" for="jumpersOne">
                                Sweaters Plus-Size
                              </label>
                            </div>
                            <div class="form-check mb-3">
                              <input
                                id="jumpersTwo"
                                class="form-check-input"
                                type="checkbox"
                              />
                              <label class="form-check-label" for="jumpersTwo">
                                Plus Sweaters
                              </label>
                            </div>
                            <div class="form-check mb-3">
                              <input
                                id="jumpersThree"
                                class="form-check-input"
                                type="checkbox"
                              />
                              <label class="form-check-label" for="jumpersThree">
                                Petite Cardigans
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                id="jumpersFour"
                                class="form-check-input"
                                type="checkbox"
                              />
                              <label class="form-check-label" for="jumpersFour">
                                Tops, Tees & Blouses
                              </label>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="list-styled-item">
                        <!-- Toggle -->
                        <a
                          class="list-styled-link"
                          data-bs-toggle="collapse"
                          href="#legginsCollapse"
                        >
                          Leggings
                        </a>

                        <!-- Collapse -->
                        <div
                          id="legginsCollapse"
                          class="collapse"
                          data-bs-parent="#productsNav"
                        >
                          <div class="py-4 ps-5">
                            <div class="form-check mb-3">
                              <input
                                id="legginsOne"
                                class="form-check-input"
                                type="checkbox"
                              />
                              <label class="form-check-label" for="legginsOne">
                                Novelty Leggings
                              </label>
                            </div>
                            <div class="form-check mb-3">
                              <input
                                id="legginsTwo"
                                class="form-check-input"
                                type="checkbox"
                              />
                              <label class="form-check-label" for="legginsTwo">
                                Novelty Pants & Capris
                              </label>
                            </div>
                            <div class="form-check mb-3">
                              <input
                                id="legginsThree"
                                class="form-check-input"
                                type="checkbox"
                              />
                              <label class="form-check-label" for="legginsThree">
                                Women Yoga Leggings
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                id="legginsFour"
                                class="form-check-input"
                                type="checkbox"
                              />
                              <label class="form-check-label" for="legginsFour">
                                Workout & Training Leggings
                              </label>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <!-- Toggle -->
                <a
                  class="nav-link dropdown-toggle fs-lg text-reset border-bottom mb-6"
                  data-bs-toggle="collapse"
                  href="#seasonCollapse"
                >
                  Season
                </a>

                <!-- Collapse -->
                <div
                  id="seasonCollapse"
                  class="collapse"
                  data-simplebar-collapse="#seasonGroup"
                >
                  <div id="seasonGroup" class="form-group form-group-overflow mb-6">
                    <div class="form-check mb-3">
                      <input
                        id="seasonOne"
                        class="form-check-input"
                        type="checkbox"
                        checked
                      />
                      <label class="form-check-label" for="seasonOne"> Summer </label>
                    </div>
                    <div class="form-check mb-3">
                      <input id="seasonTwo" class="form-check-input" type="checkbox" />
                      <label class="form-check-label" for="seasonTwo"> Winter </label>
                    </div>
                    <div class="form-check">
                      <input id="seasonThree" class="form-check-input" type="checkbox" />
                      <label class="form-check-label" for="seasonThree">
                        Spring & Autumn
                      </label>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <!-- Toggle -->
                <a
                  class="nav-link dropdown-toggle fs-lg text-reset border-bottom mb-6"
                  data-bs-toggle="collapse"
                  href="#sizeCollapse"
                >
                  Size
                </a>

                <!-- Collapse -->
                <div
                  id="sizeCollapse"
                  class="collapse"
                  data-simplebar-collapse="#sizeGroup"
                >
                  <div id="sizeGroup" class="form-group form-group-overlow mb-6">
                    <div class="form-check form-check-inline form-check-size mb-2">
                      <input id="sizeOne" class="form-check-input" type="checkbox" />
                      <label class="form-check-label" for="sizeOne"> 3XS </label>
                    </div>
                    <div class="form-check form-check-inline form-check-size mb-2">
                      <input
                        id="sizeTwo"
                        class="form-check-input"
                        type="checkbox"
                        disabled
                      />
                      <label class="form-check-label" for="sizeTwo"> 2XS </label>
                    </div>
                    <div class="form-check form-check-inline form-check-size mb-2">
                      <input id="sizeThree" class="form-check-input" type="checkbox" />
                      <label class="form-check-label" for="sizeThree"> XS </label>
                    </div>
                    <div class="form-check form-check-inline form-check-size mb-2">
                      <input id="sizeFour" class="form-check-input" type="checkbox" />
                      <label class="form-check-label" for="sizeFour"> S </label>
                    </div>
                    <div class="form-check form-check-inline form-check-size mb-2">
                      <input
                        id="sizeFive"
                        class="form-check-input"
                        type="checkbox"
                        checked
                      />
                      <label class="form-check-label" for="sizeFive"> M </label>
                    </div>
                    <div class="form-check form-check-inline form-check-size mb-2">
                      <input id="sizeSix" class="form-check-input" type="checkbox" />
                      <label class="form-check-label" for="sizeSix"> L </label>
                    </div>
                    <div class="form-check form-check-inline form-check-size mb-2">
                      <input id="sizeSeven" class="form-check-input" type="checkbox" />
                      <label class="form-check-label" for="sizeSeven"> XL </label>
                    </div>
                    <div class="form-check form-check-inline form-check-size mb-2">
                      <input
                        id="sizeEight"
                        class="form-check-input"
                        type="checkbox"
                        disabled
                      />
                      <label class="form-check-label" for="sizeEight"> 2XL </label>
                    </div>
                    <div class="form-check form-check-inline form-check-size mb-2">
                      <input id="sizeNine" class="form-check-input" type="checkbox" />
                      <label class="form-check-label" for="sizeNine"> 3XL </label>
                    </div>
                    <div class="form-check form-check-inline form-check-size mb-2">
                      <input id="sizeTen" class="form-check-input" type="checkbox" />
                      <label class="form-check-label" for="sizeTen"> 4XL </label>
                    </div>
                    <div class="form-check form-check-inline form-check-size mb-2">
                      <input id="sizeEleven" class="form-check-input" type="checkbox" />
                      <label class="form-check-label" for="sizeEleven"> One Size </label>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <!-- Toggle -->
                <a
                  class="nav-link dropdown-toggle fs-lg text-reset border-bottom mb-6"
                  data-bs-toggle="collapse"
                  href="#colorCollapse"
                >
                  Color
                </a>

                <!-- Collapse -->
                <div
                  id="colorCollapse"
                  class="collapse"
                  data-simplebar-collapse="#colorGroup"
                >
                  <div id="colorGroup" class="form-group form-group-overflow mb-6">
                    <div class="form-check form-check-color mb-3">
                      <input
                        id="colorOne"
                        class="form-check-input"
                        type="checkbox"
                        style="background-color: black"
                      />
                      <label class="form-check-label text-body" for="colorOne">
                        Black
                      </label>
                    </div>
                    <div class="form-check form-check-color mb-3">
                      <input
                        id="colorTwo"
                        class="form-check-input"
                        type="checkbox"
                        style="background-color: #f9f9f9"
                        checked
                      />
                      <label class="form-check-label text-body" for="colorTwo">
                        White
                      </label>
                    </div>
                    <div class="form-check form-check-color mb-3">
                      <input
                        id="colorThree"
                        class="form-check-input"
                        type="checkbox"
                        style="background-color: #3b86ff"
                      />
                      <label class="form-check-label text-body" for="colorThree">
                        Blue
                      </label>
                    </div>
                    <div class="form-check form-check-color mb-3">
                      <input
                        id="colorFour"
                        class="form-check-input"
                        type="checkbox"
                        style="background-color: #ff6f61"
                      />
                      <label class="form-check-label text-body" for="colorFour">
                        Red
                      </label>
                    </div>
                    <div class="form-check form-check-color mb-3">
                      <input
                        id="colorFive"
                        class="form-check-input"
                        type="checkbox"
                        style="background-color: #795548"
                        disabled
                      />
                      <label class="form-check-label text-body" for="colorFive">
                        Brown
                      </label>
                    </div>
                    <div class="form-check form-check-color mb-3">
                      <input
                        id="colorSix"
                        class="form-check-input"
                        type="checkbox"
                        style="background-color: #bababa"
                      />
                      <label class="form-check-label text-body" for="colorSix">
                        Gray
                      </label>
                    </div>
                    <div class="form-check form-check-color mb-3">
                      <input
                        id="colorSeven"
                        class="form-check-input"
                        type="checkbox"
                        style="background-color: #17a2b8"
                      />
                      <label class="form-check-label text-body" for="colorSeven">
                        Cyan
                      </label>
                    </div>
                    <div class="form-check form-check-color">
                      <input
                        id="colorEight"
                        class="form-check-input"
                        type="checkbox"
                        style="background-color: #e83e8c"
                      />
                      <label class="form-check-label text-body" for="colorEight">
                        Pink
                      </label>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <!-- Toggle -->
                <a
                  class="nav-link dropdown-toggle fs-lg text-reset border-bottom mb-6"
                  data-bs-toggle="collapse"
                  href="#brandCollapse"
                >
                  Brand
                </a>

                <!-- Collapse -->
                <div
                  id="brandCollapse"
                  class="collapse"
                  data-simplebar-collapse="#brandGroup"
                >
                  <!-- Search -->
                  <div data-list='{"valueNames": ["name"]}'>
                    <!-- Input group -->
                    <div class="input-group input-group-merge mb-6">
                      <input
                        class="form-control form-control-xs search"
                        type="search"
                        placeholder="Search Brand"
                      />

                      <!-- Button -->
                      <div class="input-group-append">
                        <button class="btn btn-outline-border btn-xs">
                          <i class="fe fe-search"></i>
                        </button>
                      </div>
                    </div>

                    <!-- Form group -->
                    <div id="brandGroup" class="form-group form-group-overflow mb-6">
                      <div class="list">
                        <div class="form-check mb-3">
                          <input id="brandOne" class="form-check-input" type="checkbox" />
                          <label class="form-check-label name" for="brandOne">
                            Dsquared2
                          </label>
                        </div>
                        <div class="form-check mb-3">
                          <input
                            id="brandTwo"
                            class="form-check-input"
                            type="checkbox"
                            disabled
                          />
                          <label class="form-check-label name" for="brandTwo">
                            Alexander McQueen
                          </label>
                        </div>
                        <div class="form-check mb-3">
                          <input
                            id="brandThree"
                            class="form-check-input"
                            type="checkbox"
                          />
                          <label class="form-check-label name" for="brandThree">
                            Balenciaga
                          </label>
                        </div>
                        <div class="form-check mb-3">
                          <input
                            id="brandFour"
                            class="form-check-input"
                            type="checkbox"
                            checked
                          />
                          <label class="form-check-label name" for="brandFour">
                            Adidas
                          </label>
                        </div>
                        <div class="form-check mb-3">
                          <input
                            id="brandFive"
                            class="form-check-input"
                            type="checkbox"
                          />
                          <label class="form-check-label name" for="brandFive">
                            Balmain
                          </label>
                        </div>
                        <div class="form-check mb-3">
                          <input id="brandSix" class="form-check-input" type="checkbox" />
                          <label class="form-check-label name" for="brandSix">
                            Burberry
                          </label>
                        </div>
                        <div class="form-check mb-3">
                          <input
                            id="brandSeven"
                            class="form-check-input"
                            type="checkbox"
                          />
                          <label class="form-check-label name" for="brandSeven">
                            Chloé
                          </label>
                        </div>
                        <div class="form-check mb-3">
                          <input
                            id="brandEight"
                            class="form-check-input"
                            type="checkbox"
                          />
                          <label class="form-check-label name" for="brandEight">
                            Kenzo
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            id="brandNine"
                            class="form-check-input"
                            type="checkbox"
                          />
                          <label class="form-check-label name" for="brandNine">
                            Givenchy
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <!-- Toggle -->
                <a
                  class="nav-link dropdown-toggle fs-lg text-reset border-bottom mb-6"
                  data-bs-toggle="collapse"
                  href="#priceCollapse"
                >
                  Price
                </a>

                <!-- Collapse -->
                <div
                  id="priceCollapse"
                  class="collapse"
                  data-simplebar-collapse="#priceGroup"
                >
                  <!-- Form group-->
                  <div id="priceGroup" class="form-group form-group-overflow mb-6">
                    <div class="form-check mb-3">
                      <input
                        id="priceOne"
                        class="form-check-input"
                        type="checkbox"
                        checked
                      />
                      <label class="form-check-label" for="priceOne">
                        $10.00 - $49.00
                      </label>
                    </div>
                    <div class="form-check mb-3">
                      <input
                        id="priceTwo"
                        class="form-check-input"
                        type="checkbox"
                        checked
                      />
                      <label class="form-check-label" for="priceTwo">
                        $50.00 - $99.00
                      </label>
                    </div>
                    <div class="form-check mb-3">
                      <input id="priceThree" class="form-check-input" type="checkbox" />
                      <label class="form-check-label" for="priceThree">
                        $100.00 - $199.00
                      </label>
                    </div>
                    <div class="form-check">
                      <input id="priceFour" class="form-check-input" type="checkbox" />
                      <label class="form-check-label" for="priceFour">
                        $200.00 and Up
                      </label>
                    </div>
                  </div>

                  <!-- Range -->
                  <div class="d-flex align-items-center">
                    <!-- Input -->
                    <input
                      type="number"
                      class="form-control form-control-xs"
                      placeholder="$10.00"
                      min="10"
                    />

                    <!-- Divider -->
                    <div class="text-gray-350 mx-2">‒</div>

                    <!-- Input -->
                    <input
                      type="number"
                      class="form-control form-control-xs"
                      placeholder="$350.00"
                      max="350"
                    />
                  </div>
                </div>
              </li>
            </ul>
          </form>
        </div>
        <div class="col-12 col-md-8 col-lg-9">
          <!-- Slider -->
          <div class="flickity-page-dots-inner mb-9" data-flickity='{"pageDots": true}'>
            <!-- Item -->
            <div class="w-100">
              <div
                class="card bg-h-100 bg-start"
                style="background-image: url(../assets/img/covers/cover-24.jpg)"
              >
                <div class="row" style="min-height: 400px">
                  <div class="col-12 col-md-10 col-lg-8 col-xl-6 align-self-center">
                    <div class="card-body px-md-10 py-11">
                      <!-- Heading -->
                      <h4>2022 Summer Collection</h4>

                      <!-- Button -->
                      <a class="btn btn-link px-0 text-body" href="shop.html">
                        View Collection <i class="fe fe-arrow-right ms-2"></i>
                      </a>
                    </div>
                  </div>
                  <div
                    class="col-12 col-md-2 col-lg-4 col-xl-6 d-none d-md-block bg-cover"
                    style="background-image: url(../assets/img/covers/cover-16.jpg)"
                  ></div>
                </div>
              </div>
            </div>

            <!-- Item -->
            <div class="w-100">
              <div
                class="card bg-cover"
                style="background-image: url(../assets/img/covers/cover-29.jpg)"
              >
                <div class="row align-items-center" style="min-height: 400px">
                  <div class="col-12 col-md-10 col-lg-8 col-xl-6">
                    <div class="card-body px-md-10 py-11">
                      <!-- Heading -->
                      <h4 class="mb-5">Get -50% from Summer Collection</h4>

                      <!-- Text -->
                      <p class="mb-7">
                        Appear, dry there darkness they're seas. <br />
                        <strong class="text-primary">Use code 4GF5SD</strong>
                      </p>

                      <!-- Button -->
                      <a class="btn btn-outline-dark" href="shop.html">
                        Shop Now <i class="fe fe-arrow-right ms-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Item -->
            <div class="w-100">
              <div
                class="card bg-cover"
                style="background-image: url(../assets/img/covers/cover-30.jpg)"
              >
                <div class="row align-items-center" style="min-height: 400px">
                  <div class="col-12">
                    <div class="card-body px-md-10 py-11 text-center text-white">
                      <!-- Preheading -->
                      <p class="text-uppercase">Enjoy an extra</p>

                      <!-- Heading -->
                      <h1 class="display-4 text-uppercase">50% off</h1>

                      <!-- Link -->
                      <a class="link-underline text-reset" href="shop.html"
                        >Shop Collection</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Header -->
          <div class="row align-items-center mb-7">
            <div class="col-12 col-md">
              <!-- Heading -->
              <h3 class="mb-1">Womens' Clothing</h3>

              <!-- Breadcrumb -->
              <ol class="breadcrumb mb-md-0 fs-xs text-gray-400">
                <li class="breadcrumb-item">
                  <a class="text-gray-400" href="index.html">Home</a>
                </li>
                <li class="breadcrumb-item active">Women's Clothing</li>
              </ol>
            </div>
            <div class="col-12 col-md-auto">
              <!-- Select -->
              <select class="form-select form-select-xs">
                <option selected>Most popular</option>
              </select>
            </div>
          </div>

          <!-- Tags -->
          <div class="row mb-7">
            <div class="col-12">
              <span class="btn btn-xs btn-light fw-normal text-muted me-3 mb-3">
                Shift dresses
                <a class="text-reset ms-2" href="#!" role="button">
                  <i class="fe fe-x"></i>
                </a>
              </span>
              <span class="btn btn-xs btn-light fw-normal text-muted me-3 mb-3">
                Summer
                <a class="text-reset ms-2" href="#!" role="button">
                  <i class="fe fe-x"></i>
                </a>
              </span>
              <span class="btn btn-xs btn-light fw-normal text-muted me-3 mb-3">
                M
                <a class="text-reset ms-2" href="#!" role="button">
                  <i class="fe fe-x"></i>
                </a>
              </span>
              <span class="btn btn-xs btn-light fw-normal text-muted me-3 mb-3">
                White
                <a class="text-reset ms-2" href="#!" role="button">
                  <i class="fe fe-x"></i>
                </a>
              </span>
              <span class="btn btn-xs btn-light fw-normal text-muted me-3 mb-3">
                Red
                <a class="text-reset ms-2" href="#!" role="button">
                  <i class="fe fe-x"></i>
                </a>
              </span>
              <span class="btn btn-xs btn-light fw-normal text-muted me-3 mb-3">
                Adidas
                <a class="text-reset ms-2" href="#!" role="button">
                  <i class="fe fe-x"></i>
                </a>
              </span>
              <span class="btn btn-xs btn-light fw-normal text-muted me-3 mb-3">
                $10.00 - $49.00
                <a class="text-reset ms-2" href="#!" role="button">
                  <i class="fe fe-x"></i>
                </a>
              </span>
              <span class="btn btn-xs btn-light fw-normal text-muted me-3 mb-3">
                $50.00 - $99.00
                <a class="text-reset ms-2" href="#!" role="button">
                  <i class="fe fe-x"></i>
                </a>
              </span>
            </div>
          </div>

          <!-- Products -->
          <div class="row">
            <div
              v-for="product in productList.data"
              :key="product.id"
              class="col-6 col-md-4"
            >
              <!-- Card -->
              <div class="card mb-7">
                <!-- Badge -->
                <div
                  class="badge bg-white text-body card-badge card-badge-start text-uppercase"
                >
                  New
                </div>

                <!-- Image -->
                <div class="card-img">
                  <!-- Image -->
                  <a class="card-img-hover" href="/MyProduct">
                    <img
                      class="card-img-top card-img-back"
                      :src="product.thumbnailUrl"
                      alt="..."
                    />
                    <img
                      class="card-img-top card-img-front"
                      :src="product.thumbnailUrl"
                      alt="..."
                    />
                  </a>

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
                    <a class="text-muted" href="shop.html">{{
                      product.categoryThirdId
                    }}</a>
                  </div>

                  <!-- Title -->
                  <div class="fw-bold">
                    <a class="text-body" href="/MyProduct"> {{ product.productName }}</a>
                  </div>

                  <!-- Price -->
                  <div class="fw-bold text-muted">{{ product.price }}</div>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-4">
              <!-- Card -->
              <div class="card mb-7">
                <!-- Badge -->
                <div
                  class="badge bg-white text-body card-badge card-badge text-uppercase"
                >
                  New
                </div>

                <!-- Image -->
                <div class="card-img">
                  <!-- Image -->
                  <a href="#!">
                    <img
                      class="card-img-top card-img-front"
                      src="./assets/img/products/product-12.jpg"
                      alt="..."
                    />
                  </a>

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
                    <a class="text-muted" href="shop.html">Shoes</a>
                  </div>

                  <!-- Title -->
                  <div class="fw-bold">
                    <a class="text-body" href="/MyProduct"> Heel strappy Sandals </a>
                  </div>

                  <!-- Price -->
                  <div class="fw-bold text-muted">$90.00</div>
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

export default {
  data() {
    return {
      productList: [],
      categoryList: [],
    }
  },
  created() {
    this.getProductList()
    this.getCategoryList()
  },
  methods: {
    async getProductList() {
      this.productList = await api.get('/products', {})
      console.log(this.productList)
      // alert(this.productList.data)
    },
    async getCategoryList() {
      this.categoryList = await api.get('/categories', {})
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

<style>

</style>

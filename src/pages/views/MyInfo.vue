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
            <li class="breadcrumb-item active">My Account</li>
          </ol>
        </div>
      </div>
    </div>
  </nav>

  <!-- CONTENT -->
  <section class="pt-7 pb-12">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <!-- Heading -->
          <h3 class="mb-10">My Account</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-3"></div>
        <div class="col-12 col-md-9 col-lg-8 offset-lg-1">
          <!-- Form -->
          <form>
            <div class="row">
              <div class="col-12 col-md-6">
                <!-- Email -->
                <div class="form-group">
                  <label class="form-label" for="accountFirstName"> First Name * </label>
                  <input
                    id="accountFirstName"
                    class="form-control form-control-sm"
                    type="text"
                    placeholder="First Name *"
                    value="Daniel"
                    required
                  />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <!-- Email -->
                <div class="form-group">
                  <label class="form-label" for="accountLastName"> Last Name * </label>
                  <input
                    id="accountLastName"
                    class="form-control form-control-sm"
                    type="text"
                    placeholder="Last Name *"
                    value="Robinson"
                    required
                  />
                </div>
              </div>
              <div class="col-12">
                <!-- Email -->
                <div class="form-group">
                  <label class="form-label" for="accountEmail"> Email Address * </label>
                  <input
                    id="accountEmail"
                    class="form-control form-control-sm"
                    type="email"
                    placeholder="Email Address *"
                    value="user@email.com"
                    required
                  />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <!-- Password -->
                <div class="form-group">
                  <label class="form-label" for="accountPassword">
                    Current Password *
                  </label>
                  <input
                    id="accountPassword"
                    class="form-control form-control-sm"
                    type="password"
                    placeholder="Current Password *"
                    required
                  />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <!-- Password -->
                <div class="form-group">
                  <label class="form-label" for="AccountNewPassword">
                    New Password *
                  </label>
                  <input
                    id="AccountNewPassword"
                    class="form-control form-control-sm"
                    type="password"
                    placeholder="New Password *"
                    required
                  />
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <!-- Birthday -->
                <div class="form-group">
                  <!-- Label -->
                  <label class="form-label">Date of Birth</label>

                  <!-- Inputs -->
                  <div class="row gx-5">
                    <div class="col-auto">
                      <!-- Date -->
                      <label class="visually-hidden" for="accountDate"> Date </label>
                      <select id="accountDate" class="form-select form-select-sm">
                        <option>10</option>
                        <option>11</option>
                        <option selected>12</option>
                      </select>
                    </div>
                    <div class="col">
                      <!-- Date -->
                      <label class="visually-hidden" for="accountMonth"> Month </label>
                      <select id="accountMonth" class="form-select form-select-sm">
                        <option>January</option>
                        <option selected>February</option>
                        <option>March</option>
                      </select>
                    </div>
                    <div class="col-auto">
                      <!-- Date -->
                      <label class="visually-hidden" for="accountYear"> Year </label>
                      <select id="accountYear" class="form-select form-select-sm">
                        <option>1990</option>
                        <option selected>1991</option>
                        <option>1992</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <!-- Gender -->
                <div class="form-group mb-8">
                  <!-- Label -->
                  <label class="form-label">Gender</label>

                  <!-- Inputs -->
                  <div>
                    <!-- Male -->
                    <input
                      id="male"
                      class="btn-check"
                      type="radio"
                      name="gender"
                      checked
                    />
                    <label class="btn btn-sm btn-outline-border" for="male">Male</label>

                    <!-- Female -->
                    <input id="female" class="btn-check" type="radio" name="gender" />
                    <label class="btn btn-sm btn-outline-border" for="female"
                      >Female</label
                    >
                  </div>
                </div>
              </div>
              <div class="col-12">
                <!-- Button -->
                <button class="btn btn-dark" type="submit">Save Changes</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>

</style>
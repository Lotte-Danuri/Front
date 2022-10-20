<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useDarkmode } from '/@src/stores/darkmode'
import { useUserSession } from '/@src/stores/userSession'
import { useNotyf } from '/@src/composable/useNotyf'
import sleep from '/@src/utils/sleep'
import { useApi } from '/@src/composable/useApi'

const api = useApi()
const isLoading = ref(false)
const darkmode = useDarkmode()
const router = useRouter()
const route = useRoute()
const notif = useNotyf()
const userSession = useUserSession()
const redirect = route.query.redirect as string

const handleLogin = async () => {
  if (!isLoading.value) {
    isLoading.value = true

    await sleep(2000)
    userSession.setToken('logged-in')

    notif.dismissAll()
    notif.success('Welcome back, Erik Kovalsky')

    if (redirect) {
      router.push(redirect)
    } else {
      router.push({
        name: '/views/MyMain',
      })
    }

    isLoading.value = false
  }
}

useHead({
  title: 'Auth Login 2 - Vuero',
})

// api
//   .post(`/auth/login`, {
//     id: 'chang',
//     password: 'chang',
//   })
//   .then((response) => {
//     console.log(response)
//   })
function btn() {}

function submitBtn() {
  // alert('test')
  const data = {
    id: document.getElementById('userId').value,
    password: document.getElementById('userPassword').value,
  }
  // alert(JSON.stringify(data))
  api
    .post(`/auth/login`, {
      id: document.getElementById('userId').value,
      password: document.getElementById('userPassword').value,
    })
    .then((response) => {
      // alert(response)
      console.log(response)
      localStorage.setItem('access_token', response.headers.access_token)
      localStorage.setItem('refresh_token', response.headers.refresh_token)
      localStorage.setItem('name', response.headers.name)
      location.href = '../MyMain'
    })
}
</script>

<template>
  <div class="auth-wrapper-inner columns is-gapless">
    <!-- Image section (hidden on mobile) -->
    <div class="column login-column is-8 h-hidden-mobile h-hidden-tablet-p hero-banner">
      <div class="hero login-hero is-fullheight is-app-grey">
        <div class="hero-body">
          <div class="columns">
            <div class="column is-10 is-offset-1">
              <img
                class="light-image has-light-shadow has-light-border"
                src="../assets/img/covers/cover-15.jpg"
                alt=""
                style="width: 2000px"
              />
              <img
                class="dark-image has-light-shadow"
                src="/@src/assets/illustrations/apps/vuero-banking-dark.webp"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="hero-footer">
          <p class="has-text-centered"></p>
        </div>
      </div>
    </div>

    <!-- Form section -->
    <div class="column is-4">
      <div class="hero is-fullheight is-white">
        <div class="hero-heading">
          <span></span>
          <div class="auth-logo">
            <RouterLink to="/"> </RouterLink>
          </div>
        </div>
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column is-12">
                <div class="auth-content">
                  <h2>Welcome !</h2>
                  <p>Please sign in to your account</p>
                  <RouterLink to="/auth/signup-2">
                    I do not have an account yet
                  </RouterLink>
                </div>
                <div class="auth-form-wrapper">
                  <!-- Login Form -->
                  <div class="login-form">
                    <!-- Username -->
                    <VField>
                      <VControl icon="feather:user">
                        <VInput
                          id="userId"
                          type="text"
                          placeholder="Username"
                          autocomplete="username"
                        />
                      </VControl>
                    </VField>

                    <!-- Password -->
                    <VField>
                      <VControl icon="feather:lock">
                        <VInput
                          id="userPassword"
                          type="password"
                          placeholder="Password"
                          autocomplete="current-password"
                        />
                      </VControl>
                    </VField>

                    <!-- Switch -->
                    <VField>
                      <VControl class="setting-item">
                        <VCheckbox label="Remember me" paddingless />
                      </VControl>
                    </VField>

                    <!-- Submit -->
                    <button
                      style="
                        margin-left: 10%;
                        border: none;
                        width: 400px;
                        height: 40px;
                        border-radius: 7px;
                        background-color: black;
                        color: white;
                      "
                      @click="submitBtn"
                    >
                      Log In
                    </button>
                    <div class="forgot-link has-text-centered">
                      <a>비밀번호 찾기</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="login_btn" style="margin-top: 50px; margin-left: 15%">
              <button style="border: none; margin-bottom: 10px">
                <img
                  src="../../../assets/kakao_login.png"
                  style="width: 400px; height: 60px"
                  alt=""
                />
              </button>
              <button style="border: none; margin-bottom: 10px">
                <img
                  src="../../../assets/naver_login.png"
                  style="width: 400px; height: 60px"
                  alt=""
                />
              </button>
              <button style="border: none; margin-bottom: 10px">
                <img
                  src="../../../assets/google_login.png"
                  style="width: 400px; height: 60px"
                  alt=""
                />
              </button>
            </div>
            <button
              style="
                border: none;
                cursor: pointer;
                border: 0;
                border-radius: 4px;
                font-weight: 600;
                margin: 0 10px;
                width: 200px;
                padding: 10px 0;
                box-shadow: 0 0 20px rgba(104, 85, 224, 0.2);
                transition: 0.4s;
                color: black;
                width: ;
                box-shadow: 0 0 20px rgba(104, 85, 224, 0.6);
                background-color: rgba(255, 255, 255, 1);
                width: 500px;
                height: 80px;
                margin-top: 50px;
                margin-left: 10%;
              "
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.login_btn button {
  border: none;
}
</style>
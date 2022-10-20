<template>
  <div>
    <input v-model="newTodoItem" type="text" />
    <button @click="addTodo2">추가</button>
    <select>
      <option>1</option>
      <option selected="selected+`${dsfsdfsd}`">3</option>
      <option>2</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
</template>
  <script>
import { useApi } from '/@src/composable/useApi'
const api = useApi()
export default {
  data() {
    return {
      productList: [],
      newTodoItem: '',
      data: {
        id: '',
        password: '',
        name: '',
        gender: '',
        role: 0,
        phoneNumber: '',
        address: '',
        birthDate: '',
      },
    }
  },
  created() {
    // this.addTodo()
  },
  methods: {
    addTodo() {
      console.log(this.newTodoItem),
        api
          .post('/auth/users', {
            id: '1018',
            password: '',
            name: '',
            gender: '',
            role: 0,
            phoneNumber: '',
            address: '',
            birthDate: '',
          })
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          })
    },
    addTodo2() {
      api
        .post(
          '/auth/users',
          {
            id: '1018',
            password: '',
            name: '',
            gender: '',
            role: 0,
            phoneNumber: '',
            address: '',
            birthDate: '',
          },
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNiIsImV4cCI6MTY2NjA5Njc2MX0.B7_gfsQ_aHNGSJrAZNY9bngr9t8-Uk9vloS5r678DMSDnZM5_IEnXCs3ITVqloIVy76f3MXfXyweZhMhzT3GHw`,
            },
          }
        )
        .then((response) => {
          // stores.value = response.data
          console.log(response)
          //   router.push('/views/MyCart')
        })
    },
  },
}
</script>
  <style>
  </style>
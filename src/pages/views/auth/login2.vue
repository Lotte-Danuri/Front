<template>
    <div>
        <input v-model="loginId" type="text" />
        <input v-model="pwd" type="password" />
        <button @click="doLogin">LOGIN</button>
    </div>
</template>
<script>
import { useApi } from '/@src/composable/useApi'
const api = useApi()
export default {
    methods: {
        doLogin(loginId, pwd) {
            api.post(
                '/auth/login',
                {
                    id: 'cyahn',
                    password: 'cyahn'
                }

            )
            .then((response) => {
                console.log(response)
            })
        }
    }
    
}
</script>
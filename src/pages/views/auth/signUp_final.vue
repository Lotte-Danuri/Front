<template>
    <form v-on:submit="signUpForm">
        <div>
            <label for="name">Name </label>
            <input id="name" type="text" v-model="name">
        </div>
        <div>
            <label for="gender">Gender </label>
            <input id="gender" type="text" v-model="gender">
        </div>
        <div>
            <label for="loginId">ID </label>
            <input id="loginId" type="text" v-model="loginId">
        </div>
        <div>
            <label for="password">Password </label>
            <input id="password" type="password" v-model="password">
        </div>
        <div>
            <label for="birth">Birth </label>
            <input id="birth" type="text" v-model="birth">
        </div>
        <div>
            <label for="phone">Phone </label>
            <input id="phone" type="text" v-model="phone">
        </div>
        <div>
            <label for="address">Address </label>
            <input id="address" type="text" v-model="address">
        </div>
        <div>
            <label for="role">Role </label>
            <input id="role" type="text" v-model="role">
        </div>
        <button type="submit">SignUp</button>
        <button>Cancel</button>
    </form>
    
</template>

<script>
import axios from 'axios';

export default {
    
    methods: {
        signUpForm: function() {
            console.log(this.name, this.password, this.gender, this.birth);
            var url = "https://sbbro.xyz/auth/users";

            var data = {
                id: this.loginId,
                password: this.password,
                name: this.name,
                gender: this.gender,
                role: 0,
                phoneNumber: this.phoneNumber,
                address: this.address,
                birthDate: this.birthDate
            }

            axios.post(url, data)
            .then(function(resp) {
                console.log(resp);
            })
            .catch(function(error){
                console.log(error);
            })
        }
    }
}
</script>
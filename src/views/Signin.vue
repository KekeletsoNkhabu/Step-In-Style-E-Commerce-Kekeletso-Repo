<template>
    <div class="login-container">
        <div class="login-form">
            <h1>Login</h1>
            <div class="logo">
                <!-- Replace with your actual logo -->
                <img src="@/assets/images/logo.png" alt="Logo" />
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="email" placeholder="Email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="password" placeholder="Password">
            </div>
            <button class="login-button" @click="login">Login</button>
            <p class="create-account">Don't Have An Account? <a href="#">Create An Account</a></p>
        </div>
    </div>
</template>

<script>

import { signIn } from "@/services/userService";

export default {
    data() {
        return {
            email: null,
            password: null,
        };
    },
    methods: {
        async login() {
            try {
                const user = await signIn({ email: this.email, password: this.password })
                console.log(user)
                if (user) {
                    localStorage.setItem('user', JSON.stringify(user))
                    this.$router.push({ name: 'Home' })
                } else {
                    console.error('Invalid credentials')
                    alert("Login failed. Please check your credentials.");
                }
            } catch (error) {
                console.error('Login Unsuccessful', error)
            }
        },
    },
}
</script>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f2f2f2;
}

.login-form {
    background-color: #fff;
    padding: 30px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
}

h1 {
    margin-bottom: 20px;
    color: #333;
}

.logo {
    margin-bottom: 20px;
}

.logo img {
    width: 100px;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    color: #333;
}

input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 3px;
    box-sizing: border-box;
    font-size: 16px;
}

.login-button {
    background-color: #007bff;
    color: #fff;
    padding: 12px 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
}

.login-button:hover {
    background-color: #0062cc;
}

.create-account {
    margin-top: 20px;
    font-size: 14px;
    color: #333;
}

.create-account a {
    color: #007bff;
    text-decoration: none;
}

.create-account a:hover {
    text-decoration: underline;
}
</style>
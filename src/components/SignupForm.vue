<template>
    <form @submit.prevent="signUp">
        <h2>Sign Up</h2>
        <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input
                type="username"
                placeholder="Username"
                required
                v-model="username"
                id="username"
                class="form-control" />
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input
                type="email"
                placeholder="Email"
                required
                v-model="email"
                id="email"
                class="form-control"
                aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
                type="password"
                placeholder="Password"
                required
                v-model="password"
                id="password"
                class="form-control" />
        </div>
        <button>Sign Up</button>
    </form>
</template>

<script>
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/init.js";

export default {
    emits: ["loggedIn"],
    data() {
        return {
            username: "",
            email: "",
            password: "",
        };
    },
    methods: {
        signUp() {
            // register new user
            createUserWithEmailAndPassword(auth, this.email, this.password).then(() => {
                // update 'displayName'
                updateProfile(auth.currentUser, {
                    displayName: this.username,
                }).then(() => {
                    this.$emit("loggedIn");
                });
            });
        },
    },
};
</script>

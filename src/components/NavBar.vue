<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>

                    <li class="nav-item d-flex">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <div class="d-flex">
                    <a class="nav-item btn btn-success me-2" href="/profile">Profile</a>
                    <a v-if="checkAuth == null" type="button" class="nav-item btn btn-primary" href="/login">
                        Log In
                    </a>
                    <img
                        class="nav-item"
                        style="width: auto; height: 40px"
                        src="./icons/shopping-cart.png"
                        alt="shopping-cart" />
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/init.js";
import router from "../router";
export default {
    name: "NavBar",
    data() {
        return {
            checkAuth: null,
        };
    },
    methods: {
        logout() {
            signOut(auth)
                .then(() => {
                    localStorage.removeItem("uidUser");
                    router.push("/");
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    created() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.checkAuth = user;
            } else {
                this.checkAuth = null;
            }
        });
    },
};
</script>

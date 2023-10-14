<template>
    <NavBar />
    <section class="mt-5 d-flex align-items-center justify-content-centre">
        <div class="container-fluid h-custom">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-md-9 col-lg-6 col-xl-5">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        class="img-fluid"
                        alt="Sample image" />
                </div>
                <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <div class="card">
                        <form href="#" @submit.prevent="signUp">
                            <!-- Email input -->
                            <div class="form-outline mb-4">
                                <input
                                    type="username"
                                    placeholder="Username"
                                    required
                                    v-model="username"
                                    id="username"
                                    class="form-control"
                                    aria-describedby="usernameHelp" />
                                <label class="form-label" for="username">Username</label>
                            </div>
                            <div class="form-outline mb-4">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    required
                                    v-model="email"
                                    id="email"
                                    class="form-control"
                                    aria-describedby="emailHelp" />
                                <label class="form-label" for="email">Email address</label>
                            </div>

                            <!-- Password input -->
                            <div class="form-outline mb-3">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    required
                                    v-model="password"
                                    id="password"
                                    class="form-control" />
                                <label class="form-label" for="password">Password</label>
                            </div>

                            <div class="text-center text-lg-start mt-4 pt-2">
                                <button
                                    type="submit"
                                    class="btn btn-primary btn-lg"
                                    style="padding-left: 2.5rem; padding-right: 2.5rem">
                                    Register
                                </button>
                                <p class="small fw-bold mt-2 pt-1 mb-0">
                                    Already have an account?
                                    <a href="/signup" class="link-danger">Log In</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
    components: { NavBar },
    setup() {
        const username = ref("");
        const email = ref("");
        const password = ref("");
        const router = useRouter();
        const store = useStore();
        const signUp = async () => {
            // register new user

            try {
                await store.dispatch("signUp", {
                    email: email.value,
                    password: password.value,
                    name: username.value,
                });
                router.push("/");
                console.log("User signed up successfully!");
                console.log(store.state.user);
            } catch (err) {
                console.log(err);
            }
        };
        return { signUp, username, email, password };
    },
};
</script>

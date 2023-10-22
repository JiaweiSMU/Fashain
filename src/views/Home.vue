<template>
    <NavBar />
    <div class="container mt-5">
        <div class="row">
            <div class="col-3">
                <Sidebar />
            </div>
            <div class="col-9">
                <div class="row" style="height: 450px">
                    <div
                        class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3"
                        v-for="product in this.products"
                        :key="product">
                        <div class="card h-100">
                            <div
                                class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                                data-mdb-ripple-color="light">
                                <img :src="product.image" class="w-100" />
                                <a href="#!">
                                    <div class="mask">
                                        <div class="d-flex justify-content-start align-items-end h-100">
                                            <h5>
                                                <span class="badge bg-dark ms-2">{{ product.category }}</span>
                                            </h5>
                                        </div>
                                    </div>
                                    <div class="hover-overlay">
                                        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
                                    </div>
                                </a>
                            </div>
                            <div class="card-body">
                                <a href="" class="text-reset">
                                    <h5 class="card-title mb-2">{{ product.name }}</h5>
                                </a>
                                <a href="" class="text-reset">
                                    <p>Shirt</p>
                                </a>
                                <h6 class="mb-3 price">${{ product.price }}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Card from "../components/Card.vue";
import Sidebar from "../components/Sidebar.vue";
import { collection, query, getFirestore, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import router from "../router";
const db = getFirestore();
const q = query(collection(db, "products"));
const storage = getStorage();
export default {
    components: { NavBar, Card, Sidebar },
    data() {
        return {
            products: [],
        };
    },
    name: "Home",

    created() {
        getDocs(q).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let data = doc.data();

                getDownloadURL(ref(storage, doc.data().images[0]))
                    .then((url) => {
                        data.image = url;
                    })
                    .catch((error) => {
                        console.log(error);
                    });

                this.products.push(data);
            });
        });
        console.log(this.products);
    },
};
</script>

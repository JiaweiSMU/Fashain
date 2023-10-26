<template>
    <NavBar />
    <div class="container">
        <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../assets/carousel/1.png" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="../assets/carousel/2.png" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="../assets/carousel/3.png" class="d-block w-100" alt="..." />
                </div>
            </div>
            <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
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
                                <img :src="product.images[0]" class="w-100" />
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
import { getStorage } from "firebase/storage";
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
                this.products.push(data);
            });
        });
        console.log(this.products);
    },
};
</script>

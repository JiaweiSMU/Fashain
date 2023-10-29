<template>
    <NavBar />
    <div class="container">
        <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="carousel">
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
                <div class="carousel-item">
                    <img src="../assets/carousel/4.png" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="../assets/carousel/5.png" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="../assets/carousel/6.png" class="d-block w-100" alt="..." />
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
                <ul class="nav nav-pills nav-justified sticky-top mt-5 bg-success" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button
                            class="nav-link text-light"
                            id="pills-new-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-new"
                            type="button"
                            role="tab"
                            aria-controls="pills-new"
                            aria-selected="true">
                            Brand New
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button
                            class="nav-link text-light"
                            id="pills-used-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-used"
                            type="button"
                            role="tab"
                            aria-controls="pills-used"
                            aria-selected="false">
                            Pre-loved
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button
                            class="nav-link text-light"
                            id="pills-rental-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-rental"
                            type="button"
                            role="tab"
                            aria-controls="pills-rental"
                            aria-selected="false">
                            Rental
                        </button>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div
                        class="tab-pane fade show active"
                        id="pills-new"
                        role="tabpanel"
                        aria-labelledby="pills-new-tab">
                        <div class="container py-5">
                            <div class="row" style="height: 450px">
                                <div
                                    class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3"
                                    v-for="product in this.products"
                                    :key="product">
                                    <div class="card h-100" v-if="product.type == 'New'" @click="goToProductPage(product)">
                                        <div
                                            class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                                            data-mdb-ripple-color="light">
                                            <img :src="product.images[0]" class="w-100" />
                                            <a href="#!">
                                                <div class="mask">
                                                    <div class="d-flex justify-content-start align-items-end h-100">
                                                        <h5>
                                                            <span class="badge bg-dark ms-2">{{
                                                                product.category
                                                            }}</span>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div class="hover-overlay">
                                                    <div
                                                        class="mask"
                                                        style="background-color: rgba(251, 251, 251, 0.15)"></div>
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
                <div class="tab-content" id="pills-tabContent">
                    <div
                        class="tab-pane fade show active"
                        id="pills-used"
                        role="tabpanel"
                        aria-labelledby="pills-used-tab">
                        <div class="container py-5">
                            <div class="row" style="height: 450px">
                                <div
                                    class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3"
                                    v-for="product in this.products"
                                    :key="product">
                                    <div class="card h-100" v-if="product.type == 'Pre-loved'" @click="goToProductPage(product)">
                                        <div
                                            class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                                            data-mdb-ripple-color="light">
                                            <img :src="product.image" class="w-100" />
                                            <a href="#!">
                                                <div class="mask">
                                                    <div class="d-flex justify-content-start align-items-end h-100">
                                                        <h5>
                                                            <span class="badge bg-dark ms-2">{{
                                                                product.category
                                                            }}</span>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div class="hover-overlay">
                                                    <div
                                                        class="mask"
                                                        style="background-color: rgba(251, 251, 251, 0.15)"></div>
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
                <div class="tab-content" id="pills-tabContent">
                    <div
                        class="tab-pane fade show active"
                        id="pills-rental"
                        role="tabpanel"
                        aria-labelledby="pills-rental-tab">
                        <div class="container py-5"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Sidebar from "../components/Sidebar.vue";
import { collection, query, getFirestore, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import router from "../router";
const db = getFirestore();
const q = query(collection(db, "products"));
const storage = getStorage();
export default {
    components: { NavBar, Sidebar },
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

    methods: {
        goToProductPage(product) {
            if (product && product.name) {
                this.$router.push({
                    name: 'ProductPage',
                    params: { name: product.name }
                });
            } else {
                console.error("Product name is missing or undefined");
            }
        }
    }

 
};
</script>

<template>
    <NavBar />
    <div class="container">
        <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
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
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div class="row">
            <div class="col">
                <ul class="nav nav-pills nav-justified mt-5 mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="ex-with-icons-tab-1" data-bs-toggle="pill"
                            data-bs-target="#pills-new" role="tab" href="#pills-new" aria-controls="pills-new"
                            aria-selected="true"><i class="fas fa-chart-pie fa-fw me-2"></i>Brand New</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="ex-with-icons-tab-2" data-bs-toggle="pill" data-bs-target="#pills-used"
                            href="#pills-used" role="tab" aria-controls="pills-used" aria-selected="false"><i
                                class="fas fa-chart-line fa-fw me-2"></i>Pre-loved</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="ex-with-icons-tab-3" data-bs-toggle="pill" data-bs-target="#pills-rental"
                            href="#pills-rental" role="tab" aria-controls="pills-rental" aria-selected="false"><i
                                class="fas fa-cogs fa-fw me-2"></i>Rental</a>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-new" role="tabpanel" aria-labelledby="pills-new-tab">
                        <div class="container py-5">
                            <div class="row">
                                <div class="mb-3 col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3"
                                    v-for="product in this.products_new" :key="product">
                                    <div class="card" style="height: auto; width: 250px" @click="goToProductPage(product)">
                                        <img :src="product.images[0]" class="card-img-top h-100 w-100" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">{{ product.name }}</h5>
                                            <h6 class="card-subtitle">{{ product.category }}</h6>
                                            <p class="card-text">{{ product.type }}</p>
                                            <a href="#" class="btn btn-primary">${{ product.price }}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show" id="pills-used" role="tabpanel" aria-labelledby="pills-used-tab">
                        <div class="container py-5">
                            <div class="row">
                                <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3"
                                    v-for="product in this.products_used" :key="product">
                                    <div style="height: auto; width: 250px" class="card" @click="goToProductPage(product)">
                                        <img :src="product.images[0]" class="card-img-top w-100 h-100" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">{{ product.name }}</h5>
                                            <h6 class="card-subtitle">{{ product.category }}</h6>
                                            <p class="card-text"></p>
                                            <a href="#" class="btn btn-primary">${{ product.price }}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show" id="pills-rental" role="tabpanel" aria-labelledby="pills-rental-tab">
                        <!-- For Map -->
                        <GoogleMap>Hi</GoogleMap>
                        <!-- Map End -->
                        <div class="container py-5">
                            <div class="row">
                                <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3"
                                    v-for="product in this.products_rental" :key="product">
                                    <div class="card" style="height: auto; width: 250px" @click="goToProductPage(product)">
                                        <img :src="product.images[0]" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">{{ product.name }}</h5>
                                            <h6 class="card-subtitle">{{ product.category }}</h6>
                                            <p class="card-text"></p>
                                            <a href="#" class="btn btn-primary">${{ product.price }}</a>
                                        </div>
                                    </div>
                                </div>
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
import Sidebar from "../components/Sidebar.vue";
import GoogleMap from "../components/GoogleMap.vue";
import { watch } from "vue";
import { collection, query, getFirestore, getDocs } from "firebase/firestore";
import { ref } from "vue";


const db = getFirestore();
const q = query(collection(db, "products"));
export default {
    components: { NavBar, Sidebar, GoogleMap },

    data() {
        return {
            products: [],
            products_new: [],
            products_used: [],
            products_rental: [],
            //Map stuff
            map: null,
            infoWindow: null,
            placesService: null,
            currentPos: { lat: 0, lng: 0, dist: 0, }, //To get currentPos without calling function again
            dist: 1000,
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
        const productData = this.products;

        watch(
            () => productData.length,
            () => {
                productData.forEach((product) => {
                    if (product.type == "New") {
                        this.products_new.push(product);
                    } else if (product.type == "Pre-loved") {
                        this.products_used.push(product);
                    } else if (product.type == "Rental") {
                        this.products_rental.push(product);
                    }
                });
            }
        );
    },


    methods: {
        goToProductPage(product) {
            if (product && product.name) {
                this.$router.push({
                    name: "ProductPage",
                    params: { name: product.name },
                });
            } else {
                console.error("Product name is missing or undefined");
            }
        },
    },
};
</script>

<style scoped>
.nav-pills {
    background-color: #665c37;
}

.nav-pills .nav-link {
    color: white;
}

.nav-pills .nav-link.active,
.nav-pills .nav-link:focus,
.nav-pills .nav-link:hover .nav-pills .nav-link:active {
    background-color: #bcb393;
    color: black;
}

.btn-primary {
    background-color: #000000;
    border: 1px solid #000000;
    color: #ffffff;
    transition:
        background-color 0.3s,
        border-color 0.3s;
}

.btn-primary:hover {
    background-color: #333333;
    border: 1px solid #333333;
    color: #ffffff;
}

.btn-primary:active,
.btn-primary:focus {
    background-color: #1a1a1a;
    border-color: #1a1a1a;
    color: #ffffff;
    box-shadow: none;
}
</style>

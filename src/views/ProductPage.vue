<template>
    <div class="product-page">
        <NavBar />

        <div class="container mt-5">
            <div class="row">
                <div class="col-md-6 product-image-section">
                    <!-- Displaying the product image -->
                    <img :src="product.images[0]" class="product-img" alt="Product Image" />
                </div>
                <div class="col-md-6 product-details-section">
                    <!-- Displaying the product details -->
                    <h2 class="product-name">{{ product.name }}</h2>
                    <p class="product-description">{{ product.description }}</p>
                    <p class="product-category"><strong>Category:</strong> {{ product.category }}</p>
                    <p class="product-price">${{ product.price }}</p>
                    <!-- size selection -->
                    <div class="size-selection">
                        <button v-for="size in Object.keys(product.quantity)" :key="size" class="size-btn">
                            {{ size }}
                        </button>
                    </div>
                    <!-- buy button -->
                    <button class="buy-btn btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { collection, query, where, getFirestore, getDocs } from "firebase/firestore";
import NavBar from "../components/NavBar.vue";

const db = getFirestore();

export default {
    components: { NavBar },
    data() {
        return {
            product: {},
        };
    },
    props: {
        uid: {
            type: String,
            required: true
        }
    },
    name: "ProductPage",

    created() {
        if (!this.uid) {
            console.error("Product UID is missing");
            return;
        }
        console.log("Product UID:", this.uid);
        this.fetchProductDetails().catch(error => {
            console.error("Failed to fetch product details:", error);
        });
    },

    methods: {
        async fetchProductDetails() {
            const q = query(collection(db, "products"), where("uid", "==", this.uid));
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
                this.product = querySnapshot.docs[0].data();
                console.log("Fetched product details:", this.product);
            } else {
                console.warn("No product found for the given UID");
            }
        },

    }

};
</script>


<style scoped>
    .product-page {
        background-color: #f7f7f7;
        padding-bottom: 100px;
    }

    .product-image-section {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }

    .product-details-section {
        padding: 40px;
        background-color: #ffffff;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
        border-radius: 10px;
    }

    .product-img {
        max-width: 70%; /* Reduced image size */
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }

    .product-name {
        font-size: 2.5em;
        margin-bottom: 20px;
        color: #333;
    }

    .product-category {
        font-size: 1.2em;
        margin-bottom: 15px;
        color: #555;
    }

    .product-description {
        margin-bottom: 30px;
        font-size: 1.15em;
        color: #666;
        line-height: 1.5;
    }

    .product-price {
        font-size: 2em;
        color: #444;
        margin-bottom: 40px;
    }

    .buy-btn {
        padding: 12px 35px;
        font-size: 1.15em;
        background-color: #000; /* Changed button color to black */
        border: none;
        color: white;
        box-shadow: 0 5px 10px rgba(0,0,0,0.1);
        transition: all 0.3s ease;

        &:hover {
            background-color: #333; /* Hover effect for black button */
            box-shadow: 0 6px 14px rgba(0,0,0,0.12);
        }
    }

    .size-selection {
        margin-bottom: 20px;
    }
    
    .size-btn {
        margin-right: 10px;
        padding: 5px 15px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    
</style>

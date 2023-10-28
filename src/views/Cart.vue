<template>
  <NavBar />
  <div class="row mt-5 ml-5" style="margin-left: 5%;">

    <div class="col-lg-7">
      <div class="card shadow">
        <div class="card-header bg-dark text-white">
          <h4>Shopping Cart</h4>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" v-for="item in products" :key="item.id">
            <div class="row align-items-center">
              <div class="col-3">
                <img :src="item.image" class="img-fluid" alt="product-image">
              </div>
              <div class="col-3">
                {{ item.name }}
              </div>
              <div class="col-3">
                <button class="btn btn-sm btn-outline-dark" @click="decrementQuantity(item)">-</button>
                {{ item.quantity }}
                <button class="btn btn-sm btn-outline-dark" @click="incrementQuantity(item)">+</button>
              </div>
              <div class="col-3 text-right quantity">
                {{ item.price * item.quantity | currency }}
                <div @click="removeFromCart(item)" style="cursor: pointer;">
                  <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="20" height="20"
                    style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;fill-rule:evenodd;clip-rule:evenodd">
                    <!-- Your SVG content here -->
                    <path
                      d="M5.755 20.283 4 8h16l-1.755 12.283A2 2 0 0 1 16.265 22h-8.53a2 2 0 0 1-1.98-1.717zM21 4h-5V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v1H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2z"
                      style="fill: #650000;" />
                  </svg>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="card-footer text-right">
          Total: {{ totalPrice | currency }}
        </div>
      </div>
    </div>

    <div class="col-lg-4 ml-4">
      <div class="card shadow">
        <div class="card-body">
          <h5 class="card-title">Summary</h5>
          <p class="card-text">Subtotal: {{ subtotal }}</p>
          <p class="card-text">Estimated Delivery & Handling: {{ delivery }}</p>
          <hr>
          <p class="card-text">Total: {{ totalPrice | currency }}</p>
          <hr>
          <button class="btn btn-dark btn-block">Guest Checkout</button>
          <p></p>
          <button class="btn btn-dark btn-block">Member Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import NavBar from "../components/NavBar.vue";
import { getFirestore, collection, query, where, getDocs, doc, getDoc, onSnapshot } from "firebase/firestore";
import db, { auth } from "../firebase/init.js";
import { onAuthStateChanged } from "firebase/auth";
export default {
  components: { NavBar },
  /* For validation of user type??  */
  data() {
    return {
      cartItems: [
        { id: 1, name: 'Item 1', price: 10, quantity: 1, image: '../assets/fashainIcon.png' },
        { id: 2, name: 'Item 1', price: 10, quantity: 1, image: 'path_to_image1.jpg' },
        { id: 3, name: 'Item 1', price: 10, quantity: 1, image: 'path_to_image1.jpg' },
        { id: 4, name: 'Item 1', price: 10, quantity: 1, image: 'path_to_image1.jpg' },
        { id: 5, name: 'Item 1', price: 10, quantity: 1, image: 'path_to_image1.jpg' },
        // ... more items


      ],
      products: [],

    }
  },

  created() {

    onAuthStateChanged(auth, (user) =>{
      if (user) {
        // User logged in already or has just logged in.
        const userID = user.uid;
        console.log("User ID (UID):", userID);
        // Reference to the user's document
        const userDocRef = doc(db, "users", userID);

        // Listen for changes in the user's document
        onSnapshot(userDocRef, async (userDoc) => {
          if (userDoc.exists()) {
            const userData = userDoc.data();

            // Access the "cart" field within the user's document
            const cart = userData.cart || [];

            // Initialize the products array
            this.products = [];

            // Loop through the cart and retrieve product data
            for (const cartItem of cart) {
              // Assuming the cart items contain product information

              this.products.push({
                id: cartItem.id, // You may need to adjust this based on your data structure
                name: cartItem.name,
                price: cartItem.price,
                quantity: cartItem.quantity,
                image: cartItem.image,

              });
              console.log(this.products)
            }
          }
        });
      } else {
          // No user is signed in
          console.log("No user is signed in.");
      }
    });


  },
  computed: {
    totalPrice() {
      return this.products.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }
  },
  methods: {
    incrementQuantity(item) {
      item.quantity++;
    },
    decrementQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
      }
    },
    removeFromCart(item) {
      this.products = this.products.filter(products => products.id !== item.id);
    }
  },
  filters: {
    currency(value) {
      return '$' + value.toFixed(2);
    }
  },
}

</script>
<!-- Style sheet -->
<style>
.card {
  border-radius: 10px;
}

.btn-outline-dark,
.btn-outline-danger {
  border-width: 2px;

}

.list-group-item {
  border-top-width: 1px !important;
}

.list-group-item:first-child {
  border-top-width: 0 !important;
}

.btn-sm {
  height: 20px;
  width: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0;

}

.quantity {
  display: flex;

}

/* Ensure you've included Font Awesome if you're using the trash icon. */
</style>

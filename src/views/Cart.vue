<template>
    <NavBar />
    <div class="row mt-5 ml-5" style="margin-left: 5%;">

        <div class="col-lg-7">
            <div class="card shadow">
                <div class="card-header bg-dark text-white">
                    <h4>Shopping Cart</h4>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" v-for="item in cartItems" :key="item.id">
                        <div class="row align-items-center">
                            <div class="col-3">
                                <img src="../assets/fashainIcon.png" class="img-fluid rounded-circle" alt="product-image">
                            </div>
                            <div class="col-3">
                                {{ item.name }}
                            </div>
                            <div class="col-3">
                                <button class="btn btn-sm btn-outline-dark" @click="decrementQuantity(item)">-</button>
                                {{ item.quantity }}
                                <button class="btn btn-sm btn-outline-dark" @click="incrementQuantity(item)">+</button>
                            </div>
                            <div class="col-3 text-right">
                                {{ item.price * item.quantity | currency }}
                                <button class="btn btn-outline-danger btn-sm ml-2" @click="removeFromCart(item)">
                                    <i class="fas fa-trash"></i>
                                </button>
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
                    <button class="btn btn-dark btn-block">Guest Checkout</button>
                    <button class="btn btn-dark btn-block">Member Checkout</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import NavBar from "../components/NavBar.vue";
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
      ]
    }
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }
  },
  methods: {
    incrementQuantity(item) {
      item.quantity++;
    },
    decrementQuantity(item) {
      if(item.quantity > 1) {
        item.quantity--;
      }
    },
    removeFromCart(item) {
      this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.id);
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
<style>.card {
    border-radius: 10px;
}

.btn-outline-dark, .btn-outline-danger {
    border-width: 2px;
    
}

.list-group-item {
    border-top-width: 1px !important;
}

.list-group-item:first-child {
    border-top-width: 0 !important;
}
.btn-sm
{
    height: 20px;
    width: 20px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0
}

/* Ensure you've included Font Awesome if you're using the trash icon. */
</style>

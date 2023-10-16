<template>
    <NavBar />
    <div class="container">
        <p>add something here</p>
        <a class="btn btn-outline-success me-2" href="/campaign">Create Campaign</a>
        <a class="btn btn-outline-success me-2" href="/add_product">Add Product</a>
    </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
    components: { NavBar },
    name: "Profile",
};
</script>

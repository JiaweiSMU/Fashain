<template>
    <NavBar />
    <!-- <link href="https://netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet"> -->

    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />

    <!-- User profile -->

    <!-- Business Profile-->

    <div class="container py-5">
        <div class="row">
            <div class="col-lg-4">
                <div class="card mb-4">
                    <div class="card-body text-center">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                            alt="avatar"
                            class="rounded-circle img-fluid"
                            style="width: 150px" />
                        <h5 class="my-3">{{ user.name }}</h5>
                        <p class="text-muted mb-1">{{ user.email }}</p>
                        <p class="text-muted mb-4">Sustainability Rating: {{ user.rating }}</p>
                        <a class="btn btn-primary btn-sm" href="/edit_profile"
                            >Edit Profile
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 2 24 24">
                                <path
                                    d="M20.548 3.452a1.542 1.542 0 0 1 0 2.182l-7.636 7.636-3.273 1.091 1.091-3.273 7.636-7.636a1.542 1.542 0 0 1 2.182 0zM4 21h15a1 1 0 0 0 1-1v-8a1 1 0 0 0-2 0v7H5V6h7a1 1 0 0 0 0-2H4a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1z" />
                            </svg>
                        </a>
                        <ul class="list-group list-group-flush rounded-3">
                            <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-geo-alt"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0 -6 3 3 0 0 0 0 6z" />
                                </svg>
                                <p class="mb-0">
                                    {{
                                        `${user.address.street_number} ${user.address.route} ${user.blockNumber}
                                                                        ${user.address.postal_code}`
                                    }}
                                </p>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-telephone"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg>
                                <p class="mb-0">{{ user.contactno }}</p>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                <i class="fab fa-twitter fa-lg" style="color: #55acee"></i>
                                <p class="mb-0"></p>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                <i class="fab fa-instagram fa-lg" style="color: #ac2bac"></i>
                                <p class="mb-0">mdbootstrap</p>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                <i class="fab fa-facebook-f fa-lg" style="color: #3b5998"></i>
                                <p class="mb-0">mdbootstrap</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card mb-4 mb-lg-0">
                    <div class="card-body p-0"></div>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="card mb-0">
                    <div v-if="user.userType == 'business'">
                        <ul class="nav nav-pills nav-justified" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button
                                    class="nav-link active"
                                    id="pills-home-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-home"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-home"
                                    aria-selected="true">
                                    All Products
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button
                                    class="nav-link"
                                    id="pills-new-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-new"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-new"
                                    aria-selected="false">
                                    Brand New
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button
                                    class="nav-link"
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
                                    class="nav-link"
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
                            <li class="nav-item" role="presentation">
                                <button
                                    class="nav-link"
                                    id="pills-campaign-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-campaign"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-campaign"
                                    aria-selected="false">
                                    Campaign
                                </button>
                            </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div
                                class="tab-pane fade show active"
                                id="pills-home"
                                role="tabpanel"
                                aria-labelledby="pills-home-tab">
                                <div class="container py-5">
                                    <div class="row">
                                        <div class="col-md-12 col-lg-4 mb-4 mb-lg-0">
                                            <div class="card text-black">
                                                <img
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img1.webp"
                                                    class="card-img-top"
                                                    alt="iPhone" />
                                                <div class="card-body">
                                                    <div class="text-center mt-1">
                                                        <h4 class="card-title">iPhone X</h4>
                                                        <h6 class="text-primary mb-1 pb-3">Starting at $399</h6>
                                                    </div>

                                                    <div class="d-flex flex-row">
                                                        <button type="button" class="btn btn-primary flex-fill me-1">
                                                            Edit
                                                        </button>
                                                        <button type="button" class="btn btn-danger flex-fill ms-1">
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-lg-4 mb-4 mb-md-0">
                                            <div class="card text-black">
                                                <img
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img2.webp"
                                                    class="card-img-top"
                                                    alt="iPhone" />
                                                <div class="card-body">
                                                    <div class="text-center mt-1">
                                                        <h4 class="card-title">iPhone 11</h4>
                                                        <h6 class="text-primary mb-1 pb-3">Starting at $499</h6>
                                                    </div>

                                                    <div class="d-flex flex-row">
                                                        <button type="button" class="btn btn-primary flex-fill me-1">
                                                            Edit
                                                        </button>
                                                        <button type="button" class="btn btn-danger flex-fill ms-1">
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-lg-4 mb-4 mb-md-0">
                                            <div class="card text-black">
                                                <img
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img3.webp"
                                                    class="card-img-top"
                                                    alt="iPhone" />
                                                <div class="card-body">
                                                    <div class="text-center mt-1">
                                                        <h4 class="card-title">iPhone 11 Pro</h4>
                                                        <h6 class="text-primary mb-1 pb-3">Starting at $599</h6>
                                                    </div>

                                                    <div class="d-flex flex-row">
                                                        <button type="button" class="btn btn-primary flex-fill me-1">
                                                            Edit
                                                        </button>
                                                        <button type="button" class="btn btn-danger flex-fill ms-1">
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-new" role="tabpanel" aria-labelledby="pills-new-tab">
                                new
                            </div>
                            <div class="tab-pane fade" id="pills-used" role="tabpanel" aria-labelledby="pills-used-tab">
                                te1st
                            </div>
                            <div
                                class="tab-pane fade"
                                id="pills-rental"
                                role="tabpanel"
                                aria-labelledby="pills-rental-tab">
                                test
                            </div>
                            <div
                                class="tab-pane fade"
                                id="pills-campaign"
                                role="tabpanel"
                                aria-labelledby="pills-campaign-tab">
                                ...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <br />
                <a class="btn btn-outline-secondary me-2" href="/edit_profile">Edit Profile</a>
                <a v-if="user.userType == 'business'" class="btn btn-outline-success me-2" href="/campaign"
                    >Create Campaign</a
                >
                <a v-if="user.userType == 'business'" class="btn btn-outline-success me-2" href="/add_product"
                    >Add Product</a
                >
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import router from "../router";
const db = getFirestore();

export default {
    components: { NavBar },
    name: "Profile",
    /* For validation of user type??  */
    data() {
        return {
            /*
            --- Customer ---
            userType: "user",
            --- Business ---
            userType: "business",
            just to pull
            
            */

            user: {
                uid: localStorage.getItem("user_uid"),
                name: "",
                email: "",
                userType: "",
                address: "",
                postcode: "",
                blockNumber: "",
                contactno: "",
            },
        };
    },

    created() {
        const q = query(collection(db, "users"), where("uid", "==", this.user.uid));

        getDocs(q).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.user.name = doc.data().name;
                this.user.email = doc.data().email;
                this.user.userType = doc.data().userType;
                this.user.address = doc.data().address;
                this.user.postcode = doc.data().postcode;
                this.user.blockNumber = doc.data().blockNumber;
                this.user.contactno = doc.data().contactno;
                this.user.rating = doc.data().rating;
            });
        });
    },
};
</script>
<!-- Style sheet -->
<style>
@import "../assets/profile.css";
</style>

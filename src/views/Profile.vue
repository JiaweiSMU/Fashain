<template>
    <NavBar />
    <!-- <link href="https://netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet"> -->

    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
    <div class="container bootstrap snippets bootdey">
        <!-- User profile -->
        <div v-if="user.userType == 'user'" class="row">
            <div class="profile-nav col-md-3">
                <div class="panel">
                    <div class="user-heading round">
                        <a href="#">
                            <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
                        </a>
                        <h1>{{ user.name }}</h1>
                        <p>{{ user.email }}</p>
                    </div>
                    <!-- 
                    <ul class="nav nav-pills nav-stacked">
                        <li class="active"><a href="#"> <i class="fa fa-user"></i> Profile</a></li>
                        <li><a href="#"> <i class="fa fa-calendar"></i> Recent Activity <span
                                    class="label label-warning pull-right r-activity">9</span></a></li>
                        <li><a href="#"> <i class="fa fa-edit"></i> Edit profile</a></li>
                    </ul> -->
                </div>
            </div>
            <div class="profile-info col-md-9">
                <div class="panel">
                    <div class="panel-body bio-graph-info">
                        <h1 class="profileHead">My Profile</h1>
                        <div class="row">
                            <div class="bio-row">
                                <p><span>Username </span>: Greta Thunberg</p>
                            </div>
                            <div class="bio-row">
                                <p><span>Address </span>: 81 Victoria St, Singapore 188065</p>
                            </div>
                            <div class="bio-row">
                                <p><span>Date of Birth:</span>: 13 July 1983</p>
                            </div>
                            <div class="bio-row">
                                <p><span>Email </span>: earthlover@gmail.com</p>
                            </div>
                            <div class="bio-row">
                                <p><span>Mobile </span>: 8132 8323</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Business Profile-->
        <div v-else-if="user.userType == 'business'" class="row">
            <div class="profile-nav col-md-3">
                <div class="panel">
                    <div class="user-heading round">
                        <a href="#">
                            <img src="../assets/placeholder-store.png" alt="" />
                        </a>
                        <h1>{{ user.name }}</h1>
                        <p>{{ user.email }}</p>
                    </div>

                    <!-- <ul class="nav nav-pills nav-stacked">
                        <li class="active"><a href="#"> <i class="fa fa-user"></i> Profile</a></li>
                        <li><a href="#"> <i class="fa fa-calendar"></i> Recent Activity <span
                                    class="label label-warning pull-right r-activity">9</span></a></li>
                        <li><a href="#"> <i class="fa fa-edit"></i> Edit profile</a></li>
                    </ul> -->
                </div>
            </div>
            <div class="profile-info col-md-9">
                <div class="panel">
                    <div class="bio-graph-heading">
                        Aliquam ac magna metus. Nam sed arcu non tellus fringilla fringilla ut vel ispum. Aliquam ac
                        magna metus.
                    </div>
                    <div class="panel-body bio-graph-info">
                        <h1 class="profileHead">My Profile</h1>
                        <div class="row">
                            <div class="bio-row">
                                <p><span>Address </span>: 81 Victoria St, Singapore 188065</p>
                            </div>
                            <div class="bio-row">
                                <p><span>Type </span>: Wholesale</p>
                            </div>
                            <div class="bio-row">
                                <p><span>Established</span>: 7 August 2022</p>
                            </div>
                            <div class="bio-row">
                                <p><span>Overall Rating </span>: 4.9</p>
                            </div>
                            <div class="bio-row">
                                <p><span> </span></p>
                            </div>
                            <div class="bio-row">
                                <p><span>Contact </span>: 6828 0100</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="panel">
                                <div class="panel-body">
                                    <div class="bio-chart">
                                        <div style="display: inline; width: 100px; height: 100px">
                                            <canvas width="100" height="100px"></canvas
                                            ><input
                                                class="knob"
                                                data-width="100"
                                                disabled
                                                data-height="100"
                                                data-displayprevious="true"
                                                data-thickness=".2"
                                                value="88"
                                                data-fgcolor="#e06b7d"
                                                data-bgcolor="#e8e8e8"
                                                style="
                                                    width: 54px;
                                                    height: 33px;
                                                    position: absolute;
                                                    vertical-align: middle;
                                                    margin-top: 33px;
                                                    margin-left: -77px;
                                                    border: 0px;
                                                    font-weight: bold;
                                                    font-style: normal;
                                                    font-variant: normal;
                                                    font-stretch: normal;
                                                    font-size: 20px;
                                                    line-height: normal;
                                                    font-family: Arial;
                                                    text-align: center;
                                                    color: rgb(224, 107, 125);
                                                    padding: 0px;
                                                    -webkit-appearance: none;
                                                    background: none;
                                                " />
                                        </div>
                                    </div>
                                    <div class="bio-desk">
                                        <h4 class="red">Sustainability Rating</h4>
                                        <p>Carbon Footprint :</p>
                                        <p>Fair Trade Certified</p>
                                        <p>Carbon Neutral Certification</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="panel">
                                <div class="panel-body">
                                    <div class="bio-chart">
                                        <div style="display: inline; width: 100px; height: 100px">
                                            <canvas width="100" height="100px"></canvas
                                            ><input
                                                class="knob"
                                                data-width="100"
                                                disabled
                                                data-height="100"
                                                data-displayprevious="true"
                                                data-thickness=".2"
                                                value="192"
                                                data-fgcolor="#4CC5CD"
                                                data-bgcolor="#e8e8e8"
                                                style="
                                                    width: 54px;
                                                    height: 33px;
                                                    position: absolute;
                                                    vertical-align: middle;
                                                    margin-top: 33px;
                                                    margin-left: -77px;
                                                    border: 0px;
                                                    font-weight: bold;
                                                    font-style: normal;
                                                    font-variant: normal;
                                                    font-stretch: normal;
                                                    font-size: 20px;
                                                    line-height: normal;
                                                    font-family: Arial;
                                                    text-align: center;
                                                    color: rgb(76, 197, 205);
                                                    padding: 0px;
                                                    -webkit-appearance: none;
                                                    background: none;
                                                " />
                                        </div>
                                    </div>
                                    <div class="bio-desk">
                                        <h4 class="terques">Total Products</h4>
                                        <p>For sale: 180</p>
                                        <p>For rent: 12</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="panel">
                                <div class="panel-body">
                                    <div class="bio-chart">
                                        <div style="display: inline; width: 100px; height: 100px">
                                            <canvas width="100" height="100px"></canvas
                                            ><input
                                                class="knob"
                                                data-width="100"
                                                disabled
                                                data-height="100"
                                                data-displayprevious="true"
                                                data-thickness=".2"
                                                value="231"
                                                data-fgcolor="#96be4b"
                                                data-bgcolor="#e8e8e8"
                                                style="
                                                    width: 54px;
                                                    height: 33px;
                                                    position: absolute;
                                                    vertical-align: middle;
                                                    margin-top: 33px;
                                                    margin-left: -77px;
                                                    border: 0px;
                                                    font-weight: bold;
                                                    font-style: normal;
                                                    font-variant: normal;
                                                    font-stretch: normal;
                                                    font-size: 20px;
                                                    line-height: normal;
                                                    font-family: Arial;
                                                    text-align: center;
                                                    color: rgb(150, 190, 75);
                                                    padding: 0px;
                                                    -webkit-appearance: none;
                                                    background: none;
                                                " />
                                        </div>
                                    </div>
                                    <div class="bio-desk">
                                        <h4 class="green">Sales</h4>
                                        <p>Started : 15 July</p>
                                        <p>Deadline : 15 August</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="panel">
                                <div class="panel-body">
                                    <div class="bio-chart">
                                        <div style="display: inline; width: 100px; height: 100px">
                                            <canvas width="100" height="100px"></canvas
                                            ><input
                                                class="knob"
                                                data-width="100"
                                                disabled
                                                data-height="100"
                                                data-displayprevious="true"
                                                data-thickness=".2"
                                                value="50"
                                                data-fgcolor="#cba4db"
                                                data-bgcolor="#e8e8e8"
                                                style="
                                                    width: 54px;
                                                    height: 33px;
                                                    position: absolute;
                                                    vertical-align: middle;
                                                    margin-top: 33px;
                                                    margin-left: -77px;
                                                    border: 0px;
                                                    font-weight: bold;
                                                    font-style: normal;
                                                    font-variant: normal;
                                                    font-stretch: normal;
                                                    font-size: 20px;
                                                    line-height: normal;
                                                    font-family: Arial;
                                                    text-align: center;
                                                    color: rgb(203, 164, 219);
                                                    padding: 0px;
                                                    -webkit-appearance: none;
                                                    background: none;
                                                " />
                                        </div>
                                    </div>
                                    <div class="bio-desk">
                                        <h4 class="purple">Reviews</h4>
                                        <p>Started : 15 July</p>
                                        <p>Deadline : 15 August</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <p>add something here</p>
            <a class="btn btn-outline-secondary me-2" href="/edit_profile">Edit Profile</a>
            <a v-if="userType == 'business'" class="btn btn-outline-success me-2" href="/campaign">Create Campaign</a>
            <a v-if="userType == 'business'" class="btn btn-outline-success me-2" href="/add_product">Add Product</a>
        </div>
    </div>
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
                        <p class="text-muted mb-4">Sustainability Rating: ★★★★☆</p>
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
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg>
                                <p class="mb-0">
                                    {{
                                        `${user.address.street_number} ${user.address.route} ${user.blockNumber} ${user.address.postal_code}`
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
                                <p class="mb-0">@mdbootstrap</p>
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
                <div class="card mb-4">
                    <div class="card-body"></div>
                </div>
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
            });
        });
    },
};
</script>
<!-- Style sheet -->
<style>
@import "../assets/profile.css";
</style>

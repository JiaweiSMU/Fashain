<template>
    <NavBar />
    <!-- <link href="https://netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet"> -->

    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
    <div class="container bootstrap snippets bootdey">
        <!-- User profile -->
        <div v-if="userType == 'user'" class="row">
            <div class="profile-nav col-md-3">
                <div class="panel">
                    <div class="user-heading round">
                        <a href="#">
                            <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="">
                        </a>
                        <h1>Camila Smith</h1>
                        <p>deydey@theEmail.com</p>
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
        <div v-else-if="userType == 'business'" class="row">
            <div class="profile-nav col-md-3">
                <div class="panel">
                    <div class="user-heading round">
                        <a href="#">
                            <img src="../assets/placeholder-store.png" alt="">
                        </a>
                        <h1>Thrift Store</h1>
                        <p>store@thrift.com</p>
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
                        Aliquam ac magna metus. Nam sed arcu non tellus fringilla fringilla ut vel ispum. Aliquam ac magna
                        metus.
                    </div>
                    <div class="panel-body bio-graph-info">
                        <h1 class="profileHead">My Profile</h1>
                        <div class="row">
                            <div class="bio-row">
                                <p><span>Username </span>: Thirft Store</p>
                            </div>
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
                                <p><span>Overall Rating </span>: 4.9 </p>
                            </div>
                            <div class="bio-row">
                                <p><span> </span></p>
                            </div>
                            <div class="bio-row">
                                <p><span>Contact </span>: 6828 0100</p>
                            </div>
                            <div class="bio-row">
                                <p><span>Email </span>: store@thrift.com</p>
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
                                        <div style="display:inline;width:100px;height:100px;"><canvas width="100"
                                                height="100px"></canvas><input class="knob" data-width="100" disabled
                                                data-height="100" data-displayprevious="true" data-thickness=".2" value="88"
                                                data-fgcolor="#e06b7d" data-bgcolor="#e8e8e8"
                                                style="width: 54px; height: 33px; position: absolute; vertical-align: middle; margin-top: 33px; margin-left: -77px; border: 0px; font-weight: bold; font-style: normal; font-variant: normal; font-stretch: normal; font-size: 20px; line-height: normal; font-family: Arial; text-align: center; color: rgb(224, 107, 125); padding: 0px; -webkit-appearance: none; background: none;">
                                        </div>
                                    </div>
                                    <div class="bio-desk">
                                        <h4 class="red">Sustainability Rating</h4>
                                        <p>Carbon Footprint : </p>
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
                                        <div style="display:inline;width:100px;height:100px;"><canvas width="100"
                                                height="100px"></canvas><input class="knob" data-width="100" disabled
                                                data-height="100" data-displayprevious="true" data-thickness=".2"
                                                value="192" data-fgcolor="#4CC5CD" data-bgcolor="#e8e8e8"
                                                style="width: 54px; height: 33px; position: absolute; vertical-align: middle; margin-top: 33px; margin-left: -77px; border: 0px; font-weight: bold; font-style: normal; font-variant: normal; font-stretch: normal; font-size: 20px; line-height: normal; font-family: Arial; text-align: center; color: rgb(76, 197, 205); padding: 0px; -webkit-appearance: none; background: none;">
                                        </div>
                                    </div>
                                    <div class="bio-desk">
                                        <h4 class="terques">Total Products </h4>
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
                                        <div style="display:inline;width:100px;height:100px;"><canvas width="100"
                                                height="100px"></canvas><input class="knob" data-width="100" disabled
                                                data-height="100" data-displayprevious="true" data-thickness=".2"
                                                value="231" data-fgcolor="#96be4b" data-bgcolor="#e8e8e8"
                                                style="width: 54px; height: 33px; position: absolute; vertical-align: middle; margin-top: 33px; margin-left: -77px; border: 0px; font-weight: bold; font-style: normal; font-variant: normal; font-stretch: normal; font-size: 20px; line-height: normal; font-family: Arial; text-align: center; color: rgb(150, 190, 75); padding: 0px; -webkit-appearance: none; background: none;">
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
                                        <div style="display:inline;width:100px;height:100px;"><canvas width="100"
                                                height="100px"></canvas><input class="knob" data-width="100" disabled
                                                data-height="100" data-displayprevious="true" data-thickness=".2" value="50"
                                                data-fgcolor="#cba4db" data-bgcolor="#e8e8e8"
                                                style="width: 54px; height: 33px; position: absolute; vertical-align: middle; margin-top: 33px; margin-left: -77px; border: 0px; font-weight: bold; font-style: normal; font-variant: normal; font-stretch: normal; font-size: 20px; line-height: normal; font-family: Arial; text-align: center; color: rgb(203, 164, 219); padding: 0px; -webkit-appearance: none; background: none;">
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
            <a class="btn btn-outline-secondary me-2" href="/Edit_Profile">Edit Profile</a>
            <a v-if="userType == 'business'" class="btn btn-outline-success me-2" href="/campaign">Create Campaign</a>
            <a v-if="userType == 'business'" class="btn btn-outline-success me-2" href="/add_product">Add Product</a>
        </div>
    </div>
    <!--    <table>
        <tr>
            <th>hi</th>
        </tr>
    </table>
    -->
</template>

<script>
import NavBar from "../components/NavBar.vue";
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
            */
            userType: "business",
        };
    },

};
</script>
<!-- Style sheet -->
<style>
@import '../assets/profile.css';
</style>


<template>
    <NavBar />
    <div class="container mt-5">
        <div class="row">
            <div class="col-3">
                <Sidebar />
            </div>
            <div class="col-9">
                <div class="row">
                    <div class="col">
                        <Card
                            title="Card 1"
                            text="Some quick example text to build on the card title and make up the bulk of the card's content."
                            link="#" />
                    </div>
                    <div class="col">
                        <Card
                            title="Card 2"
                            text="Some quick example text to build on the card title and make up the bulk of the card's content."
                            link="#" />
                    </div>
                    <div class="col">
                        <div class="card">
                            <div
                                class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                                data-mdb-ripple-color="light">
                                <img
                                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
                                    class="w-100" />
                                <a href="#!">
                                    <div class="mask">
                                        <div class="d-flex justify-content-start align-items-end h-100">
                                            <h5><span class="badge bg-dark ms-2">NEW</span></h5>
                                        </div>
                                    </div>
                                    <div class="hover-overlay">
                                        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
                                    </div>
                                </a>
                            </div>
                            <div class="card-body">
                                <a href="" class="text-reset">
                                    <h5 class="card-title mb-2">Denim shirt</h5>
                                </a>
                                <a href="" class="text-reset">
                                    <p>Shirt</p>
                                </a>
                                <h6 class="mb-3 price">120$</h6>
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
export default {
    components: { NavBar, Card, Sidebar },
    name: "Home",
};
</script>

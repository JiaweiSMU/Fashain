<template>
    <NavBar />
    <div class="container">
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
                        <Card
                            title="Card 3"
                            text="Some quick example text to build on the card title and make up the bulk of the card's content."
                            link="#" />
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

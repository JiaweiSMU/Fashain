<template>
    <NavBar />

    <section class="mt-5 d-flex align-items-center justify-content-centre">
        <div class="container-fluid h-custom">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-md-9 col-lg-6 col-xl-5">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        class="img-fluid"
                        alt="Sample image" />
                </div>
                <div class="col-md-8 col-lg-6 col-xl-5 offset-xl-1">
                    <!-- Password input -->
                    <div class="container d-flex">
                        <div v-if="currentStep === 1">
                            <StepOne :data="formData" @update-data="handleUpdateData" :nextStep="nextStep" />
                        </div>
                        <div v-if="currentStep === 2">
                            <StepTwo
                                :data="formData"
                                @update-data="handleUpdateData"
                                :nextStep="nextStep"
                                :prevStep="prevStep"
                                :submitForm="submitForm" />
                        </div>
                        <div v-if="currentStep === 3">
                            <StepThree
                                :data="formData"
                                @update-data="handleUpdateData"
                                :prevStep="prevStep"
                                :submitForm="submitForm" />
                        </div>
                    </div>
                    <div class="text-center text-lg-start mt-4 pt-2">
                        <p class="small fw-bold mt-2 pt-1 mb-0">
                            Already have an account?
                            <a href="/login" class="link-danger">Log In</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import router from "../router";
import StepOne from "../components/StepOne.vue";
import StepTwo from "../components/StepTwo.vue";
import StepThree from "../components/StepThree.vue";
export default {
    components: {
        StepOne,
        StepTwo,
        StepThree,
        NavBar,
    },
    data() {
        return {
            currentStep: 1,
            message: "",
            formData: {
                username: "",
                email: "",
                password: "",
                address: "",
                phoneNumber: "",
                blockNumber: "",
                postalCode: "",
                type: false,
                recycledMaterials: "",
                organicMaterials: "",
                ecoFriendlyProduction: "",
                fairLaborPractices: "",
                ecoFriendlyPackaging: "",
                sustainabilityPolicy: "",
                sustainabilityCommitmentRating: "",
                verificationImage: [],
                rating: 0,
            },
        };
    },
    methods: {
        // Update Form
        handleUpdateData({ key, value }) {
            this.formData[key] = value;
        },

        // Step Control
        nextStep() {
            if (this.currentStep == 1 && this.formData.username && this.formData.email && this.formData.password) {
                this.currentStep++;
            } else if (this.currentStep == 2 && this.formData.postalCode && this.formData.phoneNumber) {
                this.currentStep++;
            } else if (this.currentStep == 3 && this.formData.questionnaireAnswer) {
                this.currentStep++;
            } else {
                alert("Please fill in all fields");
            }
            console.log(this.currentStep);
        },
        prevStep() {
            if (this.currentStep > 1) {
                this.currentStep--;
            }
        },

        checkSustainability() {
            var message;
            var rating;
            var score = 0;
            var answers = [
                "recycledMaterials",
                "organicMaterials",
                "ecoFriendlyProduction",
                "fairLaborPractices",
                "ecoFriendlyPackaging",
                "sustainabilityPolicy",
                "sustainabilityCommitmentRating",
            ];

            for (var i = 0; i < answers.length; i++) {
                if (this.formData[answers[i]] == "yes") {
                    score += 5;
                } else if (answers[i] == "sustainabilityCommitmentRating") {
                    score += Number(this.formData[answers[i]]);
                }
                delete this.formData[answers[i]];
            }
            if (score > 33) {
                message = "Your Sustainability Rating is 5⭐";
                rating = 5;
            } else if (score > 29 && score <= 33) {
                message = "Your Sustainability Rating is 4⭐";
                rating = 4;
            } else if (score > 24 && score <= 29) {
                message = "Your Sustainability Rating is 3⭐";
                rating = 3;
            } else if (score > 19 && score <= 24) {
                message = "Your Sustainability Rating is 2⭐";
                rating = 2;
            } else if (score > 17 && score <= 19) {
                message = "Your Sustainability Rating is 1⭐";
                rating = 1;
            } else {
                message =
                    "Consider reviewing your policies and exploring more eco-friendly options. Every step towards sustainability makes a difference!";
                rating = 0;
            }
            this.formData.rating = rating;
            this.message = message;
            console.log(this.message);
        },
        // Submit Form
        async submitForm() {
            console.log(this.formData);
            this.formData.type = this.formData.type ? "business" : "user";
            this.checkSustainability();
            const signUp = await this.$store.dispatch("signUp", this.formData);
            router.push("/");
        },
    },
};
</script>

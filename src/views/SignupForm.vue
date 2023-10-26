<template>
    <NavBar />

    <div class="container d-flex">
        <div v-if="currentStep === 1">
            <StepOne :data="formData" @update-data="handleUpdateData" :nextStep="nextStep" />
        </div>
        <div v-if="currentStep === 2">
            <StepTwo :data="formData" @update-data="handleUpdateData" :nextStep="nextStep" :prevStep="prevStep" />
        </div>
        <div v-if="currentStep === 3 && formData.type">
            <StepThree :data="formData" @update-data="handleUpdateData" :prevStep="prevStep" :submitForm="submitForm" />
        </div>
    </div>
    <section class="mt-5 d-flex align-items-center justify-content-centre">
        <div class="container-fluid h-custom">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-md-9 col-lg-6 col-xl-5">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        class="img-fluid"
                        alt="Sample image" />
                </div>
                <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <form href="#" @submit.prevent="signUp">
                        <!-- Password input -->

                        <div class="text-center text-lg-start mt-4 pt-2">
                            <button
                                type="submit"
                                class="btn btn-primary btn-lg"
                                style="padding-left: 2.5rem; padding-right: 2.5rem">
                                Register
                            </button>
                            <p class="small fw-bold mt-2 pt-1 mb-0">
                                Already have an account?
                                <a href="/login" class="link-danger">Log In</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import VueGoogleAutocomplete from "vue-google-autocomplete";
import NavBar from "../components/NavBar.vue";
import router from "../router";
import StepOne from "../components/StepOne.vue";
import StepTwo from "../components/StepTwo.vue";
import StepThree from "../components/StepThree.vue";
export default {
    // components: { NavBar, VueGoogleAutocomplete },
    components: {
        StepOne,
        StepTwo,
        StepThree,
    },
    data() {
        return {
            currentStep: 1,
            formData: {
                username: "",
                email: "",
                password: "",
                address: "",
                phoneNumber: "",
                blockNumber: "",
                postalCode: "",
                type: "",
                questionnaireAnswer: "",
            },
        };
    },
    methods: {
        // Update Form
        handleUpdateData({ key, value }) {
            this.formData[key] = value;
            console.log(this.formData);
        },

        // Step Control
        nextStep() {
            if (this.currentStep < 3) {
                this.currentStep++;
            }
        },
        prevStep() {
            if (this.currentStep > 1) {
                this.currentStep--;
            }
        },

        // Submit Form
        submitForm() {
            console.log(this.formData);
            // Submit the form data to a server or process it as needed
        },

        async signUp() {
            let business = this.type ? "business" : "user";
            try {
                await this.$store.dispatch("signUp", {
                    email: this.email,
                    password: this.password,
                    name: this.username,
                    type: business,
                    address: this.address,
                    blockNumber: this.blockNumber,
                    postalCode: this.postcode,
                    contactno: this.contactno,
                });
                router.push("/");
                console.log("User signed up successfully!");
            } catch (err) {
                console.log(err);
            }
        },
        getAddressData: function (addressData, placeResultData, id) {
            this.address = addressData;
        },
    },
};
</script>

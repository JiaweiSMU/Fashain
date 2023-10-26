import { createStore } from "vuex";
export const useUserStore = createStore({
    state() {
        return {
            user: {
                name: "",
                email: "",
                phoneNumber: "",
                errors: {
                    name: "",
                    email: "",
                    phoneNumber: "",
                },
            },
        };
    },
    mutations: {
        validateName(state, name) {
            if (name.length < 3) {
                this.state.user.errors.name = "Name must be at least 3 characters long";
            } else {
                this.errors.name = "";
            }
        },
        validateEmail(email) {
            if (email.length == 0) {
                this.errors.email = "This field is required";
            } else if (!email.includes("@")) {
                this.errors.email = "Email must contain @";
            } else {
                this.errors.email = "";
            }
        },
        validatePhoneNumber(phoneNumber) {
            if (phoneNumber.length == 0) {
                this.errors.phoneNumber = "This field is required";
            } else {
                this.errors.phoneNumber = "";
            }
        },
        validateAll() {
            this.validateName(this.name);
            this.validateEmail(this.email);
            this.validatePhoneNumber(this.phoneNumber);
        },
    },
});

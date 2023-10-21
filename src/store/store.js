import { createStore } from "vuex";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/init.js";
import { getFirestore, collection, addDoc } from "firebase/firestore";
const db = getFirestore();
const dbRef = collection(db, "users");

export const store = createStore({
    state: {
        user: {
            loggedIn: false,
            data: null,
            userType: null,
        },
    },

    getters: {
        user(state) {
            return state.user;
        },
    },

    mutations: {
        SET_LOGGED_IN(state, value) {
            state.user.loggedIn = value;
        },
        SET_USER(state, data) {
            state.user.data = data;
        },
    },

    actions: {
        async signUp(context, { email, password, name }) {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            if (response) {
                localStorage.setItem("user_uid", response.user.uid);
                updateProfile(response.user, { displayName: name });
                addDoc(dbRef, {
                    name: name,
                    email: email,
                    uid: response.user.uid,
                    cart: [],
                });
            } else {
                throw new Error("Unable to register user");
            }
        },

        async logIn(context, { email, password }) {
            const response = await signInWithEmailAndPassword(auth, email, password);
            if (response) {
                localStorage.setItem("user_uid", response.user.uid);
            } else {
                throw new Error("login failed");
            }
        },
    },
});

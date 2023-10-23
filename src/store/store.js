import { createStore } from "vuex";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/init.js";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  updateDoc,
  setDoc,
} from "firebase/firestore";
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
    /**
     * Sign up a user with the provided information.
     *
     * @param {Object} context - the context object
     * @param {Object} params - the parameters object
     * @param {string} params.email - the email of the user
     * @param {string} params.password - the password of the user
     * @param {string} params.name - the name of the user
     * @param {string} params.type - the type of the user
     * @param {string} params.address - the address of the user
     * @param {string} params.blockNumber - the block number of the user
     * @param {string} params.postcode - the postcode of the user
     * @param {string} params.contactno - the contact number of the user
     * @throws {Error} if unable to register the user
     */

    async signUp(
      context,
      { email, password, name, type, address, blockNumber, postcode, contactno }
    ) {
      const response = createUserWithEmailAndPassword(auth, email, password);
      if (response) {
        // localStorage.setItem("user_uid", response.user.uid);
        updateProfile(response.user.id, { displayName: name });
        await setDoc(dbRef, response.user.uid, {
          name: name,
          email: email,
          uid: response.user.uid,
          userType: type,
          address: address,
          blockNumber: blockNumber,
          postcode: postcode,
          contactno: contactno,
          cart: [],
        });
        // Get the 'id' property from the 'docId' object
        // const uid = docId.id;

        // // Construct a reference to the document with the 'uid' value
        // const updateUid = doc(dbRef, uid);

        // // Update the document with the 'uid' value, setting the 'uid' field to the same value
        // await updateDoc(updateUid, {
        //   uid: uid,
        // });
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

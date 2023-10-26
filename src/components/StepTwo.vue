<template>
    <div>
        <h2>Step 2: Address Details</h2>
        <div class="form-floating mb-3">
            <vue-google-autocomplete
                id="map"
                classname="form-control"
                :value="data.address"
                ref="address"
                v-on:placechanged="getAddressData"
                :country="['sg']"></vue-google-autocomplete>
            <label for="postcode">Address</label>
        </div>
        <div class="row">
            <div class="col-md">
                <div class="form-floating mb-3">
                    <input
                        type="text"
                        placeholder="Block Number"
                        required
                        :value="data.blockNumber"
                        @input="updateData('blockNumber', $event.target.value)"
                        id="blockNumber"
                        class="form-control" />
                    <label for="blockNumber">Block Number</label>
                </div>
            </div>
            <div class="col-md">
                <div class="form-floating mb-3">
                    <input
                        type="text"
                        placeholder="Postal Code"
                        required
                        :value="data.postalCode"
                        @input="updateData('postalCode', $event.target.value)"
                        id="postcode"
                        class="form-control" />
                    <label for="postcode">Postal Code</label>
                </div>
            </div>
        </div>
        <div class="form-floating mb-3">
            <input
                type="text"
                placeholder="Contact No."
                required
                :value="data.phoneNumber"
                @input="updateData('phoneNumber', $event.target.value)"
                id="contactno"
                class="form-control" />
            <label for="contactno">Contact No.</label>
        </div>
        <div class="d-flex justify-content-end">
            <button class="btn btn-success me-2" @click="prevStep">Previous</button>
            <button class="btn btn-success" @click="nextStep">Next</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ["data", "nextStep", "prevStep"],
    methods: {
        updateData(key, value) {
            this.$emit("update-data", { key, value });
        },
    },
};
</script>

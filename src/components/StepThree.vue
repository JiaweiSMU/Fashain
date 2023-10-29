<template>
    <div>
        <!-- this one is the section header -->
        <div class="mb-4">
            <h2 class="text-success mb-3">Sustainability Questionnaire</h2>
            <h5 class="text-success mb-3">Materials ♻️</h5>
            <!-- this one is like the questions for each section -->

            <p>Are your products made from recycled or upcycled materials?</p>
            <div class="form-group mb-3">
                <div class="form-check form-check-inline">
                    <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="yes"
                        @change="updateData('recycledMaterials', $event.target.value)" />
                    <label class="form-check-label" for="inlineRadio1">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                    <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="no"
                        @change="updateData('recycledMaterials', $event.target.value)" />
                    <label class="form-check-label" for="inlineRadio2">No</label>
                </div>
            </div>
            <!-- 2nd question -->
            <p>Do you use organic, non-toxic, and/or renewable materials?</p>
            <div class="form-group mb-3">
                <div class="form-check form-check-inline">
                    <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="yes"
                        @change="updateData('organicMaterials', $event.target.value)" />
                    <label class="form-check-label" for="inlineRadio1">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                    <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="no"
                        @change="updateData('organicMaterials', $event.target.value)" />
                    <label class="form-check-label" for="inlineRadio2">No</label>
                </div>
            </div>
            <!-- closing div tag for section header     -->
            <div class="mb-4">
                <h5 class="text-success mb-3">Production 🌱</h5>
                <p>Is your manufacturing process eco-friendly?</p>
                <div class="form-check form-check-inline">
                    <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="yes"
                        @change="updateData('ecoFriendlyProduction', $event.target.value)" />
                    <label class="form-check-label" for="inlineRadio1">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                    <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="no"
                        @change="updateData('ecoFriendlyProduction', $event.target.value)" />
                    <label class="form-check-label" for="inlineRadio2">No</label>
                </div>
            </div>
            <div class="mb-4">
                <h5 class="text-success mb-3">Supply Chain & Labor Practices 🙆‍♂️</h5>

                <p>Do you have fair labor practices?</p>
                <div class="form-check form-check-inline">
                    <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="yes"
                        @change="updateData('fairLaborPractices', $event.target.value)" />
                    <label class="form-check-label" for="inlineRadio1">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                    <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="no"
                        @change="updateData('fairLaborPractices', $event.target.value)" />
                    <label class="form-check-label" for="inlineRadio2">No</label>
                </div>
            </div>
            <div class="mb-4">
                <h5 class="text-success mb-3">Packaging & Distribution 📦</h5>

                <p>Do you use eco-friendly packaging?</p>
                <div class="form-check form-check-inline">
                    <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="yes"
                        @change="updateData('ecoFriendlyPackaging', $event.target.value)" />
                    <label class="form-check-label" for="inlineRadio1">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                    <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="no"
                        @change="updateData('ecoFriendlyPackaging', $event.target.value)" />
                    <label class="form-check-label" for="inlineRadio2">No</label>
                </div>
            </div>
            <div class="mb-4">
                <h5 class="text-success mb-3">Company Policies 📑</h5>

                <p>Do you have a formal sustainability policy?</p>
                <div class="form-check form-check-inline">
                    <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="yes"
                        @change="updateData('sustainabilityPolicy', $event.target.value)" />
                    <label class="form-check-label" for="inlineRadio1">Yes</label>
                </div>
                <div class="form-check form-check-inline mb-3">
                    <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="no"
                        @change="updateData('sustainabilityPolicy', $event.target.value)" />
                    <label class="form-check-label" for="inlineRadio2">No</label>
                </div>

                <div class="form-group mb-3">
                    <label for="sustainabilityCommitmentRating"
                        >How would you rate your company's commitment to sustainability on a scale of 1 to 5?</label
                    >
                    <select
                        class="form-control mt-3"
                        id="sustainabilityCommitmentRating"
                        name="sustainabilityCommitmentRating"
                        :value="data.sustainabilityCommitmentRating"
                        @change="updateData('sustainabilityCommitmentRating', $event.target.value)">
                        <option value="Select an Option" disabled selected hidden>--Select an Option--</option>
                        <option value="1">1 (Lowest Commitment)</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5 (Highest Commitment)</option>
                    </select>
                </div>
                <div class="mb-4">
                    <h5 class="text-success mb-3">Verification Images 📸</h5>

                    <div class="form-group">
                        <label for="verificationImage" class="mb-2">Upload image(s) for verification:</label>
                        <input
                            type="file"
                            class="form-control"
                            id="verificationImage"
                            name="verificationImage"
                            accept="image/*"
                            multiple
                            @change="updateData('verificationImages', $event.target.files)" />
                        <small class="form-text text-muted">You can upload multiple images for verification.</small>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-end">
            <button class="btn btn-outline-success me-2" @click="prevStep">Previous</button>

            <button @click="submitForm" class="btn btn-success">Submit</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ["data", "prevStep", "submitForm"],
    methods: {
        updateData(key, value) {
            this.$emit("update-data", { key, value });
        },
    },
};
</script>

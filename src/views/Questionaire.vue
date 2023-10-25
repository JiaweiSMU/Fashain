<template>
    <div class="container py-5">
        <div class="row justify-content-md-center">
            <div class="col-lg-8">
                <div class="card border-0 shadow">
                    <div class="card-body p-5">
                        <h2 class="my-4 text-success" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"><i class="bi bi-leaf"></i> Sustainable Business Questionnaire</h2>
                        <form id="sustainabilityForm">
                           
                            <!-- this one is the section header -->
                            <div class="mb-4">
                                <h5 class="text-success mb-3">Materials ♻️</h5>
                                <!-- this one is like the questions for each section -->
                                <div class="form-group mb-3">
                                    <label for="recycledMaterials">Are your products made from recycled or upcycled materials?</label>
                                    <select class="form-control" id="recycledMaterials" name="recycledMaterials" v-model="form.recycledMaterials">
                                        <option value="Select an Option" disabled selected hidden>--Select an Option--</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                                <!-- 2nd question -->
                                <div class="form-group">
                                    <label for="organicMaterials">Do you use organic, non-toxic, and/or renewable materials?</label>
                                    <select class="form-control" id="organicMaterials" name="organicMaterials" v-model="form.organicMaterials">
                                        <option value="Select an Option" disabled selected hidden>--Select an Option--</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                            <!-- closing div tag for section header     -->
                            </div>
                                
                            <div class="mb-4">
                                <h5 class="text-success mb-3">Production 🌱</h5>

                                <div class="form-group">
                                    <label for="ecoFriendlyProduction">Is your manufacturing process eco-friendly?</label>
                                    <select class="form-control" id="ecoFriendlyProduction" name="ecoFriendlyProduction" v-model="form.ecoFriendlyProduction">
                                        <option value="Select an Option" disabled selected hidden>--Select an Option--</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>

                            </div>


                            <div class="mb-4">
                                <h5 class="text-success mb-3">Supply Chain & Labor Practices 🙆‍♂️</h5>

                                <div class="form-group">
                                    <label for="fairLaborPractices">Do you have fair labor practices?</label>
                                    <select class="form-control" id="fairLaborPractices" name="fairLaborPractices" v-model="form.fairLaborPractices">
                                        <option value="Select an Option" disabled selected hidden>--Select an Option--</option>
                                        <option value="yes" selected>Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>

                            </div>

                            <div class="mb-4">
                                <h5 class="text-success mb-3">Packaging & Distribution 📦</h5>

                                <div class="form-group">
                                    <label for="ecoFriendlyPackaging">Do you use eco-friendly packaging?</label>
                                    <select class="form-control" id="ecoFriendlyPackaging" name="ecoFriendlyPackaging" v-model="form.ecoFriendlyPackaging">
                                        <option value="Select an Option" disabled selected hidden>--Select an option--</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>

                            </div>

                            <div class="mb-4">
                                <h5 class="text-success mb-3">Company Policies 📑</h5>
                                
                                <div class="form-group">
                                    <label for="sustainabilityPolicy">Do you have a formal sustainability policy?</label>
                                    <select class="form-control" id="sustainabilityPolicy" name="sustainabilityPolicy" v-model="form.sustainabilityPolicy">
                                        <option value="Select an Option" disabled selected hidden>--Select an Option---</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
        
                                <div class="form-group">
                                    <label for="sustainabilityCommitmentRating">How would you rate your company's commitment to sustainability on a scale of 1 to 5?</label>
                                    <select class="form-control" id="sustainabilityCommitmentRating" name="sustainabilityCommitmentRating" v-model="form.sustainabilityCommitmentRating">
                                        <option value="Select an Option" disabled selected hidden>--Select an Option--</option>
                                        <option value="1">1 (Lowest Commitment)</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5 (Highest Commitment)</option>
                                    </select>
                                </div>
                            
                            </div>

                            <div class="mb-4">
                                <h5 class="text-success mb-3">Verification Images 📸</h5>
                                
                                <div class="form-group">
                                    <label for="verificationImage" class="mb-2">Upload image(s) for verification:</label>
                                    <input type="file" class="form-control" id="verificationImage" name="verificationImage" accept="image/*" multiple @change="previewImages">
                                    <small class="form-text text-muted">You can upload multiple images for verification.</small>
                                </div>
                                
                                <!-- Image previews section -->
                                <div class="image-previews">
                                    <img v-for="src in imagePreviews" :src="src" alt="Uploaded image preview" class="img-thumbnail m-2" style="max-width: 150px;">
                                </div>
                            </div>
                            
                            <div class="mt-5">
                                <div class="d-flex align-items-center">
                                    <button class="btn btn-success me-3" v-on:click.prevent="checkSustainability()">Submit</button>
                                    <h5 class="mb-0 text-success" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">{{ sustainabilityRating }}</h5>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                recycledMaterials: 'Select an Option',
                organicMaterials: 'Select an Option',
                ecoFriendlyProduction: 'Select an Option',
                fairLaborPractices: 'Select an Option',
                ecoFriendlyPackaging: 'Select an Option',
                sustainabilityPolicy: 'Select an Option',
                sustainabilityCommitmentRating: 'Select an Option'
            },

            sustainabilityRating: '',
            imagePreviews: []
        };
    },
    methods: {
        checkSustainability() {
            var message;
            var carried;
            var score = 0;
            var answers = this.form;
            for (let key in answers) {
                var regex = /^[A-Za-z]+$/;
                if (answers[key].match(regex)) {
                    if (answers[key] == 'yes') {
                        score += 5;
                    }
                }
                else {
                    score += Number(answers[key])
                }
            }

                // console.log(score)

                if (score > 33) {
                    message = 'Your Sustainability Rating is 5⭐'
                    carried = 5;
                }

                else if (score > 29 && score <= 33) {
                    message = 'Your Sustainability Rating is 4⭐'
                    carried = 4;
                }

                else if (score > 24 && score <= 29) {
                    message = 'Your Sustainability Rating is 3⭐'
                    carried = 3;
                }

                else if (score > 19 && score <= 24) {
                    message = 'Your Sustainability Rating is 2⭐'
                    carried = 2;
                }

                else if (score > 17 && score <= 19) {
                    message = 'Your Sustainability Rating is 1⭐'
                    carried = 1;
                }

                else {
                    message = 'Consider reviewing your policies and exploring more eco-friendly options. Every step towards sustainability makes a difference!'
                    carried = 0;
                }

                console.log(carried);
                this.sustainabilityRating = message;
        },

        previewImages(event) {
            const files = event.target.files;

            for (let i = 0; i < files.length; i++) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.imagePreviews.push(e.target.result); // This pushes each new image to the existing array
                };
                reader.readAsDataURL(files[i]);
            }
        }
    }
};
</script>

<style scoped>
h2 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
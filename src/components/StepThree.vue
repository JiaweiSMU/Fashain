<template>
    <div>
        <h2>Step 3: Questionnaire</h2>
        <p>Do you enjoy using Vue.js?</p>

        <input type="radio" :value="data.questionnaireAnswer" @change="updateData('questionnaireAnswer', 'Yes')" />
        <input type="radio" :value="data.questionnaireAnswer" @change="updateData('questionnaireAnswer', 'No')" />
        <button @click="prevStep">Previous</button>
        <button @click="submitForm">Submit</button>
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

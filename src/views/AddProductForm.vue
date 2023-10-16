<template>
    <NavBar />

    <form class="container mt-5">
        <div class="row">
            <div class="col-4">
                <div class="card text-center mb-3">
                    <div class="card-body">
                        <div
                            class="p-2 p-12 bg-gray-100 border border-gray-300"
                            @dragover="dragover"
                            @dragleave="dragleave"
                            @drop="drop">
                            <input
                                type="file"
                                multiple
                                name="fields[assetsFieldHandle][]"
                                id="assetsFieldHandle"
                                class="w-px h-px opacity-0 overflow-hidden absolute"
                                @change="onChange"
                                ref="file"
                                accept=".pdf,.jpg,.jpeg,.png" />

                            <label for="assetsFieldHandle" class="block cursor-pointer">
                                <div>
                                    <a class="btn btn-success">Select photos</a>
                                    <p>or drag photos here</p>
                                </div>
                            </label>
                            <ul class="mt-4 list-group list-group-horizontal" v-if="this.filelist.length" v-cloak>
                                <li class="text-sm p-1 list-group-item" v-for="url in urlList" :key="url">
                                    <img class="h-auto w-auto" v-if="url" :src="url" /><button
                                        class="ml-2 btn btn-sm btn-danger"
                                        type="button"
                                        @click="remove(filelist.indexOf(file))"
                                        title="Remove file">
                                        remove
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-8">
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">Category</h5>
                        <select class="form-select form-select-md m-0" aria-label=".form-select-lg example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>
</template>
<script>
import NavBar from "../components/NavBar.vue";

export default {
    delimiters: ["${", "}"], // Avoid Twig conflicts
    data() {
        return { filelist: [], urlList: [] }; // Store our uploaded files
    },
    methods: {
        onChange() {
            this.filelist = [...this.$refs.file.files];

            // Create a URL for each file
            this.filelist.forEach((file) => {
                this.urlList.push(URL.createObjectURL(file));
            });
        },
        remove(i) {
            this.filelist.splice(i, 1);
            this.urlList.splice(i, 1);
        },
        dragover(event) {
            event.preventDefault();
            // Add some visual fluff to show the user can drop its files
            if (!event.currentTarget.classList.contains("bg-green-300")) {
                event.currentTarget.classList.remove("bg-gray-100");
                event.currentTarget.classList.add("bg-green-300");
            }
        },
        dragleave(event) {
            // Clean up
            event.currentTarget.classList.add("bg-gray-100");
            event.currentTarget.classList.remove("bg-green-300");
        },
        drop(event) {
            event.preventDefault();
            this.$refs.file.files = event.dataTransfer.files;
            this.onChange(); // Trigger the onChange event manually
            // Clean up
            event.currentTarget.classList.add("bg-gray-100");
            event.currentTarget.classList.remove("bg-green-300");
        },
    },
    components: { NavBar },
};
</script>

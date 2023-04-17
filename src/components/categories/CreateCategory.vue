<template>
    <div class="min-h-screen bg-gray-600 flex items-center justify-center">
        <div>
            <div class="mb-24 text-white text-lg font-bold uppercase">Create category</div>
            <form @submit.prevent="submit" class="">
                <div class="flex flex-col">
                    <label for="name" class="text-xs text-white mb-2">Category Name</label>
                    <input type="text" v-model="name" placeholder="Enter category name" class="px-3 py-3 text-xs">
                    <span v-if="errors?.name" class="text-red-700 text-xs mt-2">{{ errors.name[0] }}</span>
                </div>
                <div class="mt-2">
                    <input type="submit" value="Create" class="cursor-pointer bg-blue-600 text-white rounded-md text-xs px-2 py-2">
                </div>
            </form>
        </div>
    </div>
</template>


<script>
import req from "@/services/Request.js";

export default {
    name: 'create-category',
    data() {
        return {
            name: null,
            errors: null
        }
    },

    methods: {
        submit() {
            req.post('categories', {name: this.name})
                .then(({data}) => {
                    this.$router.push({name: 'CategoryIndex'});
                })
                .catch((err) => {
                    this.errors = err.response.data.errors;
                })
        }
    }
}
</script>
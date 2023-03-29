<template>
    <div>
        <form action="" @submit.prevent="register"
              class="bg-gray-600 max-w-7xl flex flex-col items-center justify-center px-28 py-14">
            <h3 class="text-sm text-white font-bold mb-4">Register</h3>
            <div class="flex flex-col space-y-2 items-start w-full md:w-2/3">
                <label for="" class="text-xs text-white">Name</label>
                <input type="text" placeholder="Enter your name" v-model="form.name"
                       class="px-2 py-2 text-xs w-5/6 md:w-2/3">
                <span v-if="errors?.name" class="text-red-700 text-xs mt-2">{{ errors.name[0] }}</span>
            </div>
            <div class="flex flex-col space-y-2 items-start w-full md:w-2/3 mt-3">
                <label for="" class="text-xs text-white">Email</label>
                <input type="email" placeholder="Enter your email" v-model="form.email"
                       class="px-2 py-2 text-xs w-5/6 md:w-2/3">
                <span class="text-xs text-red-700 mt-2" v-if="errors?.email">{{ errors.email[0] }}</span>
            </div>
            <div class="flex flex-col space-y-2 items-start w-full md:w-2/3 mt-3">
                <label for="" class="text-xs text-white">password</label>
                <input type="password" placeholder="Enter your password" v-model="form.password"
                       class="px-2 py-2 text-xs w-5/6 md:w-2/3">
                <span class="text-xs text-red-700 mt-2" v-if="errors?.password">{{ errors.password[0] }}</span>
            </div>
            <div class="flex flex-col space-y-2 items-start w-full md:w-2/3 mt-3">
                <label for="" class="text-xs text-white">Confirm Password</label>
                <input type="password" placeholder="Confirm your password" v-model="form.password_confirmation"
                       class="px-2 py-2 text-xs w-5/6 md:w-2/3">
            </div>
            <div class="flex flex-col space-y-2 items-start w-full md:w-2/3 mt-3">
                <input type="submit" value="register" class="px-2 py-2 font-mono bg-white cursor-pointer text-gray-700">
            </div>
        </form>
    </div>
</template>

<script>
import req from "@/services/Request.js";

export default {
    name: "Register",
    data() {
        return {
            form: {
                name: null,
                email: null,
                password: null,
                password_confirmation: null,
            },
            errors: null
        }
    },

    methods: {
        register() {
            this.$store.dispatch('register', this.form)
                .then(() => {
                    this.$router.push({name: 'dashboard'});
                })
                .catch(err => {
                   this.errors = err.response.data.errors;
                });
        }
    }
}
</script>

<style scoped>

</style>
<template>
  <div class="py-10 flex flex-col items-center justify-center bg-gray-300">
    <div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
      <div class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">Edit Product {{ id }}</div>
      <div class="mt-10">
        <form action="#" @submit.prevent="update">
          <div class="flex flex-col mb-6">
            <label for="image" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Image</label>
            <div class="relative">

              <input id="image" type="text" v-model="form.image"
                     name="email"
                     class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Enter Image Link" />
            </div>
          </div>
          <div class="flex flex-col mb-6">
            <label for="name" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Name</label>
            <div class="relative">

              <input id="name" type="text" v-model="form.name"
                     class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                     placeholder="Enter Product name" />
            </div>
          </div>
          <div class="flex flex-col mb-6">
            <label for="description" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Description</label>
            <div class="relative">

              <input id="description" type="text" v-model="form.description"
                     class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                     placeholder="Describe product" />
            </div>
          </div>
          <div class="flex flex-col mb-6">
            <label for="price" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Price</label>
            <div class="relative">

              <input id="price" type="text" v-model="form.price"
                     class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                     placeholder="product price" />
            </div>
          </div>
          <div class="flex flex-col mb-6">
            <label for="category_id" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Category ID</label>
            <div class="relative">

              <input id="category_id" type="text" v-model="form.category_id"
                     class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                     placeholder="product category_id" />
            </div>
          </div>

          <div class="flex w-full">
            <button type="submit" class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
              <span class="mr-2 uppercase">Edit Product</span>
              <span>
              <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import req from "@/services/Request.js";

export default {
  name: "edit-product",
  props: ['id'],
  created() {
    req.get(`products/${this.id}`)
        .then(res => {
          this.form = res.data;
        }).catch(err => {
      console.log(err.response.data);
    })
  },
  data() {
    return {
      form: {
        image: null,
        name: null,
        description: null,
        price: null,
        category_id: null
      }
    }
  },
  methods: {
    update() {
      req.put(`products/${this.id}`, this.form)
          .then(res => {
            this.$router.push({name: 'show-product', params: {id: this.id}})
          })
          .catch(err => {
            console.log('failed');
          })
    }
  }
}
</script>

<style scoped>

</style>
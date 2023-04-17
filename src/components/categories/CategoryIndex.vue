<template>
  <div class="min-h-screen flex flex-col items-center justify-center space-y-2">
      <div class="bg-blue-600 rounded-md flex justify-between w-96 px-3 py-3 items-center" v-for="category in categories" :key="category.id">
          <div class="flex items-center">
              <span class="w-8 h-8 bg-black rounded-full text-white text-xs text-center pt-2 mr-4">{{ category.id }}</span>
              <p class="text-white text-xs">{{ category.name }}</p>
          </div>

          <div class="text-xs">
              <router-link :to="{name: 'EditCategory', params: {id: category.id}}" class="bg-white text-blue-700 px-3 py-3 rounded-md mr-2">Edit</router-link>
              <a @click.prevent="remove(category.id)" class="bg-red-600 text-white px-3 py-3 rounded-md">Delete</a>
          </div>
      </div>
  </div>
</template>

<script>

import req from "@/services/Request.js";

export default {
    name: "CategoryIndex",
    created() {
       req.get('categories')
           .then(({data}) => this.categories = data);
    },
    data() {
        return {
            categories: null
        }
    },

    methods: {
        remove(index) {
            req.delete(`categories/${index}`)
                .then(res => {
                    this.categories.splice(index, 1);
                }).catch(err => {
                console.log(err.response.data);
            })
        }
    }
}
</script>

<style scoped>

</style>
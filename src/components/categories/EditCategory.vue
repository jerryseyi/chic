<template>
  <div class="bg-gray-600 min-h-screen flex items-center justify-center">
      <form @submit.prevent="update" class="flex flex-col" v-if="category">
          <label for="" class="text-white text-sm mb-2">Category Name</label>
          <input type="text" v-model="category.name" class="px-3 py-3 text-xs">
          <button type="submit" class="bg-blue-600 px-3 py-3 rounded-md mt-2 text-white">Update</button>
      </form>
  </div>
</template>

<script>
import req from "@/services/Request.js";

export default {
    name: "EditCategory",
    props: ['id'],

    created() {
        req.get(`categories/${this.id}`)
            .then(res => {
              this.category = res.data;
            })
    },

    data() {
        return {
            category: null
        }
    },

    methods: {
      update() {
          req.patch(`categories/${this.category.id}`, this.category)
              .then(res => {
                  this.$router.push({name: 'CategoryIndex'});
              }).catch(err => {
              console.log(err.response.data);
          });
      }
    }
}
</script>

<style scoped>

</style>
<template>
  <div>
    <div class="bg-purple-700 text-white items-center justify-items-start px-8 py-4 font-bold text-lg">Products</div>
    <products-card :products="products"/>
  </div>
</template>

<script>
import ProductsCard from "../../shared/dashboard/products-card.vue";
import products from "../../data/products.js";

export default {
  name: "chic-products",
  components: {ProductsCard},
  data() {
    return {
      products: products
    }
  },
  computed: {

  }
}
</script>

<style scoped>

</style>
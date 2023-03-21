<template>
  <div>
    <chic-hero />
    <products-card :products="products"/>
  </div>
</template>

<script>
import ChicHero from "../shared/chic-hero.vue";
import ProductsCard from "../shared/dashboard/products-card.vue";
import products from "../data/products.js";

export default {
  name: "dashboard",
  components: {ProductsCard, ChicHero},
  data() {
    return {
      products: products
    }
  }
}
</script>

<style scoped>

</style>
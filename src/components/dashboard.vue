<template>
  <div>
    <chic-hero />
    <products-card :products="products"/>
  </div>
</template>

<script>
import ChicHero from "../shared/chic-hero.vue";
import ProductsCard from "../shared/dashboard/products-card.vue";
import req from '@/services/Request';

export default {
  name: "dashboard",
  components: {ProductsCard, ChicHero},
  data() {
    return {
      products: this.$store.getters.getProducts
    }
  }
}
</script>

<style scoped>

</style>
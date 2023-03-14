<template>
  <div>
    <chic-hero />
    <products-card :products="products"/>
  </div>
</template>

<script>
import ChicHero from "../shared/chic-hero.vue";
import ProductsCard from "../shared/dashboard/products-card.vue";

export default {
  name: "dashboard",
  components: {ProductsCard, ChicHero},
  data() {
    return {
      products: [
        {
          id: 1,
          image: '',
          name: 'Smart Light',
          description: 'A proper smart light for your home',
          price: 40
        },
        {
          id: 2,
          image: '',
          name: 'Outdoor Wall Light',
          description: 'A proper outdoor wall light for your home',
          price: 100
        },
        {
          id: 3,
          image: '',
          name: 'Decoration Light',
          description: 'A proper decoration light for your home',
          price: 70
        },
        {
          id: 4,
          image: '',
          name: 'Modern Chandeliers',
          description: 'A proper modern chandeliers light for your home',
          price: 4000
        },
        {
          id: 5,
          image: '',
          name: 'Crystal Chandeliers',
          description: 'A proper crystal chandeliers light for your home',
          price: 2000
        },
        {
          id: 6,
          image: '',
          name: 'Traditional Chandeliers',
          description: 'A proper traditional chandeliers light for your home',
          price: 40
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
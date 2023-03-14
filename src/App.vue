<template>
  <chic-header></chic-header>

  <RouterView />
</template>
<script>
import ChicHeader from "./shared/chic-header.vue";
import ChicHero from "./shared/chic-hero.vue";

export default {
  components: {
    ChicHero,
    ChicHeader
  }
}
</script>
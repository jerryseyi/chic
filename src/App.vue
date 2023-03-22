<template>
  <div class="">
    <chic-header></chic-header>
    <RouterView />
    <chic-footer />
  </div>
</template>
<script>
import ChicHeader from "./shared/chic-header.vue";
import ChicHero from "./shared/chic-hero.vue";
import ChicFooter from "./shared/chic-footer.vue";

export default {
  components: {
    ChicFooter,
    ChicHero,
    ChicHeader
  }
}
</script>
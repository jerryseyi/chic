<template>

  <header id="up" class="bg-center bg-hero-img bg-no-repeat bg-center bg-cover h-screen relative">
    <!-- Overlay Background + Center Control -->
    <div class="h-screen bg-opacity-50 bg-black flex items-center justify-center" style="background:rgba(0,0,0,0.5);">
      <div class="mx-2 text-center">
        <h1 class="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">
          <span class="text-white">Right</span> Place To
        </h1>
        <h2 class="text-gray-200 font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight">
          Get a <span class="text-white">Better</span> and <span class="text-white">Lightnings</span> and Designs
        </h2>
        <div class="inline-flex">
          <router-link to="/products" class="p-2 my-5 mx-2 bg-indigo-700 hover:bg-indigo-800 font-bold text-white rounded border-2 border-transparent
          hover:border-indigo-800 shadow-md transition duration-500 md:text-xl">
            Our Products
          </router-link>
          <a href="#about"><button class="p-2 my-5 mx-2 bg-transparent border-2 bg-indigo-200 bg-opacity-75 hover:bg-opacity-100 border-indigo-700 rounded hover:border-indigo-800 font-bold text-indigo-800 shadow-md transition duration-500 md:text-lg">Learn More</button></a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "chic-hero"
}
</script>

<style scoped>

</style>
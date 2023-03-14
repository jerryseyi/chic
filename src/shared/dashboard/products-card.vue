<template>
  <!-- component -->
  <div tabindex="0" class="focus:outline-none">
    <!-- Remove py-8 -->
    <div class="mx-auto container py-8">
      <div class="flex flex-wrap items-center justify-items-start">
        <div tabindex="0" class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8" v-for="product in products" :key="product.id">
          <div>
            <img alt="person capturing an image" src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png" tabindex="0" class="focus:outline-none w-full h-44" />
          </div>
          <div class="bg-white">
            <div class="flex items-center justify-between px-4 pt-4">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" tabindex="0" class="focus:outline-none" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                </svg>
              </div>
              <div class="bg-yellow-200 py-1.5 px-6 rounded-full">
                <p tabindex="0" class="focus:outline-none text-xs text-yellow-700">Featured</p>
              </div>
            </div>
            <div class="p-4">
              <div class="flex items-center">
                <h2 tabindex="0" class="focus:outline-none text-lg font-semibold">{{ product.name }}</h2>
              </div>
              <p tabindex="0" class="focus:outline-none text-xs text-gray-600 mt-2">{{ product.description }}</p>
              <div class="flex mt-4">
                <div>
                  <p tabindex="0" class="focus:outline-none text-sm text-gray-600 px-2 bg-gray-200 font-bold py-1">{{ product.price }}$</p>
                </div>
              </div>
              <div class="flex items-center justify-between py-4">
                <h2 tabindex="0" class="focus:outline-none text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
                <h3 tabindex="0" class="focus:outline-none text-indigo-700 text-xl font-semibold"></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "products-card",
  props: ['products']
}
</script>

<style scoped>

</style>
<template>
  <!-- component -->
  <div class="bg-white">
    <div class="border py-3 px-6">
      <div class="flex justify-between">
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
          <router-link to="/" class="ml-2 font-semibold text-[#252C32]">Chic</router-link>
        </div>

        <div class="ml-6 flex flex-1 gap-x-3">
          <div class="flex cursor-pointer select-none items-center gap-x-2 rounded-md border bg-[#4094F7] py-2 px-4 text-white hover:bg-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <router-link to="/categories/create" class="text-sm font-medium">Categories</router-link>
          </div>

          <input type="text" class="w-full rounded-md border border-[#DDE2E4] px-3 py-2 text-sm" />
        </div>

        <div class="ml-2 flex">

          <div class="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
            <span class="text-sm font-medium">Favorites</span>
          </div>

          <div class="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100" v-if="authenticated">
            <div class="relative">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              <span class="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">3</span>
            </div>
            <span class="text-sm font-medium">Cart</span>
          </div>

          <div class="flex" v-if="! authenticated">
            <div class="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100">
              <router-link to="/register" class="text-xs font-medium">Register</router-link>
            </div>
            <div class="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100">
              <router-link to="/login" class="text-xs font-medium">Sign in</router-link>
            </div>
          </div>

          <div class="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100" v-if="authenticated">
            <p class="text-xs font-light">{{ username }}</p>
          </div>
          <div class="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100" v-if="authenticated">
            <a @click.prevent="logout" class="text-xs font-light">Logout</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "chic-header",
  mounted() {
  },
  data() {
    return {
    }
  },

    methods: {
      logout() {
          this.$store.dispatch('logout')
              .then(() => this.$router.push({name: 'Login'}));
      }
    },
  computed: {
    username() {
      return this.$store.state.user?.name;
    },
    authenticated() {
      return this.$store.state.authenticated;
    }
  }
}
</script>

<style scoped>

</style>
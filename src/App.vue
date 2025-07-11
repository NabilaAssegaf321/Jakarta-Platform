<template>
  <div id="app" class="min-h-screen bg-gray-100">
    <nav class="bg-jakarta-primary text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <router-link to="/" class="text-xl font-bold">Jakarta Platform</router-link>
        <div class="space-x-4">
          <router-link to="/" class="hover:text-gray-300">Home</router-link>
          <router-link to="/dashboard" class="hover:text-gray-300">Dashboard</router-link>
        </div>
      </div>
    </nav>
    
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>￼Enter

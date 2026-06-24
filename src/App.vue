<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script setup lang="ts">
// Root component
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: #0a0a0a;
  color: #ffffff;
  min-height: 100vh;
}

.app {
  min-height: 100vh;
}
</style>

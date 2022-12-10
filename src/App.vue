<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer class="bg-dark text-light">
    <p>
      <img src="https://cdn.pixabay.com/photo/2019/04/10/20/00/heart-4118022_1280.png" alt="" height="23">
      NerdWorks
      <img src="https://cdn.pixabay.com/photo/2019/04/10/20/00/heart-4118022_1280.png" alt="" height="23">
    </p>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  place-content: bottom;
  height: 40px;
}
</style>

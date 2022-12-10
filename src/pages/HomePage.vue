<template>
  <div class="div container-fluid">
    <section class="row justify-content-center">
      <div class="div col-12 col-md-3 p-3">
        <section class="row justify-content-center align-items-center g-2 p-2">
          <Profile :profile="profile" />
        </section>
      </div>
      <div class="div col-12 col-md-6">
        posts
      </div>
      <div class="div col-12 col-md-3 p-3">
        <Com :coms="coms" />
      </div>
    </section>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { AppState } from "../AppState.js";
import { comService } from "../services/ComService.js"
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  setup() {

    async function getComs() {
      try {
        await comService.getComs()
      } catch (error) {
        Pop.error(error)
        logger.error(error)
      }
    }

    onMounted(() => {
      getComs();
    })
    return {
      profile: computed(() => AppState.account),
      coms: computed(() => AppState.coms)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>

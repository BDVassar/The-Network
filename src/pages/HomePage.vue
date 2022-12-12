<template>
  <div class="container-fluid">
    <section class="row justify-content-between">
      <div v-if="user.isAuthenticated" class="col-12 col-md-3 p-3 elevation-5">
        <section class="row justify-content-center align-items-center g-2 p-2 sticky-top">
          <Profile :profile="profile" />
        </section>
      </div>
      <div v-else class="col-12 col-md-3 p-3">
        <section v-if="coms != null" class="row justify-content-center align-items-center g-5 p-5">
          <Com :coms="coms" />
        </section>
      </div>
      <div v-if="profile" class="div col-12 col-md-6">
        <section v-if="user.isAuthenticated" class="row justify-content-centers p-2">
          <CreatePost :profile="profile" />
        </section>
        <section v-if="profile" v-for="p in posts" class="row justify-content-center p-2">
          <Posts :post="p" :profile="profile" />
        </section>
        <section class="row justify-content-between text-center">
          <div class="col-3">
            <button class="btn btn-outline-primary" v-if="(page > 1)" @click="changePage(page - 1)">Newer</button>
            <button class="btn btn-outline-primary" v-else disabled>Newer</button>
          </div>
          <div class="col-3">
            <button class="btn btn-outline-primary" @click="changePage(page + 1)">Older</button>
          </div>
        </section>
      </div>
      <div class="col-12 col-md-3 p-3">
        <section v-if="coms != null" class="row justify-content-center align-items-center g-5 p-5">
          <Com :coms="coms" />
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { AppState } from "../AppState.js";
import { comService } from "../services/ComService.js"
import { postService } from "../services/PostService.js"
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

    async function getPosts() {
      try {
        await postService.getPosts()
      } catch (error) {
        Pop.error(error)
        logger.error(error)
      }
    }

    onMounted(() => {
      getComs();
      getPosts();
    })
    return {
      user: computed(() => AppState.user),
      profile: computed(() => AppState.account),
      coms: computed(() => AppState.coms),
      posts: computed(() => AppState.posts),
      page: computed(() => AppState.page),

      async changePage(page) {
        try {
          await postService.changePage(page)
        } catch (error) {
          Pop.error(error)
          logger.error(error)
        }
      }
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

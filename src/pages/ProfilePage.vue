<template>
  <div class="container-fluid">
    <section class="row justify-content-between">
      <div class="col-12 col-md-3 p-3 elevation-5">
        <section class="row justify-content-center align-items-center g-2 p-2 sticky-top">
          <Profile :profile="profile" />
        </section>
      </div>
      <div class="div col-12 col-md-6">
        <section class="row justify-content-centers p-2">
          <ProfileCard :profile="profile" :activeProfile="activeProfile" />
        </section>
        <section v-if="profile" v-for="p in posts" class="row justify-content-center p-2">
          <Posts :post="p" :profile="profile" />
        </section>
        <section class="row justify-content-between text-center">
          <div class="col-3">
            <button class="btn btn-outline-primary" v-if="(page > 1)"
              @click="changeProfilePage(page - 1)">Newer</button>
            <button class="btn btn-outline-primary" v-else disabled>Newer</button>
          </div>
          <div class="col-3">
            <button class="btn btn-outline-primary" v-if="(page < maxPage)"
              @click="changeProfilePage(page + 1)">Older</button>
            <button class="btn btn-outline-primary" v-else disabled>Older</button>
          </div>
        </section>
      </div>
      <div class="col-12 col-md-3 p-3">
        <section v-if="coms != null" class="row justify-content-center align-items-center g-5 mt-5 p-5">
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
import { profileService } from "../services/ProfileService.js"
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();

    async function getComs() {
      try {
        await comService.getComs()
      } catch (error) {
        Pop.error(error)
        logger.error(error)
      }
    }

    async function getPostsById() {
      try {
        await postService.getPostsById(route.params.id)
      } catch (error) {
        Pop.error(error)
        logger.error(error)
      }
    }

    async function getProfileByProfileId() {
      try {
        await profileService.getProfileBryProfileId(route.params.id)
      } catch (error) {
        Pop.error(error)
        logger.error(error)
      }
    }

    onMounted(() => {
      getComs();
      getPostsById();
      getProfileByProfileId()
    })
    return {
      activeProfile: computed(() => AppState.activeProfile),
      profile: computed(() => AppState.account),
      coms: computed(() => AppState.coms),
      posts: computed(() => AppState.posts),
      page: computed(() => AppState.page),
      maxPage: computed(() => AppState.maxPage),

      async changeProfilePage(page) {
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

</style>
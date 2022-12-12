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
          <div class="col-12 elevation-5 rounded profileCard">
            <section class="row coverImg " height="45px">
              <img :src="profile.coverImg" alt="">
            </section>
            <section class="row justify-content-between p-2">
              <div class="col-3">
                <img class="rounded-circle profilePic" :src="profile.picture" alt="">
              </div>
              <div class="col-4 d-flex justify-content-evenly fs-2">
                <i>
                  <span class="mdi mdi-github selectable"></span>
                </i>
                <i>
                  <span class="mdi mdi-linkedin selectable"></span>
                </i>
                <i>
                  <span class="mdi mdi-file selectable"></span>
                </i>
              </div>
            </section>
            <section class="row p-4 justify-content-end">
              <div class="col-12 text-start">
                <p>{{ profile.class }}</p>
              </div>
              <div class="col-12 text-start">
                <h5>
                  {{ profile.name }}
                </h5>
              </div>
              <div class="col-12 text-start">
                <p>
                  {{ profile.bio }}
                </p>
              </div>
              <div class="col-2">
                <button class="btn btn-outline-info">Edit</button>
              </div>
            </section>
          </div>
        </section>
        <section class="row justify-content-centers p-2">
          <CreatePost :profile="profile" />
        </section>
        <section v-if="profile" v-for="p in posts" class="row justify-content-center p-2">
          <Posts :post="p" :profile="profile" />
        </section>
        <section class="row justify-content-between text-center">
          <div class="col-3">
            <button class="btn btn-outline-primary">Newer</button>
          </div>
          <div class="col-3">
            <button class="btn btn-outline-primary">Older</button>
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

    async function getPostsByMyId() {
      try {
        await postService.getPostsByMyId()
      } catch (error) {
        Pop.error(error)
        logger.error(error)
      }
    }

    onMounted(() => {
      getComs();
      getPostsByMyId();
    })
    return {
      profile: computed(() => AppState.account),
      coms: computed(() => AppState.coms),
      posts: computed(() => AppState.posts)
    }
  }
}
</script>

<style scoped lang="scss">
.profileCard {
  display: grid;
  place-content: center;
  text-align: center;
  user-select: none;

  .coverImg {
    width: 50vw;

    >img {
      height: 100px;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .profilePic {
    transform: translateY(-50px);
  }
}
</style>
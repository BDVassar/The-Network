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
              <div class="col-12 text-end">
                <div class="dropdown">
                  <button type="button" class="btn btn-outline-info dropdown-toggle" data-bs-toggle="dropdown"
                    aria-expanded="false" data-bs-auto-close="outside">
                    Edit Info
                  </button>
                  <form @submit.prevent="updateProfile()" class="dropdown-menu dropdown-menu-end p-3 w-100">
                    <div class="form-floating mb-3">
                      <input required type="text" class="form-control" v-model="profileData.name" id="floatingInput">
                      <label for="floatingInput">Name</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" v-model="profileData.email" id="floatingInput">
                      <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" v-model="profileData.picture" id="floatingInput">
                      <label for="floatingInput">Picture</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" v-model="profileData.bio" id="floatingInput">
                      <label for="floatingInput">Bio</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" v-model="profileData.coverImg" id="floatingInput">
                      <label for="floatingInput">Cover Image</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" v-model="profileData.class" id="floatingInput">
                      <label for="floatingInput">Class</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" v-model="profileData.github" id="floatingInput">
                      <label for="floatingInput">GitHub</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" v-model="profileData.linkedin" id="floatingInput">
                      <label for="floatingInput">LinkedIn</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" v-model="profileData.resume" id="floatingInput">
                      <label for="floatingInput">Resume</label>
                    </div>
                    <div class="mb-3">
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input" v-model="profileData.graduated"
                          id="dropdownCheck2">
                        <label class="form-check-label" for="dropdownCheck2">
                          Graduated
                        </label>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary">UpDate</button>
                  </form>
                </div>
              </div>
            </section>
          </div>
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
import { computed, ref } from "@vue/reactivity";
import { onMounted } from "vue";
import { AppState } from "../AppState.js";
import { comService } from "../services/ComService.js"
import { postService } from "../services/PostService.js"
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { useRoute } from "vue-router";
import { accountService } from "../services/AccountService.js";

export default {
  setup() {
    const profileData = ref({})

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
      profileData,
      profile: computed(() => AppState.account),
      coms: computed(() => AppState.coms),
      posts: computed(() => AppState.posts),

      async updateProfile() {
        try {
          await accountService.updateProfile(profileData.value)
        } catch (error) {
          Pop.error(error)
          logger.log(error)
        }
      }
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
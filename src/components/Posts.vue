<template>
  <div class="col-12 elevation-5 rounded p-4">
    <section class="row align-items-center justify-content-center">
      <div class="col-2">
        <router-link :to="{ name: 'CreatorProfile', params: { id: post.creatorId } }">
          <img class="img-fluid  rounded-circle selectable" :src="post.creator.picture" alt="">
        </router-link>
      </div>
      <div class="col-9">
        <section class="row justify-content-between">
          <div class="col-11">
            <h5>{{ post.creator.name }}</h5>
          </div>
          <div v-if="(post.creatorId == profile.id)" class="col-1">
            <div class="dropdown">
              <button type="button" class="btn btn-link mdi mdi-dots-horizontal fs-5 text-dark"
                data-bs-toggle="dropdown" aria-expanded="false">
              </button>
              <ul class="dropdown-menu">
                <li><a @click="removePost(post.id)" class="dropdown-item text-danger mdi mdi-delete" href="#">delete</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section class="row">
          <p>{{ new Date(post.createdAt).toLocaleDateString(`en-US`) }}</p>
        </section>
      </div>
    </section>
    <section class="row">
      <p>{{ post.body }}</p>
    </section>
    <section class="row">
      <img :src="post.imgUrl" alt="">
    </section>
    <section v-if="profile" class="row justify-content-end">
      <div v-if="(post.likedId == profile.id)" class="col-2 fs-5">
        <p><span class=" text-danger mdi mdi-heart selectable"></span>{{ post.likes.length }}</p>
      </div>
      <div v-else class="col-2 fs-5">
        <p><span @click="likePost(post.id)" class=" text-danger mdi mdi-heart-outline selectable"></span>{{
            post.likes.length
        }}</p>
      </div>
    </section>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Post } from "../models/Post.js";
import Pop from "../utils/Pop.js";
import { logger } from "../utils/Logger.js";
import { postService } from "../services/PostService.js";
export default {
  props: {
    post: { type: Post, required: true },
    profile: { type: Object, required: true }
  },
  setup() {
    return {
      async removePost(postId) {
        try {
          await postService.removePost(postId)
        } catch (error) {
          Pop.error(error)
          logger.log(error)
        }
      },

      async likePost(postId) {
        try {
          await postService.likePost(postId)
        } catch (error) {
          Pop.error(error)
          logger.log(error)
        }
      }

    }
  }
};
</script>


<style lang="scss" scoped>

</style>
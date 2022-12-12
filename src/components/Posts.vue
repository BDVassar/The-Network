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
            <h5 class="mdi mdi-dots-horizontal"></h5>
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
    <section class="row justify-content-end">
      <div class="col-2 fs-5">
        <p><span class=" text-danger mdi mdi-heart-outline selectable"></span>{{ post.likes.length }}</p>
      </div>
    </section>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Post } from "../models/Post.js";
export default {
  props: {
    post: { type: Post, required: true },
    profile: { type: Object, required: true }
  },
  setup() {
    return {}
  }
};
</script>


<style lang="scss" scoped>

</style>
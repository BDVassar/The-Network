<template>
  <form @submit.prevent="createPost()">
    <div class="col-12 elevation-5 rounded p-4">
      <section class="row align-items-top justify-content-center">
        <div class="col-2 p-0">
          <img class="img-fluid rounded-circle" :src="profile.picture" alt="">
        </div>
        <div class="col-10">
          <div class="form-floating">
            <textarea class="form-control" v-model="postData.body" placeholder="Leave a comment here"
              id="floatingTextarea2" style="height: 100px"></textarea>
            <label for="floatingTextarea2"></label>
          </div>
        </div>
      </section>
      <section class="row justify-content-between">
        <div class="col-6 text-end p-2">
          <div class="dropdown">
            <button type="button" class="btn btn-outline-primary dropdown-toggle mdi mdi-image"
              data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
              Photo
            </button>
            <div class="dropdown-menu p-4">
              <div class="mb-3">
                <label for="exampleDropdownFormEmail2" class="form-label">Photo Url</label>
                <input type="text" class="form-control" v-model="postData.imgUrl" id="exampleDropdownFormEmail2">
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 text-end p-2">
          <button type="submit" class="btn btn-outline-success mdi mdi-send"> Post</button>
        </div>
      </section>
    </div>
  </form>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref } from 'vue';
import Pop from "../utils/Pop.js";
import { logger } from "../utils/Logger.js";
import { postService } from "../services/PostService.js";
export default {
  props: { profile: { type: Object, required: true } },
  setup() {
    const postData = ref({})


    return {
      postData,
      async createPost() {
        try {
          await postService.createPost(postData.value)
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
<template>
  <router-link :to="{ name: 'SearchPage' }"></router-link>
    <form @submit.prevent="searchNerdWorks" action="">
      <div class="input-group mb-3">
        <input type="text" v-model="search.query" class="form-control border border-primary" placeholder="Search"
          aria-label="Search" aria-describedby="button-addon2">
        <button class="btn btn-outline-primary mdi mdi-magnify" type="submit" id="button-addon2"></button>
      </div>
    </form>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import Pop from "../utils/Pop.js";
import { logger } from "../utils/Logger.js";
import { postService } from "../services/PostService.js";
import { profileService } from "../services/ProfileService.js";
export default {
  setup() {
    const search = reactive({
      query: ''
    })
    return {
      search,
      async searchNerdWorks() {
        try {
          await profileService.searchProfiles(search)
          await postService.searchPosts(search)
        } catch (error) {
          Pop.error(error)
          logger.error(error)
        }
      }
    }
  }
};
</script>


<style lang="scss" scoped>

</style>
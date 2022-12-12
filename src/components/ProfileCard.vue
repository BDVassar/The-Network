<template>
  <div class="col-12 elevation-5 rounded profileCard">
    <section class="row coverImg " height="45px">
      <img :src="activeProfile.coverImg" alt="No Image">
    </section>
    <section class="row justify-content-between p-2">
      <div class="col-3">
        <img class="rounded-circle profilePic" :src="activeProfile.picture" alt="Mo Image">
      </div>
      <div class="col-4 d-flex justify-content-evenly fs-2">
        <i>
          <span class="mdi mdi-github"></span>
        </i>
        <i>
          <span class="mdi mdi-linkedin"></span>
        </i>
        <i>
          <span class="mdi mdi-file"></span>
        </i>
      </div>
    </section>
    <section class="row p-4 justify-content-end">
      <div class="col-12 text-start">
        <p>{{ activeProfile.class }}</p>
      </div>
      <div class="col-12 text-start">
        <h5>
          {{ activeProfile.name }}
        </h5>
      </div>
      <div class="col-12 text-start">
        <p>
          {{ activeProfile.bio }}
        </p>
      </div>
      <div v-if="(activeProfile.id == profile.id)" class="col-2">
        <router-link :to="{ name: 'Profile' }">
          <div class="btn btn-outline-info">Edit</div>
        </router-link>
      </div>
    </section>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
  props: {
    activeProfile: { type: Object, required: true },
    profile: { type: Object, required: true }
  },
  setup() {
    return {}
  }
};
</script>


<style lang="scss" scoped>
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
    height: 150px;
  }
}
</style>
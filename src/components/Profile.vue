<template>
  <div v-if="profile" class="col-12">
    <img class="img-fluid rounded-circle border border-primary elevation-3" :src="profile.picture" alt="No Photo">
    <i v-if="(profile.graduated == true)"
      class="mdi mdi-school fs-5 bg-light rounded-circle border border-info elevation-3">
    </i>
  </div>
  <div class="col-12 text-break">
    <h5>
      {{ profile.class }}
    </h5>
    <h5 class="">
      {{ profile.name }}
    </h5>
  </div>
  <div class="col-12 mdi mdi-github text-break">{{ profile.github }}</div>
  <div class="col-12 mdi mdi-linkedin text-break">{{ profile.linkedin }}</div>
  <div class="col-12 mdi mdi-file text-break">{{ profile.resume }}</div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
  props: { profile: { type: Object, required: true } },

  setup() {
    return {
    }
  }
};
</script>


<style lang="scss" scoped>

</style>
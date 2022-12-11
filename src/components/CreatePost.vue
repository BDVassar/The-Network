<template>
  <div class="col-12 elevation-5 rounded p-4">
    <section class="row align-items-top justify-content-center">
      <div class="col-2 p-0">
        <img class="img-fluid rounded-circle" :src="profile.picture" alt="">
      </div>
      <div class="col-10">
        <div class="form-floating">
          <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
            style="height: 100px"></textarea>
          <label for="floatingTextarea2"></label>
        </div>
      </div>
    </section>
    <section class="row justify-content-between">
      <div class="col-6 text-end">
        <p><span class="mdi mdi-image selectable"></span> Photo/Video</p>
      </div>
      <div class="col-6 text-end">
        <p><span class="mdi mdi-send selectable"></span> Post</p>
      </div>
    </section>

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
  props: { profile: { type: Object, required: true } },
  setup() {

    return {}
  }
};
</script>


<style lang="scss" scoped>

</style>
<template>
  <section v-if="(coms != null)" class="row justify-content-center align-items-center g-5 p-5">
    <div class="col-12 elevation-2 p-0">
      <img class="img-fluid" :src="coms[0].tall" alt="">
    </div>
    <div class="col-12  elevation-2 p-0">
      <img class="img-fluid" :src="coms[1].tall" alt="">
    </div>
  </section>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Com } from "../models/Com.js";
export default {
  props: { coms: { type: Array, required: true } },
  setup() {
    return {}
  }
};
</script>


<style lang="scss" scoped>

</style>
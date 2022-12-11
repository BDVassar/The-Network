<template>
  <div class="col-12 elevation-2 p-0">
    <img class="img-fluid" :src="coms[0].tall" alt="">
  </div>
  <div class="col-12  elevation-2 p-0">
    <img class="img-fluid" :src="coms[1].tall" alt="">
  </div>
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
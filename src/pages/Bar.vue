<script lang="ts">
import { defineComponent } from "vue";
import Header1 from "../components/headerAbove.vue";
import Header2 from "../components/leftHeader.vue";
export default defineComponent({
  name: "Bar",
  components: {
    Header1,
    Header2,
  },
});
</script>
<template>
  <div class="row">
    <Header1 />
  </div>
  <div class="d-flex w-100 vh-100 container-fluid p-0">
    <div class="row container-fluid p-0 m-0">
      <div class="row col-3 p-0 m-0">
        <Header2 />
      </div>
      <div class="row col-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style></style>

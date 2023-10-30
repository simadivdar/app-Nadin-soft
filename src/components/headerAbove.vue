<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HeaderAbove",

});
</script>
<template>
  <header>
    <div class="container-fluid p-0">
      <nav
        class="navbar navbar-expand-sm border w-100 d-flex justify-content-center"
        style="height: 60px"
      >
        <span class="fs-4 ms-4 ">App Bar</span>
      </nav>
    </div>
  </header>
</template>

<style>
@media (max-width: 576px) {
  .media {
    display: block;
  }
  .btn-head {
    margin-left: -4rem;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Weather",
});
</script>

<template>
  <div class="mt-5">
    <input
      class="form-control"
      type="text"
      placeholder="Enter city .."
      aria-label="default input name"
    />
    <div class="d-flex justify-content-center">
      <div
        class="mt-5 h-25 w-50 border d-flex flex-column justify-content-center"
      >
        <p>Tehran</p>
        <p>16</p>
        <p>winy</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

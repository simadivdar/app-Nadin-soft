<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Welcome",

});
</script>

<template>
  <div class="d-flex flex-column text-center mt-5">
    <h1>Welcome in App</h1>
    <div class="row mt-5">
      <input
        class="form-control"
        type="text"
        placeholder="My name is..."
        aria-label="default input name"
      />
    </div>
  </div>
</template>

<style scoped></style>

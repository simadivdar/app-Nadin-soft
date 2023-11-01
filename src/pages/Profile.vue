<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Profile",
});
</script>

<template>
  <div class="d-flex flex-column mt-5">
    <div class="row ">
      <input
        class="form-control"
        type="text"
        placeholder="My name is..."
        aria-label="default input name"
      />
      <div class="dropdown mt-2">
        <button
          class="btn border dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Teme
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Light</a></li>
          <li><a class="dropdown-item" href="#">Dark</a></li>
        </ul>
      </div>
      <div class="dropdown mt-2">
        <button
          class="btn border dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          locale
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">IR</a></li>
          <li><a class="dropdown-item" href="#">EN</a></li>
        </ul>
      </div>
      <button class="btn border mt-2">Save</button>
    </div>
  </div>
</template>

<style scoped></style>

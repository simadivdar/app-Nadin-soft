<script lang="ts">
import { defineComponent,ref } from "vue";
export default defineComponent({
  name: "Profile",
  setup(){
    const newUser=ref("")
    const addName=()=>{
        localStorage.removeItem("userName");
    }
    return{
        newUser,
        addName
    }
  }
});
</script>

<template>
  <div class="d-flex justify-content-center m-auto">
    <div class="col-4">
      <input
        class="form-control text-center"
        type="text"
        v-model="newUser"
        placeholder="Name"
        aria-label="default input name"
      />
      <div class="dropdown mt-2">
        <button
          class="btn border dropdown-toggle col-12"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Theme
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Light</a></li>
          <li><a class="dropdown-item" href="#">Dark</a></li>
        </ul>
      </div>
      <div class="dropdown mt-2">
        <button
          class="btn border dropdown-toggle col-12"
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
      <button class="btn border mt-2 col-8" @click="addName">Save</button>
    </div>
  </div>
</template>

<style scoped></style>

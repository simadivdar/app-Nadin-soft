<script setup lang="ts">
import { ref } from "vue";

const userName = ref<string>("");
const setName = () => {
  localStorage.setItem("userName", JSON.stringify(userName.value));
};
</script>

<template>
  <div class="d-flex flex-column justify-content-center text-center mt-5">
    <h1>{{ $t("Welcome to the app") }}</h1>
    <div class="m-auto col-4 mt-4">
      <input
        class="form-control"
        type="text"
        v-model="userName"
        :placeholder="$t('Name')"
        aria-label="default input name"
      />
      <router-link
        to="/app"
        @click="setName"
        class="nav-link text-dark mt-2 border col-2"
        data-toggle="pill"
        >{{ $t("Save") }}</router-link
      >
    </div>
  </div>
</template>

<style scoped></style>

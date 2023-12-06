<script setup lang="ts">
import { ref, onMounted } from "vue";
import Header1 from "../components/headerAbove.vue";
import Header2 from "../components/leftHeader.vue";

const theme = ref("");

onMounted(() => {
  const localTheme = localStorage.getItem("theme");
  if (localTheme) {
    document.documentElement.setAttribute("data-theme", localTheme);
    theme.value = localTheme;
  }
});
</script>

<template>
  <div class="mode">
    <div class="row mode-el">
      <Header1 />
    </div>
    <div class="d-flex w-100 vh-100 container-fluid p-0">
      <div class="row container-fluid p-0 m-0">
        <div class="row col-3 p-0 m-0 mode-el">
          <Header2 />
        </div>
        <div class="row col-9">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

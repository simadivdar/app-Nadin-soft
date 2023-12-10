<script setup lang="ts">
import { provide,ref } from "vue";
import inputCity from "../components/inputCity.vue";
const massage=ref<string>("This is a test for Task Provide..!!")
provide('massage', massage.value)
</script>

<template>
  <div class="mt-5">
    <inputCity />
  </div>
</template>

<style scoped></style>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import moment from "moment";
import showMessage from "../components/showMessage.vue";

const localTime =ref<string>("");
const hour = ref<number>();

const updateLocalTime = (): any => {
  localTime.value = moment().format("HH:mm");
  const timeArray: string[] = localTime.value.split(":");
  hour.value = parseInt(timeArray[0]);
};

onMounted(() => {
  setInterval(updateLocalTime, 100);
});

onUnmounted(() => {
  clearInterval(updateLocalTime());
});
</script>

<template>
  <div class="container-fluid m-auto">
    <div class="text-center">
      <h2>{{ localTime }}</h2>
      <div class="col-12">
        <show-message :time="hour" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

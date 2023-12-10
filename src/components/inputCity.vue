<script setup lang="ts">
import { ref, computed } from "vue";
import showWeather from "./showWeather.vue";
const city_name = ref<string>("");
const show = ref<boolean>(false);
const name = computed((): string => {
  return city_name.value.charAt(0).toUpperCase() + city_name.value.slice(1);
});
</script>

<template>
  <div class="mt-5">
    <div class="col-4">
      <input
        class="form-control text-center"
        type="text"
        v-model.lazy.trim="city_name"
        @keyup.enter="$emit('name',city_name),show =!show"
        :placeholder="$t('Enter city')"
        aria-label="default input name"
      />
    </div>
    <showWeather v-if="show" :name="name" />
  </div>
</template>

<style scoped></style>
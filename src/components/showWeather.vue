<script setup lang="ts">
import { inject } from "vue";
interface WeatherData {
  current_temperature: number;
  current_weather: string;
  weather_units: string;
}
const weatherData = inject<WeatherData>("weatherData");
const loading = inject<boolean>("loading");
const errorMessage = inject<string>("errorMessage");
</script>
<template>
  <div class="mt-5">
    <div class="d-flex justify-content-center text-center m-auto col-8">
      <div v-if="loading">loading...</div>
      <div v-else-if="errorMessage">{{ errorMessage }}</div>
      <div
        v-else
        class="mt-5 h-25 w-50 border d-flex flex-column justify-content-center"
      >
        <p>
          {{ weatherData?.current_temperature }}{{ weatherData?.weather_units }}
        </p>
        <p class="mb-4">{{ weatherData?.current_weather }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
